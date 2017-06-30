goog.provide('API.Client.DPContract');

/**
 * @record
 */
API.Client.DPContract = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPContract.prototype.organizationIssuedToId;

/**
 * @type {!API.Client.DPOrganizationUnit}
 * @export
 */
API.Client.DPContract.prototype.organizationIssuedTo;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPContract.prototype.startDateTime;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPContract.prototype.endDateTime;

/**
 * @type {!Array<!API.Client.DPRelationship>}
 * @export
 */
API.Client.DPContract.prototype.relationships;

/**
 * @type {!number}
 * @export
 */
API.Client.DPContract.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContract.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContract.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPContract.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPContract.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContract.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContract.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPContract.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPContract.prototype.subscription;

