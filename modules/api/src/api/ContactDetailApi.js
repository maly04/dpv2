/**
 * Direct Portal REST API
 * The Direct Portal REST API
 *
 * OpenAPI spec version: v1
 * Contact: info@direct-portal.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DPContactAddress', 'model/DPContactDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DPContactAddress'), require('../model/DPContactDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.ContactDetailApi = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPContactAddress, root.DirectPortalRestApi.DPContactDetail);
  }
}(this, function(ApiClient, DPContactAddress, DPContactDetail) {
  'use strict';

  /**
   * ContactDetail service.
   * @module api/ContactDetailApi
   * @version v1
   */

  /**
   * Constructs a new ContactDetailApi. 
   * @alias module:api/ContactDetailApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiContactDetailActivateByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailActivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailActivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailActivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailActivateByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Activate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailActiveGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailActiveGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/ContactDetailApi~apiContactDetailActiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailActiveGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/ContactDetailApi~apiContactDetailByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailByIdGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailByNameByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailByNameByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ContactDetailApi~apiContactDetailByNameByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailByNameByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailByNameByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ByName/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailByNamePost operation.
     * @callback module:api/ContactDetailApi~apiContactDetailByNamePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactDetail} opts.value 
     * @param {module:api/ContactDetailApi~apiContactDetailByNamePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailByNamePost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ByName', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailContactAddressesByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailContactAddressesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailContactAddressesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailContactAddressesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailContactAddressesByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ContactAddresses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailContactAddressesByIdPost operation.
     * @callback module:api/ContactDetailApi~apiContactDetailContactAddressesByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactAddress>} opts.model 
     * @param {module:api/ContactDetailApi~apiContactDetailContactAddressesByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailContactAddressesByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailContactAddressesByIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ContactAddresses/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailContactDetailsByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailContactDetailsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailContactDetailsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailContactDetailsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailContactDetailsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ContactDetails/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailContactDetailsByIdPost operation.
     * @callback module:api/ContactDetailApi~apiContactDetailContactDetailsByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactDetail>} opts.model 
     * @param {module:api/ContactDetailApi~apiContactDetailContactDetailsByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailContactDetailsByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailContactDetailsByIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/ContactDetails/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailDeactivateByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailDeactivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailDeactivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailDeactivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailDeactivateByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Deactivate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/ContactDetailApi~apiContactDetailGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailNotesByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailNotesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailNotesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailNotesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailNotesByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailPost operation.
     * @callback module:api/ContactDetailApi~apiContactDetailPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactDetail} opts.value 
     * @param {module:api/ContactDetailApi~apiContactDetailPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailPut operation.
     * @callback module:api/ContactDetailApi~apiContactDetailPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactDetail} opts.value 
     * @param {module:api/ContactDetailApi~apiContactDetailPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailRelationshipsByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailRelationshipsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailRelationshipsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailRelationshipsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailRelationshipsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Relationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailSetAsDefaultByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailSetAsDefaultByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailSetAsDefaultByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailSetAsDefaultByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailSetAsDefaultByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/SetAsDefault/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactDetailTranslationsByIdGet operation.
     * @callback module:api/ContactDetailApi~apiContactDetailTranslationsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactDetailApi~apiContactDetailTranslationsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactDetailTranslationsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactDetailTranslationsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/ContactDetail/Translations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));