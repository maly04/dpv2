goog.provide('API.Client.DPPerson');

/**
 * @record
 */
API.Client.DPPerson = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.DPPerson.prototype.prefixId;

/**
 * @type {!API.Client.DPPersonPrefix}
 * @export
 */
API.Client.DPPerson.prototype.prefix;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.firstName;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.lastName;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.occupation;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.passportNumber;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.passportIssuedFrom;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPerson.prototype.passportExpiryDate;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPerson.prototype.passportIssueDate;

/**
 * @type {!Date}
 * @export
 */
API.Client.DPPerson.prototype.dateOfBirth;

/**
 * @type {!Array<!API.Client.DPOrganizationUnit>}
 * @export
 */
API.Client.DPPerson.prototype.organizationUnits;

/**
 * @type {!Array<!API.Client.DPContactAddress>}
 * @export
 */
API.Client.DPPerson.prototype.contactAddresses;

/**
 * @type {!Array<!API.Client.DPContactDetail>}
 * @export
 */
API.Client.DPPerson.prototype.contactDetails;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPerson.prototype.nationalityId;

/**
 * @type {!API.Client.DPNationality}
 * @export
 */
API.Client.DPPerson.prototype.nationality;

/**
 * @type {!API.Client.DPPersonType}
 * @export
 */
API.Client.DPPerson.prototype.type;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPerson.prototype.typeId;

/**
 * @type {!Array<!API.Client.DPRelationship>}
 * @export
 */
API.Client.DPPerson.prototype.relationships;

/**
 * @type {!Array<!API.Client.DPTranslation>}
 * @export
 */
API.Client.DPPerson.prototype.translations;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPerson.prototype.ID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.description;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPerson.prototype.active;

/**
 * @type {!boolean}
 * @export
 */
API.Client.DPPerson.prototype._default;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.migrationID;

/**
 * @type {!string}
 * @export
 */
API.Client.DPPerson.prototype.color;

/**
 * @type {!number}
 * @export
 */
API.Client.DPPerson.prototype.subscriptionID;

/**
 * @type {!API.Client.DPSubscription}
 * @export
 */
API.Client.DPPerson.prototype.subscription;

