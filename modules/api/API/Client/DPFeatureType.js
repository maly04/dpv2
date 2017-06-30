goog.provide('API.Client.DPFeatureType');

/**
 * @record
 */
API.Client.DPFeatureType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPFeatureType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPFeatureType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPFeatureType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPFeatureType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPFeatureType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPFeatureType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPFeatureType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPFeatureType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPFeatureType.prototype.subscription;

