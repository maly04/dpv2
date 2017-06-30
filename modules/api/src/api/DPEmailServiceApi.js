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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.DPEmailServiceApi = factory(root.DirectPortalRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * DPEmailService service.
   * @module api/DPEmailServiceApi
   * @version v1
   */

  /**
   * Constructs a new DPEmailServiceApi. 
   * @alias module:api/DPEmailServiceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiEmailSendEmailPost operation.
     * @callback module:api/DPEmailServiceApi~apiEmailSendEmailPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromName 
     * @param {String} opts.fromAddress 
     * @param {String} opts.toName 
     * @param {String} opts.toAddress 
     * @param {String} opts.cc 
     * @param {String} opts.subject 
     * @param {Boolean} opts.isHtml 
     * @param {String} opts.body 
     * @param {module:api/DPEmailServiceApi~apiEmailSendEmailPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiEmailSendEmailPost = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'FromName': opts['fromName'],
        'FromAddress': opts['fromAddress'],
        'ToName': opts['toName'],
        'ToAddress': opts['toAddress'],
        'Cc': opts['cc'],
        'Subject': opts['subject'],
        'IsHtml': opts['isHtml'],
        'Body': opts['body']
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
        '/api/email/SendEmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
