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
    instance = new DirectPortalRestApi.UnitStatusApi();
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

  describe('UnitStatusApi', function() {
    describe('apiUnitStatusActivateByIdGet', function() {
      it('should call apiUnitStatusActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusActivateByIdGet
        //instance.apiUnitStatusActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusActiveGet', function() {
      it('should call apiUnitStatusActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusActiveGet
        //instance.apiUnitStatusActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusByIdGet', function() {
      it('should call apiUnitStatusByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusByIdGet
        //instance.apiUnitStatusByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusByNameByIdGet', function() {
      it('should call apiUnitStatusByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusByNameByIdGet
        //instance.apiUnitStatusByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusByNamePost', function() {
      it('should call apiUnitStatusByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusByNamePost
        //instance.apiUnitStatusByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusContactAddressesByIdGet', function() {
      it('should call apiUnitStatusContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusContactAddressesByIdGet
        //instance.apiUnitStatusContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusContactAddressesByIdPost', function() {
      it('should call apiUnitStatusContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusContactAddressesByIdPost
        //instance.apiUnitStatusContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusContactDetailsByIdGet', function() {
      it('should call apiUnitStatusContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusContactDetailsByIdGet
        //instance.apiUnitStatusContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusContactDetailsByIdPost', function() {
      it('should call apiUnitStatusContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusContactDetailsByIdPost
        //instance.apiUnitStatusContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusDeactivateByIdGet', function() {
      it('should call apiUnitStatusDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusDeactivateByIdGet
        //instance.apiUnitStatusDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusGet', function() {
      it('should call apiUnitStatusGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusGet
        //instance.apiUnitStatusGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusNotesByIdGet', function() {
      it('should call apiUnitStatusNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusNotesByIdGet
        //instance.apiUnitStatusNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusPost', function() {
      it('should call apiUnitStatusPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusPost
        //instance.apiUnitStatusPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusPut', function() {
      it('should call apiUnitStatusPut successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusPut
        //instance.apiUnitStatusPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusRelationshipsByIdGet', function() {
      it('should call apiUnitStatusRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusRelationshipsByIdGet
        //instance.apiUnitStatusRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusSetAsDefaultByIdGet', function() {
      it('should call apiUnitStatusSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusSetAsDefaultByIdGet
        //instance.apiUnitStatusSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitStatusTranslationsByIdGet', function() {
      it('should call apiUnitStatusTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitStatusTranslationsByIdGet
        //instance.apiUnitStatusTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
