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
    root.DirectPortalRestApi.ContactAddressApi = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPContactAddress, root.DirectPortalRestApi.DPContactDetail);
  }
}(this, function(ApiClient, DPContactAddress, DPContactDetail) {
  'use strict';

  /**
   * ContactAddress service.
   * @module api/ContactAddressApi
   * @version v1
   */

  /**
   * Constructs a new ContactAddressApi. 
   * @alias module:api/ContactAddressApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiContactAddressActivateByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressActivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressActivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressActivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressActivateByIdGet");
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
        '/api/ContactAddress/Activate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressActiveGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressActiveGetCallback
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
     * @param {module:api/ContactAddressApi~apiContactAddressActiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressActiveGet = function(opts, callback) {
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
        '/api/ContactAddress/Active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressByIdGetCallback
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
     * @param {module:api/ContactAddressApi~apiContactAddressByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressByIdGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressByIdGet");
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
        '/api/ContactAddress/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressByNameByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressByNameByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ContactAddressApi~apiContactAddressByNameByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressByNameByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressByNameByIdGet");
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
        '/api/ContactAddress/ByName/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressByNamePost operation.
     * @callback module:api/ContactAddressApi~apiContactAddressByNamePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactAddress} opts.value 
     * @param {module:api/ContactAddressApi~apiContactAddressByNamePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressByNamePost = function(opts, callback) {
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
        '/api/ContactAddress/ByName', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressContactAddressesByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressContactAddressesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressContactAddressesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressContactAddressesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressContactAddressesByIdGet");
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
        '/api/ContactAddress/ContactAddresses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressContactAddressesByIdPost operation.
     * @callback module:api/ContactAddressApi~apiContactAddressContactAddressesByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactAddress>} opts.model 
     * @param {module:api/ContactAddressApi~apiContactAddressContactAddressesByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressContactAddressesByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressContactAddressesByIdPost");
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
        '/api/ContactAddress/ContactAddresses/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressContactDetailsByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressContactDetailsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressContactDetailsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressContactDetailsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressContactDetailsByIdGet");
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
        '/api/ContactAddress/ContactDetails/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressContactDetailsByIdPost operation.
     * @callback module:api/ContactAddressApi~apiContactAddressContactDetailsByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactDetail>} opts.model 
     * @param {module:api/ContactAddressApi~apiContactAddressContactDetailsByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressContactDetailsByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressContactDetailsByIdPost");
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
        '/api/ContactAddress/ContactDetails/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressDeactivateByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressDeactivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressDeactivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressDeactivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressDeactivateByIdGet");
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
        '/api/ContactAddress/Deactivate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressGetCallback
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
     * @param {module:api/ContactAddressApi~apiContactAddressGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressGet = function(opts, callback) {
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
        '/api/ContactAddress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressNotesByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressNotesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressNotesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressNotesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressNotesByIdGet");
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
        '/api/ContactAddress/Notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressPost operation.
     * @callback module:api/ContactAddressApi~apiContactAddressPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactAddress} opts.value 
     * @param {module:api/ContactAddressApi~apiContactAddressPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressPost = function(opts, callback) {
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
        '/api/ContactAddress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressPut operation.
     * @callback module:api/ContactAddressApi~apiContactAddressPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContactAddress} opts.value 
     * @param {module:api/ContactAddressApi~apiContactAddressPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressPut = function(opts, callback) {
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
        '/api/ContactAddress', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressRelationshipsByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressRelationshipsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressRelationshipsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressRelationshipsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressRelationshipsByIdGet");
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
        '/api/ContactAddress/Relationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressSetAsDefaultByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressSetAsDefaultByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressSetAsDefaultByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressSetAsDefaultByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressSetAsDefaultByIdGet");
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
        '/api/ContactAddress/SetAsDefault/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContactAddressTranslationsByIdGet operation.
     * @callback module:api/ContactAddressApi~apiContactAddressTranslationsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContactAddressApi~apiContactAddressTranslationsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContactAddressTranslationsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContactAddressTranslationsByIdGet");
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
        '/api/ContactAddress/Translations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));