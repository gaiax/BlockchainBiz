//! ```
//! contract Counter {
//!     uint256 public number;
//!     function setNumber(uint256 newNumber) public {
//!         number = newNumber;
//!     }
//!     function increment() public {
//!         number++;
//!     }
//! }
//! ```

#![cfg_attr(not(feature = "export-abi"), no_main)]
extern crate alloc;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use stylus_sdk::{alloy_primitives::U256, prelude::*};
use stylus_sdk::{msg};

sol_storage! {
    #[entrypoint]
    pub struct Counter {
        uint256 number;
        address executer;
    }
}

sol_interface! {
    interface ICounterSol {
        function incrementSol() public;
    }
}

#[external]
impl Counter {
    pub fn number(&self) -> Result<U256, Vec<u8>> {
        Ok(self.number.get())
    }

    pub fn increment(&mut self) -> Result<(), Vec<u8>> {
        let number = self.number.get();
        self.number.set(number + U256::from(1));
        Ok(())
    }

    pub fn gas_test(&mut self) -> Result<Vec<U256>, Vec<u8>> {
        let mut result = Vec::new();
        for i in 0..100 {
            result.push(U256::from(i));
        }
        self.executer.set(msg::sender());
        Ok(result)
    }

    pub fn increment_sol_contract(&mut self, account: ICounterSol) -> Result<(), Vec<u8>> {
        Ok(account.increment_sol(self)?)
    }

    #[view]
    pub fn substring(&self, text: String) -> Result<String, Vec<u8>> {
        if let Some(substring) = text.get(2..3) {
            Ok(substring.to_string())
        } else {
            Err(b"Index out of bounds".to_vec())
        }
    }
}
