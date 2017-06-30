/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.RuleApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * The Direct Portal REST API
 * Version: v1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
/**
 * @license Use under Direct Portal License
 * http://wwww.direct-portal.com
 */

goog.provide('API.Client.RuleApi');

goog.require('API.Client.DPContactAddress');
goog.require('API.Client.DPContactDetail');
goog.require('API.Client.DPRule');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.RuleApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('RuleApiBasePath') ?
                   /** @type {!string} */ ($injector.get('RuleApiBasePath')) :
                   'https://localhost/';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('RuleApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('RuleApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.RuleApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleActivateByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Activate/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleActivateByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleActiveGet = function(opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Active';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleByIdGet = function(id, opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleByIdGet');
  }
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleByNameByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ByName/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleByNameByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPRule=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleByNamePost = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ByName';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleContactAddressesByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ContactAddresses/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleContactAddressesByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!Array<!API.Client.DPContactAddress>=} opt_model 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleContactAddressesByIdPost = function(id, opt_model, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ContactAddresses/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleContactAddressesByIdPost');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_model,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleContactDetailsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ContactDetails/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleContactDetailsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!Array<!API.Client.DPContactDetail>=} opt_model 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleContactDetailsByIdPost = function(id, opt_model, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/ContactDetails/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleContactDetailsByIdPost');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_model,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleDeactivateByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Deactivate/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleDeactivateByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleGet = function(opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleNotesByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Notes/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleNotesByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPRule=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRulePost = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPRule=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRulePut = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleRelationshipsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Relationships/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleRelationshipsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleSetAsDefaultByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/SetAsDefault/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleSetAsDefaultByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.RuleApi.prototype.apiRuleTranslationsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/Rule/Translations/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiRuleTranslationsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
