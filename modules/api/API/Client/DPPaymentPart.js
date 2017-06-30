goog.provide('API.Client.DPPaymentPart');

/**
 * @record
 */
API.Client.DPPaymentPart = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.sequence;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.paymentId;

/**
 * @type {!API.Client.DPPayment}
 * @export
 */
API.Client.DPPaymentPart.prototype.payment;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPaymentPart.prototype.dueDate;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPaymentPart.prototype.paidDate;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.expectedAmount;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.actualAmount;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.receipt;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.method;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentPart.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPaymentPart.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPaymentPart.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPaymentPart.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPaymentPart.prototype.subscription;

