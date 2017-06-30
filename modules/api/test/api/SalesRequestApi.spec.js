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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DirectPortalRestApi);
  }
}(this, function(expect, DirectPortalRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DirectPortalRestApi.SalesRequestApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SalesRequestApi', function() {
    describe('apiSalesRequestActivateByIdGet', function() {
      it('should call apiSalesRequestActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestActivateByIdGet
        //instance.apiSalesRequestActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestActiveGet', function() {
      it('should call apiSalesRequestActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestActiveGet
        //instance.apiSalesRequestActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestByIdGet', function() {
      it('should call apiSalesRequestByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestByIdGet
        //instance.apiSalesRequestByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestByNameByIdGet', function() {
      it('should call apiSalesRequestByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestByNameByIdGet
        //instance.apiSalesRequestByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestByNamePost', function() {
      it('should call apiSalesRequestByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestByNamePost
        //instance.apiSalesRequestByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestContactAddressesByIdGet', function() {
      it('should call apiSalesRequestContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestContactAddressesByIdGet
        //instance.apiSalesRequestContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestContactAddressesByIdPost', function() {
      it('should call apiSalesRequestContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestContactAddressesByIdPost
        //instance.apiSalesRequestContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestContactDetailsByIdGet', function() {
      it('should call apiSalesRequestContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestContactDetailsByIdGet
        //instance.apiSalesRequestContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestContactDetailsByIdPost', function() {
      it('should call apiSalesRequestContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestContactDetailsByIdPost
        //instance.apiSalesRequestContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestDeactivateByIdGet', function() {
      it('should call apiSalesRequestDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestDeactivateByIdGet
        //instance.apiSalesRequestDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestGet', function() {
      it('should call apiSalesRequestGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestGet
        //instance.apiSalesRequestGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestNotesByIdGet', function() {
      it('should call apiSalesRequestNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestNotesByIdGet
        //instance.apiSalesRequestNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestPost', function() {
      it('should call apiSalesRequestPost successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestPost
        //instance.apiSalesRequestPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestPut', function() {
      it('should call apiSalesRequestPut successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestPut
        //instance.apiSalesRequestPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestRelationshipsByIdGet', function() {
      it('should call apiSalesRequestRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestRelationshipsByIdGet
        //instance.apiSalesRequestRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestSetAsDefaultByIdGet', function() {
      it('should call apiSalesRequestSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestSetAsDefaultByIdGet
        //instance.apiSalesRequestSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalesRequestTranslationsByIdGet', function() {
      it('should call apiSalesRequestTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSalesRequestTranslationsByIdGet
        //instance.apiSalesRequestTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));