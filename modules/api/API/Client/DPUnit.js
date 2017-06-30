goog.provide('API.Client.DPUnit');

/**
 * @record
 */
API.Client.DPUnit = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.buildingId;

/**
 * @type {!API.Client.DPBuilding}
 * @export
 */
API.Client.DPUnit.prototype.building;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.floor;

/**
 * @type {!string}
 * @export
 */
API.Client.DPUnit.prototype.unitNumber;

/**
 * @type {!Array<!API.Client.DPFeature>}
 * @export
 */
API.Client.DPUnit.prototype.features;

/**
 * @type {!Array<!API.Client.DPContractDetail>}
 * @export
 */
API.Client.DPUnit.prototype.contractDetails;

/**
 * @type {!Array<!API.Client.DPUnitQuota>}
 * @export
 */
API.Client.DPUnit.prototype.quotas;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.typeId;

/**
 * @type {!API.Client.DPUnitType}
 * @export
 */
API.Client.DPUnit.prototype.type;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.statusId;

/**
 * @type {!API.Client.DPUnitStatus}
 * @export
 */
API.Client.DPUnit.prototype.status;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.subTypeId;

/**
 * @type {!API.Client.DPUnitSubType}
 * @export
 */
API.Client.DPUnit.prototype.subType;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.size;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.sizeRounded;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.sizeLandOffice;

/**
 * @type {!Array<!API.Client.DPPrice>}
 * @export
 */
API.Client.DPUnit.prototype.prices;

/**
 * @type {!Array<!API.Client.DPNote>}
 * @export
 */
API.Client.DPUnit.prototype.notes;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.reservationId;

/**
 * @type {!API.Client.DPReservation}
 * @export
 */
API.Client.DPUnit.prototype.reservation;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPUnit.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPUnit.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPUnit.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPUnit.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPUnit.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPUnit.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPUnit.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPUnit.prototype.subscription;

