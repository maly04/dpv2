goog.provide('API.Client.DPReservationType');

/**
 * @record
 */
API.Client.DPReservationType = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservationType.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservationType.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservationType.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPReservationType.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPReservationType.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservationType.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPReservationType.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPReservationType.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPReservationType.prototype.subscription;

