goog.provide('API.Client.DPPermission');

/**
 * @record
 */
API.Client.DPPermission = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPermission.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPermission.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPermission.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPermission.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPermission.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPermission.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPermission.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPermission.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPermission.prototype.subscription;

