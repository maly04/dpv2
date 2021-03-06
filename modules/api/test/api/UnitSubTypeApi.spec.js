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
    instance = new DirectPortalRestApi.UnitSubTypeApi();
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

  describe('UnitSubTypeApi', function() {
    describe('apiUnitSubTypeActivateByIdGet', function() {
      it('should call apiUnitSubTypeActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeActivateByIdGet
        //instance.apiUnitSubTypeActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeActiveGet', function() {
      it('should call apiUnitSubTypeActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeActiveGet
        //instance.apiUnitSubTypeActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeByIdGet', function() {
      it('should call apiUnitSubTypeByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeByIdGet
        //instance.apiUnitSubTypeByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeByNameByIdGet', function() {
      it('should call apiUnitSubTypeByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeByNameByIdGet
        //instance.apiUnitSubTypeByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeByNamePost', function() {
      it('should call apiUnitSubTypeByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeByNamePost
        //instance.apiUnitSubTypeByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeContactAddressesByIdGet', function() {
      it('should call apiUnitSubTypeContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeContactAddressesByIdGet
        //instance.apiUnitSubTypeContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeContactAddressesByIdPost', function() {
      it('should call apiUnitSubTypeContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeContactAddressesByIdPost
        //instance.apiUnitSubTypeContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeContactDetailsByIdGet', function() {
      it('should call apiUnitSubTypeContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeContactDetailsByIdGet
        //instance.apiUnitSubTypeContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeContactDetailsByIdPost', function() {
      it('should call apiUnitSubTypeContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeContactDetailsByIdPost
        //instance.apiUnitSubTypeContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeDeactivateByIdGet', function() {
      it('should call apiUnitSubTypeDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeDeactivateByIdGet
        //instance.apiUnitSubTypeDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeGet', function() {
      it('should call apiUnitSubTypeGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeGet
        //instance.apiUnitSubTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeNotesByIdGet', function() {
      it('should call apiUnitSubTypeNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeNotesByIdGet
        //instance.apiUnitSubTypeNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypePost', function() {
      it('should call apiUnitSubTypePost successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypePost
        //instance.apiUnitSubTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypePut', function() {
      it('should call apiUnitSubTypePut successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypePut
        //instance.apiUnitSubTypePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeRelationshipsByIdGet', function() {
      it('should call apiUnitSubTypeRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeRelationshipsByIdGet
        //instance.apiUnitSubTypeRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeSetAsDefaultByIdGet', function() {
      it('should call apiUnitSubTypeSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeSetAsDefaultByIdGet
        //instance.apiUnitSubTypeSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitSubTypeTranslationsByIdGet', function() {
      it('should call apiUnitSubTypeTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitSubTypeTranslationsByIdGet
        //instance.apiUnitSubTypeTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
