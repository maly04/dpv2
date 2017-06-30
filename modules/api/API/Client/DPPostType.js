goog.provide('API.Client.DPPostType');

/**
 * @record
 */
API.Client.DPPostType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPostType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPostType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPostType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPostType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPostType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPostType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPostType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPostType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPostType.prototype.subscription;

