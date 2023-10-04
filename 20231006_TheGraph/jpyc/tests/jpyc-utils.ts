import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  AuthorizationCanceled,
  AuthorizationUsed,
  Blocklisted,
  BlocklisterChanged,
  Burn,
  Mint,
  MinterAdminChanged,
  MinterConfigured,
  MinterRemoved,
  OwnershipTransferred,
  Pause,
  PauserChanged,
  RescuerChanged,
  Transfer,
  UnBlocklisted,
  Unpause,
  Upgraded
} from "../generated/JPYC/JPYC"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createAuthorizationCanceledEvent(
  authorizer: Address,
  nonce: Bytes
): AuthorizationCanceled {
  let authorizationCanceledEvent = changetype<AuthorizationCanceled>(
    newMockEvent()
  )

  authorizationCanceledEvent.parameters = new Array()

  authorizationCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "authorizer",
      ethereum.Value.fromAddress(authorizer)
    )
  )
  authorizationCanceledEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromFixedBytes(nonce))
  )

  return authorizationCanceledEvent
}

export function createAuthorizationUsedEvent(
  authorizer: Address,
  nonce: Bytes
): AuthorizationUsed {
  let authorizationUsedEvent = changetype<AuthorizationUsed>(newMockEvent())

  authorizationUsedEvent.parameters = new Array()

  authorizationUsedEvent.parameters.push(
    new ethereum.EventParam(
      "authorizer",
      ethereum.Value.fromAddress(authorizer)
    )
  )
  authorizationUsedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromFixedBytes(nonce))
  )

  return authorizationUsedEvent
}

export function createBlocklistedEvent(_account: Address): Blocklisted {
  let blocklistedEvent = changetype<Blocklisted>(newMockEvent())

  blocklistedEvent.parameters = new Array()

  blocklistedEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return blocklistedEvent
}

export function createBlocklisterChangedEvent(
  newBlocklister: Address
): BlocklisterChanged {
  let blocklisterChangedEvent = changetype<BlocklisterChanged>(newMockEvent())

  blocklisterChangedEvent.parameters = new Array()

  blocklisterChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBlocklister",
      ethereum.Value.fromAddress(newBlocklister)
    )
  )

  return blocklisterChangedEvent
}

export function createBurnEvent(burner: Address, amount: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("burner", ethereum.Value.fromAddress(burner))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return burnEvent
}

export function createMintEvent(
  minter: Address,
  to: Address,
  amount: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintEvent
}

export function createMinterAdminChangedEvent(
  newMinterAdmin: Address
): MinterAdminChanged {
  let minterAdminChangedEvent = changetype<MinterAdminChanged>(newMockEvent())

  minterAdminChangedEvent.parameters = new Array()

  minterAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newMinterAdmin",
      ethereum.Value.fromAddress(newMinterAdmin)
    )
  )

  return minterAdminChangedEvent
}

export function createMinterConfiguredEvent(
  minter: Address,
  minterAllowedAmount: BigInt
): MinterConfigured {
  let minterConfiguredEvent = changetype<MinterConfigured>(newMockEvent())

  minterConfiguredEvent.parameters = new Array()

  minterConfiguredEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  minterConfiguredEvent.parameters.push(
    new ethereum.EventParam(
      "minterAllowedAmount",
      ethereum.Value.fromUnsignedBigInt(minterAllowedAmount)
    )
  )

  return minterConfiguredEvent
}

export function createMinterRemovedEvent(oldMinter: Address): MinterRemoved {
  let minterRemovedEvent = changetype<MinterRemoved>(newMockEvent())

  minterRemovedEvent.parameters = new Array()

  minterRemovedEvent.parameters.push(
    new ethereum.EventParam("oldMinter", ethereum.Value.fromAddress(oldMinter))
  )

  return minterRemovedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPauseEvent(): Pause {
  let pauseEvent = changetype<Pause>(newMockEvent())

  pauseEvent.parameters = new Array()

  return pauseEvent
}

export function createPauserChangedEvent(newAddress: Address): PauserChanged {
  let pauserChangedEvent = changetype<PauserChanged>(newMockEvent())

  pauserChangedEvent.parameters = new Array()

  pauserChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return pauserChangedEvent
}

export function createRescuerChangedEvent(newRescuer: Address): RescuerChanged {
  let rescuerChangedEvent = changetype<RescuerChanged>(newMockEvent())

  rescuerChangedEvent.parameters = new Array()

  rescuerChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRescuer",
      ethereum.Value.fromAddress(newRescuer)
    )
  )

  return rescuerChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnBlocklistedEvent(_account: Address): UnBlocklisted {
  let unBlocklistedEvent = changetype<UnBlocklisted>(newMockEvent())

  unBlocklistedEvent.parameters = new Array()

  unBlocklistedEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )

  return unBlocklistedEvent
}

export function createUnpauseEvent(): Unpause {
  let unpauseEvent = changetype<Unpause>(newMockEvent())

  unpauseEvent.parameters = new Array()

  return unpauseEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
