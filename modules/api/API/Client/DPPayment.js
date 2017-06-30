goog.provide('API.Client.DPPayment');

/**
 * @record
 */
API.Client.DPPayment = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.sequence;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.saleId;

/**
 * @type {!API.Client.DPSale}
 * @export
 */
API.Client.DPPayment.prototype.sale;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPayment.prototype.dueDate;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPayment.prototype.paidDate;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.expectedAmount;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.actualAmount;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.percent;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.flag;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.receiptID;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPayment.prototype.isSpecial;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.method;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.typeId;

/**
 * @type {!API.Client.DPPaymentType}
 * @export
 */
API.Client.DPPayment.prototype.type;

/**
 * @type {!Array<!API.Client.DPNote>}
 * @export
 */
API.Client.DPPayment.prototype.notes;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPayment.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPayment.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPayment.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPayment.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPayment.prototype.subscription;

