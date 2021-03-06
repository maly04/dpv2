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
    define(['ApiClient', 'model/DPPayment', 'model/DPSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DPPayment'), require('./DPSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.DPPaymentPart = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPPayment, root.DirectPortalRestApi.DPSubscription);
  }
}(this, function(ApiClient, DPPayment, DPSubscription) {
  'use strict';




  /**
   * The DPPaymentPart model module.
   * @module model/DPPaymentPart
   * @version v1
   */

  /**
   * Constructs a new <code>DPPaymentPart</code>.
   * @alias module:model/DPPaymentPart
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>DPPaymentPart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DPPaymentPart} obj Optional instance to populate.
   * @return {module:model/DPPaymentPart} The populated <code>DPPaymentPart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Sequence')) {
        obj['Sequence'] = ApiClient.convertToType(data['Sequence'], 'Number');
      }
      if (data.hasOwnProperty('PaymentId')) {
        obj['PaymentId'] = ApiClient.convertToType(data['PaymentId'], 'Number');
      }
      if (data.hasOwnProperty('Payment')) {
        obj['Payment'] = DPPayment.constructFromObject(data['Payment']);
      }
      if (data.hasOwnProperty('DueDate')) {
        obj['DueDate'] = ApiClient.convertToType(data['DueDate'], 'Date');
      }
      if (data.hasOwnProperty('PaidDate')) {
        obj['PaidDate'] = ApiClient.convertToType(data['PaidDate'], 'Date');
      }
      if (data.hasOwnProperty('ExpectedAmount')) {
        obj['ExpectedAmount'] = ApiClient.convertToType(data['ExpectedAmount'], 'Number');
      }
      if (data.hasOwnProperty('ActualAmount')) {
        obj['ActualAmount'] = ApiClient.convertToType(data['ActualAmount'], 'Number');
      }
      if (data.hasOwnProperty('Receipt')) {
        obj['Receipt'] = ApiClient.convertToType(data['Receipt'], 'String');
      }
      if (data.hasOwnProperty('Method')) {
        obj['Method'] = ApiClient.convertToType(data['Method'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('Default')) {
        obj['Default'] = ApiClient.convertToType(data['Default'], 'Boolean');
      }
      if (data.hasOwnProperty('MigrationID')) {
        obj['MigrationID'] = ApiClient.convertToType(data['MigrationID'], 'String');
      }
      if (data.hasOwnProperty('Color')) {
        obj['Color'] = ApiClient.convertToType(data['Color'], 'String');
      }
      if (data.hasOwnProperty('SubscriptionID')) {
        obj['SubscriptionID'] = ApiClient.convertToType(data['SubscriptionID'], 'Number');
      }
      if (data.hasOwnProperty('Subscription')) {
        obj['Subscription'] = DPSubscription.constructFromObject(data['Subscription']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Sequence
   */
  exports.prototype['Sequence'] = undefined;
  /**
   * @member {Number} PaymentId
   */
  exports.prototype['PaymentId'] = undefined;
  /**
   * @member {module:model/DPPayment} Payment
   */
  exports.prototype['Payment'] = undefined;
  /**
   * @member {Date} DueDate
   */
  exports.prototype['DueDate'] = undefined;
  /**
   * @member {Date} PaidDate
   */
  exports.prototype['PaidDate'] = undefined;
  /**
   * @member {Number} ExpectedAmount
   */
  exports.prototype['ExpectedAmount'] = undefined;
  /**
   * @member {Number} ActualAmount
   */
  exports.prototype['ActualAmount'] = undefined;
  /**
   * @member {String} Receipt
   */
  exports.prototype['Receipt'] = undefined;
  /**
   * @member {String} Method
   */
  exports.prototype['Method'] = undefined;
  /**
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Boolean} Default
   */
  exports.prototype['Default'] = undefined;
  /**
   * @member {String} MigrationID
   */
  exports.prototype['MigrationID'] = undefined;
  /**
   * @member {String} Color
   */
  exports.prototype['Color'] = undefined;
  /**
   * @member {Number} SubscriptionID
   */
  exports.prototype['SubscriptionID'] = undefined;
  /**
   * @member {module:model/DPSubscription} Subscription
   */
  exports.prototype['Subscription'] = undefined;



  return exports;
}));


