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
    instance = new DirectPortalRestApi.ApprovalApi();
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

  describe('ApprovalApi', function() {
    describe('apiApprovalActivateByIdGet', function() {
      it('should call apiApprovalActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalActivateByIdGet
        //instance.apiApprovalActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalActiveGet', function() {
      it('should call apiApprovalActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalActiveGet
        //instance.apiApprovalActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalByIdGet', function() {
      it('should call apiApprovalByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalByIdGet
        //instance.apiApprovalByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalByNameByIdGet', function() {
      it('should call apiApprovalByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalByNameByIdGet
        //instance.apiApprovalByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalByNamePost', function() {
      it('should call apiApprovalByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiApprovalByNamePost
        //instance.apiApprovalByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalContactAddressesByIdGet', function() {
      it('should call apiApprovalContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalContactAddressesByIdGet
        //instance.apiApprovalContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalContactAddressesByIdPost', function() {
      it('should call apiApprovalContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiApprovalContactAddressesByIdPost
        //instance.apiApprovalContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalContactDetailsByIdGet', function() {
      it('should call apiApprovalContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalContactDetailsByIdGet
        //instance.apiApprovalContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalContactDetailsByIdPost', function() {
      it('should call apiApprovalContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiApprovalContactDetailsByIdPost
        //instance.apiApprovalContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalDeactivateByIdGet', function() {
      it('should call apiApprovalDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalDeactivateByIdGet
        //instance.apiApprovalDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalGet', function() {
      it('should call apiApprovalGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalGet
        //instance.apiApprovalGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalNotesByIdGet', function() {
      it('should call apiApprovalNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalNotesByIdGet
        //instance.apiApprovalNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalPost', function() {
      it('should call apiApprovalPost successfully', function(done) {
        //uncomment below and update the code to test apiApprovalPost
        //instance.apiApprovalPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalPut', function() {
      it('should call apiApprovalPut successfully', function(done) {
        //uncomment below and update the code to test apiApprovalPut
        //instance.apiApprovalPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalRelationshipsByIdGet', function() {
      it('should call apiApprovalRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalRelationshipsByIdGet
        //instance.apiApprovalRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalSetAsDefaultByIdGet', function() {
      it('should call apiApprovalSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalSetAsDefaultByIdGet
        //instance.apiApprovalSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiApprovalTranslationsByIdGet', function() {
      it('should call apiApprovalTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiApprovalTranslationsByIdGet
        //instance.apiApprovalTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
