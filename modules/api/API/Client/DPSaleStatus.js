goog.provide('API.Client.DPSaleStatus');

/**
 * @record
 */
API.Client.DPSaleStatus = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPSaleStatus.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSaleStatus.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSaleStatus.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPSaleStatus.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPSaleStatus.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSaleStatus.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPSaleStatus.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPSaleStatus.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPSaleStatus.prototype.subscription;

