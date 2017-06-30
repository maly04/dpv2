goog.provide('API.Client.DPPaymentType');

/**
 * @record
 */
API.Client.DPPaymentType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPaymentType.prototype.subscription;

