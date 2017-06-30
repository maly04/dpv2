goog.provide('API.Client.DPBuildingStatus');

/**
 * @record
 */
API.Client.DPBuildingStatus = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingStatus.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatus.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatus.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingStatus.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingStatus.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatus.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatus.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingStatus.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPBuildingStatus.prototype.subscription;

