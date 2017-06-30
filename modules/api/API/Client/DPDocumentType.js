goog.provide('API.Client.DPDocumentType');

/**
 * @record
 */
API.Client.DPDocumentType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPDocumentType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPDocumentType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPDocumentType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPDocumentType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPDocumentType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPDocumentType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPDocumentType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPDocumentType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPDocumentType.prototype.subscription;

