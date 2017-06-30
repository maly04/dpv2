goog.provide('API.Client.DPQuota');

/**
 * @record
 */
API.Client.DPQuota = function() {}

/**
 * @type {!Array<!API.Client.DPUnitQuota>}
 * @export
 */
API.Client.DPQuota.prototype.unitQuotas;

/**
 * @type {!number}
 * @export
 */
API.Client.DPQuota.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPQuota.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPQuota.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPQuota.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPQuota.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPQuota.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPQuota.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPQuota.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPQuota.prototype.subscription;

