goog.provide('API.Client.DPBuildingPhase');

/**
 * @record
 */
API.Client.DPBuildingPhase = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingPhase.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingPhase.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingPhase.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingPhase.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPBuildingPhase.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingPhase.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPBuildingPhase.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPBuildingPhase.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPBuildingPhase.prototype.subscription;

