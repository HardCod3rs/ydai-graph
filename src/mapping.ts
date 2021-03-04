import { BigInt } from "@graphprotocol/graph-ts";
import {
  yvault,
  Transfer,
  Approval,
  StrategyAdded,
  StrategyReported,
  UpdateGovernance,
  UpdateManagement,
  UpdateGuestList,
  UpdateRewards,
  UpdateDepositLimit,
  UpdatePerformanceFee,
  UpdateManagementFee,
  UpdateGuardian,
  EmergencyShutdown,
  UpdateWithdrawalQueue,
  StrategyUpdateDebtRatio,
  StrategyUpdateRateLimit,
  StrategyUpdatePerformanceFee,
  StrategyMigrated,
  StrategyRevoked,
  StrategyRemovedFromQueue,
  StrategyAddedToQueue,
} from "../generated/yvault/yvault";
import { Account } from "../generated/schema";

const localAddress = "0x0000000000000000000000000000000000000000";

export function handleTransfer(event: Transfer): void {
  let entity = Account.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new Account(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
    entity.currentDeposit = BigInt.fromI32(0);
  }

  if (event.params.sender.toHexString() == localAddress)
    entity.currentDeposit = entity.currentDeposit.plus(event.params.value);

  if (event.params.receiver.toHexString() == localAddress)
    entity.currentDeposit = entity.currentDeposit.minus(event.params.value);

  entity.save();
}
// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.apiVersion(...)
// - contract.transfer(...)
// - contract.transferFrom(...)
// - contract.approve(...)
// - contract.increaseAllowance(...)
// - contract.decreaseAllowance(...)
// - contract.permit(...)
// - contract.totalAssets(...)
// - contract.deposit(...)
// - contract.deposit(...)
// - contract.deposit(...)
// - contract.maxAvailableShares(...)
// - contract.withdraw(...)
// - contract.withdraw(...)
// - contract.withdraw(...)
// - contract.withdraw(...)
// - contract.pricePerShare(...)
// - contract.debtOutstanding(...)
// - contract.debtOutstanding(...)
// - contract.creditAvailable(...)
// - contract.creditAvailable(...)
// - contract.availableDepositLimit(...)
// - contract.expectedReturn(...)
// - contract.expectedReturn(...)
// - contract.report(...)
// - contract.name(...)
// - contract.symbol(...)
// - contract.decimals(...)
// - contract.balanceOf(...)
// - contract.allowance(...)
// - contract.totalSupply(...)
// - contract.token(...)
// - contract.governance(...)
// - contract.management(...)
// - contract.guardian(...)
// - contract.guestList(...)
// - contract.strategies(...)
// - contract.withdrawalQueue(...)
// - contract.emergencyShutdown(...)
// - contract.depositLimit(...)
// - contract.debtRatio(...)
// - contract.totalDebt(...)
// - contract.lastReport(...)
// - contract.activation(...)
// - contract.rewards(...)
// - contract.managementFee(...)
// - contract.performanceFee(...)
// - contract.nonces(...)
// - contract.DOMAIN_SEPARATOR(...)

export function handleApproval(event: Approval): void {}

export function handleStrategyAdded(event: StrategyAdded): void {}

export function handleStrategyReported(event: StrategyReported): void {}

export function handleUpdateGovernance(event: UpdateGovernance): void {}

export function handleUpdateManagement(event: UpdateManagement): void {}

export function handleUpdateGuestList(event: UpdateGuestList): void {}

export function handleUpdateRewards(event: UpdateRewards): void {}

export function handleUpdateDepositLimit(event: UpdateDepositLimit): void {}

export function handleUpdatePerformanceFee(event: UpdatePerformanceFee): void {}

export function handleUpdateManagementFee(event: UpdateManagementFee): void {}

export function handleUpdateGuardian(event: UpdateGuardian): void {}

export function handleEmergencyShutdown(event: EmergencyShutdown): void {}

export function handleUpdateWithdrawalQueue(
  event: UpdateWithdrawalQueue
): void {}

export function handleStrategyUpdateDebtRatio(
  event: StrategyUpdateDebtRatio
): void {}

export function handleStrategyUpdateRateLimit(
  event: StrategyUpdateRateLimit
): void {}

export function handleStrategyUpdatePerformanceFee(
  event: StrategyUpdatePerformanceFee
): void {}

export function handleStrategyMigrated(event: StrategyMigrated): void {}

export function handleStrategyRevoked(event: StrategyRevoked): void {}

export function handleStrategyRemovedFromQueue(
  event: StrategyRemovedFromQueue
): void {}

export function handleStrategyAddedToQueue(event: StrategyAddedToQueue): void {}
