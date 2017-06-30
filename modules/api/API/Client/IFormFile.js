goog.provide('API.Client.IFormFile');

/**
 * @record
 */
API.Client.IFormFile = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.IFormFile.prototype.contentType;

/**
 * @type {!string}
 * @export
 */
API.Client.IFormFile.prototype.contentDisposition;

/**
 * @type {!Object<!string, Array<!string>>}
 * @export
 */
API.Client.IFormFile.prototype.headers;

/**
 * @type {!number}
 * @export
 */
API.Client.IFormFile.prototype.length;

/**
 * @type {!string}
 * @export
 */
API.Client.IFormFile.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.IFormFile.prototype.fileName;

