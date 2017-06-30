goog.provide('API.Client.DPBuildingStatusType');

/**
 * @record
 */
API.Client.DPBuildingStatusType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingStatusType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPBuildingStatusType.prototype.subscription;

