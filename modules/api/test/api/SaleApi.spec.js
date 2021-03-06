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
    instance = new DirectPortalRestApi.SaleApi();
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

  describe('SaleApi', function() {
    describe('apiSaleActivateByIdGet', function() {
      it('should call apiSaleActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleActivateByIdGet
        //instance.apiSaleActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleActiveGet', function() {
      it('should call apiSaleActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleActiveGet
        //instance.apiSaleActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleByIdGet', function() {
      it('should call apiSaleByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleByIdGet
        //instance.apiSaleByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleByNameByIdGet', function() {
      it('should call apiSaleByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleByNameByIdGet
        //instance.apiSaleByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleByNamePost', function() {
      it('should call apiSaleByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiSaleByNamePost
        //instance.apiSaleByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleContactAddressesByIdGet', function() {
      it('should call apiSaleContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleContactAddressesByIdGet
        //instance.apiSaleContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleContactAddressesByIdPost', function() {
      it('should call apiSaleContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleContactAddressesByIdPost
        //instance.apiSaleContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleContactDetailsByIdGet', function() {
      it('should call apiSaleContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleContactDetailsByIdGet
        //instance.apiSaleContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleContactDetailsByIdPost', function() {
      it('should call apiSaleContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleContactDetailsByIdPost
        //instance.apiSaleContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleDeactivateByIdGet', function() {
      it('should call apiSaleDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleDeactivateByIdGet
        //instance.apiSaleDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleGet', function() {
      it('should call apiSaleGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleGet
        //instance.apiSaleGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleNotesByIdGet', function() {
      it('should call apiSaleNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleNotesByIdGet
        //instance.apiSaleNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalePost', function() {
      it('should call apiSalePost successfully', function(done) {
        //uncomment below and update the code to test apiSalePost
        //instance.apiSalePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSalePut', function() {
      it('should call apiSalePut successfully', function(done) {
        //uncomment below and update the code to test apiSalePut
        //instance.apiSalePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleRelationshipsByIdGet', function() {
      it('should call apiSaleRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleRelationshipsByIdGet
        //instance.apiSaleRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleSetAsDefaultByIdGet', function() {
      it('should call apiSaleSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleSetAsDefaultByIdGet
        //instance.apiSaleSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleTranslationsByIdGet', function() {
      it('should call apiSaleTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleTranslationsByIdGet
        //instance.apiSaleTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
