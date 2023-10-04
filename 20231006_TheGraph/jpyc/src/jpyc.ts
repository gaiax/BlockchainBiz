import { BigInt } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  AuthorizationCanceled as AuthorizationCanceledEvent,
  AuthorizationUsed as AuthorizationUsedEvent,
  Blocklisted as BlocklistedEvent,
  BlocklisterChanged as BlocklisterChangedEvent,
  Burn as BurnEvent,
  Mint as MintEvent,
  MinterAdminChanged as MinterAdminChangedEvent,
  MinterConfigured as MinterConfiguredEvent,
  MinterRemoved as MinterRemovedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Pause as PauseEvent,
  PauserChanged as PauserChangedEvent,
  RescuerChanged as RescuerChangedEvent,
  Transfer as TransferEvent,
  UnBlocklisted as UnBlocklistedEvent,
  Unpause as UnpauseEvent,
  Upgraded as UpgradedEvent
} from "../generated/JPYC/JPYC"
import {
  DailyVolume,
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
} from "../generated/schema"

function updateDailyVolume(
  blockTimestamp: BigInt,
  value : BigInt,
): void {

  let timestamp = blockTimestamp.toI32();
  let dayID = timestamp / 86400;
  let id = dayID.toString();
  let dailyVolumeEntity = DailyVolume.load(id);

  if (dailyVolumeEntity == null) {
    dailyVolumeEntity = new DailyVolume(id);
    dailyVolumeEntity.volume = BigInt.fromString('0');
    dailyVolumeEntity.transactionCount=0;
  }

  let dayStartTimestamp = dayID * 86400;
  dailyVolumeEntity.date = dayStartTimestamp
  dailyVolumeEntity.volume = dailyVolumeEntity.volume.plus(value)
  dailyVolumeEntity.transactionCount += 1

  dailyVolumeEntity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizationCanceled(
  event: AuthorizationCanceledEvent
): void {
  let entity = new AuthorizationCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.authorizer = event.params.authorizer
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuthorizationUsed(event: AuthorizationUsedEvent): void {
  let entity = new AuthorizationUsed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.authorizer = event.params.authorizer
  entity.nonce = event.params.nonce

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlocklisted(event: BlocklistedEvent): void {
  let entity = new Blocklisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._account = event.params._account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBlocklisterChanged(event: BlocklisterChangedEvent): void {
  let entity = new BlocklisterChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newBlocklister = event.params.newBlocklister

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.burner = event.params.burner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterAdminChanged(event: MinterAdminChangedEvent): void {
  let entity = new MinterAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMinterAdmin = event.params.newMinterAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterConfigured(event: MinterConfiguredEvent): void {
  let entity = new MinterConfigured(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minter = event.params.minter
  entity.minterAllowedAmount = event.params.minterAllowedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new MinterRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMinter = event.params.oldMinter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePauserChanged(event: PauserChangedEvent): void {
  let entity = new PauserChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRescuerChanged(event: RescuerChangedEvent): void {
  let entity = new RescuerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRescuer = event.params.newRescuer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  updateDailyVolume(event.block.timestamp, event.params.value)
}

export function handleUnBlocklisted(event: UnBlocklistedEvent): void {
  let entity = new UnBlocklisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._account = event.params._account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
