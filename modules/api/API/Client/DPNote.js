goog.provide('API.Client.DPNote');

/**
 * @record
 */
API.Client.DPNote = function() {}

/**
 * @type {!Array<!API.Client.DPRelationship>}
 * @export
 */
API.Client.DPNote.prototype.relationships;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNote.prototype.text;

/**
 * @type {!number}
 * @export
 */
API.Client.DPNote.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNote.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNote.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPNote.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPNote.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNote.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPNote.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPNote.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPNote.prototype.subscription;

