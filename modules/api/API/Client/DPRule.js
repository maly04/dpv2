goog.provide('API.Client.DPRule');

/**
 * @record
 */
API.Client.DPRule = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPRule.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRule.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRule.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPRule.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPRule.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRule.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPRule.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPRule.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPRule.prototype.subscription;

