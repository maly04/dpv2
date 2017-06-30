goog.provide('API.Client.DPPriceType');

/**
 * @record
 */
API.Client.DPPriceType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPriceType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPriceType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPriceType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPriceType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPriceType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPriceType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPriceType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPriceType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPriceType.prototype.subscription;

