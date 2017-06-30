goog.provide('API.Client.DPRelationship');

/**
 * @record
 */
API.Client.DPRelationship = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPRelationship.prototype.typeId;

/**
 * @type {!API.Client.DPRelationshipType}
 * @export
 */
API.Client.DPRelationship.prototype.type;

/**
 * @type {!number}
 * @export
 */
API.Client.DPRelationship.prototype.targetId;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRelationship.prototype.targetType;

/**
 * @type {!number}
 * @export
 */
API.Client.DPRelationship.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRelationship.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRelationship.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPRelationship.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPRelationship.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRelationship.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRelationship.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPRelationship.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPRelationship.prototype.subscription;

