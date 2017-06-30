goog.provide('API.Client.DPPost');

/**
 * @record
 */
API.Client.DPPost = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.imageID;

/**
 * @type {!API.Client.DPDocument}
 * @export
 */
API.Client.DPPost.prototype.image;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPost.prototype.expires;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.typeId;

/**
 * @type {!API.Client.DPPostType}
 * @export
 */
API.Client.DPPost.prototype.type;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPost.prototype.created;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPost.prototype.modified;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.createdById;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPPost.prototype.createdBy;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.modifiedById;

/**
 * @type {!API.Client.DPPerson}
 * @export
 */
API.Client.DPPost.prototype.modifiedBy;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPost.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPost.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPost.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPost.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPost.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPost.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPost.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPost.prototype.subscription;

