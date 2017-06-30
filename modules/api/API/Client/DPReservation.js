goog.provide('API.Client.DPReservation');

/**
 * @record
 */
API.Client.DPReservation = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.saleID;

/**
 * @type {!API.Client.DPSale}
 * @export
 */
API.Client.DPReservation.prototype.sale;

/**
 * @type {!API.Client.DPOwnershipType}
 * @export
 */
API.Client.DPReservation.prototype.ownershipType;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.ownershipTypeID;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.salesPersonID;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPReservation.prototype.salesPerson;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.salesPersonCommission;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.salesPersonCommissionComment;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.generalRemark;

/**
 * @type {!API.Client.DPReservationType}
 * @export
 */
API.Client.DPReservation.prototype.type;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.typeID;

/**
 * @type {!API.Client.DPOrganizationUnit}
 * @export
 */
API.Client.DPReservation.prototype.agency;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.agencyID;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.agencyCommission;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.agencyCommissionComment;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.at;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPReservation.prototype.dateOfReservation;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPReservation.prototype.dateOfContract;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.unitID;

/**
 * @type {!API.Client.DPUnit}
 * @export
 */
API.Client.DPReservation.prototype.unit;

/**
 * @type {!Array<!API.Client.DPContractDetail>}
 * @export
 */
API.Client.DPReservation.prototype.contractDetails;

/**
 * @type {!Array<!API.Client.DPRelationship>}
 * @export
 */
API.Client.DPReservation.prototype.relationships;

/**
 * @type {!Array<!API.Client.DPSalesRequest>}
 * @export
 */
API.Client.DPReservation.prototype.salesRequests;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.deposit;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.onContract;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.installments;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.onKey;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.transferPercentage;

/**
 * @type {!API.Client.DPPaymentMethod}
 * @export
 */
API.Client.DPReservation.prototype.paymentMethod;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.paymentMethodID;

/**
 * @type {!API.Client.DPSaleStatusType}
 * @export
 */
API.Client.DPReservation.prototype.statusType;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPReservation.prototype.created;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPReservation.prototype.modified;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.createdById;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPReservation.prototype.createdBy;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.modifiedById;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPReservation.prototype.modifiedBy;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPReservation.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPReservation.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservation.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservation.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPReservation.prototype.subscription;

