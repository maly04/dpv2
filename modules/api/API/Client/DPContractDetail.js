goog.provide('API.Client.DPContractDetail');

/**
 * @record
 */
API.Client.DPContractDetail = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPContractDetail.prototype.typeId;

/**
 * @type {!API.Client.DPContractDetailType}
 * @export
 */
API.Client.DPContractDetail.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContractDetail.prototype.value;

/**
 * @type {!Array<!API.Client.DPTranslation>}
 * @export
 */
API.Client.DPContractDetail.prototype.translations;

/**
 * @type {!number}
 * @export
 */
API.Client.DPContractDetail.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContractDetail.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContractDetail.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPContractDetail.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPContractDetail.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContractDetail.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPContractDetail.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPContractDetail.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPContractDetail.prototype.subscription;

