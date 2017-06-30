goog.provide('API.Client.DPOrganizationUnit');

/**
 * @record
 */
API.Client.DPOrganizationUnit = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.typeId;

/**
 * @type {!API.Client.DPOrganizationUnitType}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.type;

/**
 * @type {!Array<!API.Client.DPOrganizationUnit>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.organizationUnits;

/**
 * @type {!Array<!API.Client.DPContactAddress>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.contactAddresses;

/**
 * @type {!Array<!API.Client.DPContactDetail>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.contactDetails;

/**
 * @type {!string}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.taxIdentification;

/**
 * @type {!number}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.statusId;

/**
 * @type {!API.Client.DPOrganizationUnitStatus}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.status;

/**
 * @type {!Array<!API.Client.DPTranslation>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.translations;

/**
 * @type {!Array<!API.Client.DPRelationship>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.relationships;

/**
 * @type {!Array<!API.Client.DPNote>}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.notes;

/**
 * @type {!number}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPOrganizationUnit.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPOrganizationUnit.prototype.subscription;

