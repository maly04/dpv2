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
    instance = new DirectPortalRestApi.BuildingApi();
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

  describe('BuildingApi', function() {
    describe('apiBuildingActivateByIdGet', function() {
      it('should call apiBuildingActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingActivateByIdGet
        //instance.apiBuildingActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingActiveGet', function() {
      it('should call apiBuildingActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingActiveGet
        //instance.apiBuildingActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingByIdGet', function() {
      it('should call apiBuildingByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingByIdGet
        //instance.apiBuildingByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingByNameByIdGet', function() {
      it('should call apiBuildingByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingByNameByIdGet
        //instance.apiBuildingByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingByNamePost', function() {
      it('should call apiBuildingByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingByNamePost
        //instance.apiBuildingByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingContactAddressesByIdGet', function() {
      it('should call apiBuildingContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingContactAddressesByIdGet
        //instance.apiBuildingContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingContactAddressesByIdPost', function() {
      it('should call apiBuildingContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingContactAddressesByIdPost
        //instance.apiBuildingContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingContactDetailsByIdGet', function() {
      it('should call apiBuildingContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingContactDetailsByIdGet
        //instance.apiBuildingContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingContactDetailsByIdPost', function() {
      it('should call apiBuildingContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingContactDetailsByIdPost
        //instance.apiBuildingContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingDeactivateByIdGet', function() {
      it('should call apiBuildingDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingDeactivateByIdGet
        //instance.apiBuildingDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingGet', function() {
      it('should call apiBuildingGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingGet
        //instance.apiBuildingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingNotesByIdGet', function() {
      it('should call apiBuildingNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingNotesByIdGet
        //instance.apiBuildingNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPost', function() {
      it('should call apiBuildingPost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPost
        //instance.apiBuildingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPut', function() {
      it('should call apiBuildingPut successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPut
        //instance.apiBuildingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingRelationshipsByIdGet', function() {
      it('should call apiBuildingRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingRelationshipsByIdGet
        //instance.apiBuildingRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingSetAsDefaultByIdGet', function() {
      it('should call apiBuildingSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingSetAsDefaultByIdGet
        //instance.apiBuildingSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingTranslationsByIdGet', function() {
      it('should call apiBuildingTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingTranslationsByIdGet
        //instance.apiBuildingTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));