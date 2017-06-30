goog.provide('API.Client.DPPaymentMethod');

/**
 * @record
 */
API.Client.DPPaymentMethod = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentMethod.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentMethod.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentMethod.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentMethod.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentMethod.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentMethod.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentMethod.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentMethod.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPaymentMethod.prototype.subscription;

