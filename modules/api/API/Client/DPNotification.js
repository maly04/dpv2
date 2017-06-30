goog.provide('API.Client.DPNotification');

/**
 * @record
 */
API.Client.DPNotification = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPNotification.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNotification.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNotification.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPNotification.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPNotification.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNotification.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNotification.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPNotification.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPNotification.prototype.subscription;

