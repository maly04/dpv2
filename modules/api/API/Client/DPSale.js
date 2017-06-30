goog.provide('API.Client.DPSale');

/**
 * @record
 */
API.Client.DPSale = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.customerId;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.complexId;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.buildingId;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.unitId;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPSale.prototype.customer;

/**
 * @type {!API.Client.DPComplex}
 * @export
 */
API.Client.DPSale.prototype.complex;

/**
 * @type {!API.Client.DPBuilding}
 * @export
 */
API.Client.DPSale.prototype.building;

/**
 * @type {!API.Client.DPUnit}
 * @export
 */
API.Client.DPSale.prototype.unit;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPSale.prototype.cancelled;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.statusId;

/**
 * @type {!API.Client.DPSaleStatus}
 * @export
 */
API.Client.DPSale.prototype.status;

/**
 * @type {!Array<!API.Client.DPSaleStatusType>}
 * @export
 */
API.Client.DPSale.prototype.statusTypes;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSale.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSale.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPSale.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPSale.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSale.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSale.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSale.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPSale.prototype.subscription;

