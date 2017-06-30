goog.provide('API.Client.DPApproval');

/**
 * @record
 */
API.Client.DPApproval = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPApproval.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPApproval.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPApproval.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPApproval.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPApproval.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPApproval.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPApproval.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPApproval.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPApproval.prototype.subscription;

