# DirectPortalRestApi.DocumentTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDocumentTypeActivateByIdGet**](DocumentTypeApi.md#apiDocumentTypeActivateByIdGet) | **GET** /api/DocumentType/Activate/{id} | 
[**apiDocumentTypeActiveGet**](DocumentTypeApi.md#apiDocumentTypeActiveGet) | **GET** /api/DocumentType/Active | 
[**apiDocumentTypeByIdGet**](DocumentTypeApi.md#apiDocumentTypeByIdGet) | **GET** /api/DocumentType/{id} | 
[**apiDocumentTypeByNameByIdGet**](DocumentTypeApi.md#apiDocumentTypeByNameByIdGet) | **GET** /api/DocumentType/ByName/{id} | 
[**apiDocumentTypeByNamePost**](DocumentTypeApi.md#apiDocumentTypeByNamePost) | **POST** /api/DocumentType/ByName | 
[**apiDocumentTypeContactAddressesByIdGet**](DocumentTypeApi.md#apiDocumentTypeContactAddressesByIdGet) | **GET** /api/DocumentType/ContactAddresses/{id} | 
[**apiDocumentTypeContactAddressesByIdPost**](DocumentTypeApi.md#apiDocumentTypeContactAddressesByIdPost) | **POST** /api/DocumentType/ContactAddresses/{id} | 
[**apiDocumentTypeContactDetailsByIdGet**](DocumentTypeApi.md#apiDocumentTypeContactDetailsByIdGet) | **GET** /api/DocumentType/ContactDetails/{id} | 
[**apiDocumentTypeContactDetailsByIdPost**](DocumentTypeApi.md#apiDocumentTypeContactDetailsByIdPost) | **POST** /api/DocumentType/ContactDetails/{id} | 
[**apiDocumentTypeDeactivateByIdGet**](DocumentTypeApi.md#apiDocumentTypeDeactivateByIdGet) | **GET** /api/DocumentType/Deactivate/{id} | 
[**apiDocumentTypeGet**](DocumentTypeApi.md#apiDocumentTypeGet) | **GET** /api/DocumentType | 
[**apiDocumentTypeNotesByIdGet**](DocumentTypeApi.md#apiDocumentTypeNotesByIdGet) | **GET** /api/DocumentType/Notes/{id} | 
[**apiDocumentTypePost**](DocumentTypeApi.md#apiDocumentTypePost) | **POST** /api/DocumentType | 
[**apiDocumentTypePut**](DocumentTypeApi.md#apiDocumentTypePut) | **PUT** /api/DocumentType | 
[**apiDocumentTypeRelationshipsByIdGet**](DocumentTypeApi.md#apiDocumentTypeRelationshipsByIdGet) | **GET** /api/DocumentType/Relationships/{id} | 
[**apiDocumentTypeSetAsDefaultByIdGet**](DocumentTypeApi.md#apiDocumentTypeSetAsDefaultByIdGet) | **GET** /api/DocumentType/SetAsDefault/{id} | 
[**apiDocumentTypeTranslationsByIdGet**](DocumentTypeApi.md#apiDocumentTypeTranslationsByIdGet) | **GET** /api/DocumentType/Translations/{id} | 


<a name="apiDocumentTypeActivateByIdGet"></a>
# **apiDocumentTypeActivateByIdGet**
> apiDocumentTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeActivateByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeActiveGet"></a>
# **apiDocumentTypeActiveGet**
> apiDocumentTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var opts = { 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'fields': "fields_example", // String | 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeActiveGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **fields** | **String**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeByIdGet"></a>
# **apiDocumentTypeByIdGet**
> apiDocumentTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 

var opts = { 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'fields': "fields_example", // String | 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeByIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **fields** | **String**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeByNameByIdGet"></a>
# **apiDocumentTypeByNameByIdGet**
> apiDocumentTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeByNameByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeByNamePost"></a>
# **apiDocumentTypeByNamePost**
> apiDocumentTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPDocumentType() // DPDocumentType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPDocumentType**](DPDocumentType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiDocumentTypeContactAddressesByIdGet"></a>
# **apiDocumentTypeContactAddressesByIdGet**
> apiDocumentTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeContactAddressesByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeContactAddressesByIdPost"></a>
# **apiDocumentTypeContactAddressesByIdPost**
> apiDocumentTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 

var opts = { 
  'model': [new DirectPortalRestApi.DPContactAddress()] // [DPContactAddress] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeContactAddressesByIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **model** | [**[DPContactAddress]**](DPContactAddress.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiDocumentTypeContactDetailsByIdGet"></a>
# **apiDocumentTypeContactDetailsByIdGet**
> apiDocumentTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeContactDetailsByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeContactDetailsByIdPost"></a>
# **apiDocumentTypeContactDetailsByIdPost**
> apiDocumentTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 

var opts = { 
  'model': [new DirectPortalRestApi.DPContactDetail()] // [DPContactDetail] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeContactDetailsByIdPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **model** | [**[DPContactDetail]**](DPContactDetail.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiDocumentTypeDeactivateByIdGet"></a>
# **apiDocumentTypeDeactivateByIdGet**
> apiDocumentTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeDeactivateByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeGet"></a>
# **apiDocumentTypeGet**
> apiDocumentTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var opts = { 
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'fields': "fields_example", // String | 
  'include': "include_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **fields** | **String**|  | [optional] 
 **include** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeNotesByIdGet"></a>
# **apiDocumentTypeNotesByIdGet**
> apiDocumentTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeNotesByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypePost"></a>
# **apiDocumentTypePost**
> apiDocumentTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPDocumentType() // DPDocumentType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPDocumentType**](DPDocumentType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiDocumentTypePut"></a>
# **apiDocumentTypePut**
> apiDocumentTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPDocumentType() // DPDocumentType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPDocumentType**](DPDocumentType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiDocumentTypeRelationshipsByIdGet"></a>
# **apiDocumentTypeRelationshipsByIdGet**
> apiDocumentTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeRelationshipsByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeSetAsDefaultByIdGet"></a>
# **apiDocumentTypeSetAsDefaultByIdGet**
> apiDocumentTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeSetAsDefaultByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiDocumentTypeTranslationsByIdGet"></a>
# **apiDocumentTypeTranslationsByIdGet**
> apiDocumentTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DocumentTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiDocumentTypeTranslationsByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

