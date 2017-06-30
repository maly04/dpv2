# DirectPortalRestApi.RelationshipTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRelationshipTypeActivateByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeActivateByIdGet) | **GET** /api/RelationshipType/Activate/{id} | 
[**apiRelationshipTypeActiveGet**](RelationshipTypeApi.md#apiRelationshipTypeActiveGet) | **GET** /api/RelationshipType/Active | 
[**apiRelationshipTypeByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeByIdGet) | **GET** /api/RelationshipType/{id} | 
[**apiRelationshipTypeByNameByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeByNameByIdGet) | **GET** /api/RelationshipType/ByName/{id} | 
[**apiRelationshipTypeByNamePost**](RelationshipTypeApi.md#apiRelationshipTypeByNamePost) | **POST** /api/RelationshipType/ByName | 
[**apiRelationshipTypeContactAddressesByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeContactAddressesByIdGet) | **GET** /api/RelationshipType/ContactAddresses/{id} | 
[**apiRelationshipTypeContactAddressesByIdPost**](RelationshipTypeApi.md#apiRelationshipTypeContactAddressesByIdPost) | **POST** /api/RelationshipType/ContactAddresses/{id} | 
[**apiRelationshipTypeContactDetailsByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeContactDetailsByIdGet) | **GET** /api/RelationshipType/ContactDetails/{id} | 
[**apiRelationshipTypeContactDetailsByIdPost**](RelationshipTypeApi.md#apiRelationshipTypeContactDetailsByIdPost) | **POST** /api/RelationshipType/ContactDetails/{id} | 
[**apiRelationshipTypeDeactivateByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeDeactivateByIdGet) | **GET** /api/RelationshipType/Deactivate/{id} | 
[**apiRelationshipTypeGet**](RelationshipTypeApi.md#apiRelationshipTypeGet) | **GET** /api/RelationshipType | 
[**apiRelationshipTypeNotesByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeNotesByIdGet) | **GET** /api/RelationshipType/Notes/{id} | 
[**apiRelationshipTypePost**](RelationshipTypeApi.md#apiRelationshipTypePost) | **POST** /api/RelationshipType | 
[**apiRelationshipTypePut**](RelationshipTypeApi.md#apiRelationshipTypePut) | **PUT** /api/RelationshipType | 
[**apiRelationshipTypeRelationshipsByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeRelationshipsByIdGet) | **GET** /api/RelationshipType/Relationships/{id} | 
[**apiRelationshipTypeSetAsDefaultByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeSetAsDefaultByIdGet) | **GET** /api/RelationshipType/SetAsDefault/{id} | 
[**apiRelationshipTypeTranslationsByIdGet**](RelationshipTypeApi.md#apiRelationshipTypeTranslationsByIdGet) | **GET** /api/RelationshipType/Translations/{id} | 


<a name="apiRelationshipTypeActivateByIdGet"></a>
# **apiRelationshipTypeActivateByIdGet**
> apiRelationshipTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeActivateByIdGet(id, callback);
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

<a name="apiRelationshipTypeActiveGet"></a>
# **apiRelationshipTypeActiveGet**
> apiRelationshipTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

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
apiInstance.apiRelationshipTypeActiveGet(opts, callback);
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

<a name="apiRelationshipTypeByIdGet"></a>
# **apiRelationshipTypeByIdGet**
> apiRelationshipTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

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
apiInstance.apiRelationshipTypeByIdGet(id, opts, callback);
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

<a name="apiRelationshipTypeByNameByIdGet"></a>
# **apiRelationshipTypeByNameByIdGet**
> apiRelationshipTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeByNameByIdGet(id, callback);
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

<a name="apiRelationshipTypeByNamePost"></a>
# **apiRelationshipTypeByNamePost**
> apiRelationshipTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPRelationshipType() // DPRelationshipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPRelationshipType**](DPRelationshipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiRelationshipTypeContactAddressesByIdGet"></a>
# **apiRelationshipTypeContactAddressesByIdGet**
> apiRelationshipTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeContactAddressesByIdGet(id, callback);
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

<a name="apiRelationshipTypeContactAddressesByIdPost"></a>
# **apiRelationshipTypeContactAddressesByIdPost**
> apiRelationshipTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

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
apiInstance.apiRelationshipTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiRelationshipTypeContactDetailsByIdGet"></a>
# **apiRelationshipTypeContactDetailsByIdGet**
> apiRelationshipTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeContactDetailsByIdGet(id, callback);
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

<a name="apiRelationshipTypeContactDetailsByIdPost"></a>
# **apiRelationshipTypeContactDetailsByIdPost**
> apiRelationshipTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

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
apiInstance.apiRelationshipTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiRelationshipTypeDeactivateByIdGet"></a>
# **apiRelationshipTypeDeactivateByIdGet**
> apiRelationshipTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeDeactivateByIdGet(id, callback);
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

<a name="apiRelationshipTypeGet"></a>
# **apiRelationshipTypeGet**
> apiRelationshipTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

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
apiInstance.apiRelationshipTypeGet(opts, callback);
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

<a name="apiRelationshipTypeNotesByIdGet"></a>
# **apiRelationshipTypeNotesByIdGet**
> apiRelationshipTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeNotesByIdGet(id, callback);
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

<a name="apiRelationshipTypePost"></a>
# **apiRelationshipTypePost**
> apiRelationshipTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPRelationshipType() // DPRelationshipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPRelationshipType**](DPRelationshipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiRelationshipTypePut"></a>
# **apiRelationshipTypePut**
> apiRelationshipTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPRelationshipType() // DPRelationshipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPRelationshipType**](DPRelationshipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiRelationshipTypeRelationshipsByIdGet"></a>
# **apiRelationshipTypeRelationshipsByIdGet**
> apiRelationshipTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeRelationshipsByIdGet(id, callback);
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

<a name="apiRelationshipTypeSetAsDefaultByIdGet"></a>
# **apiRelationshipTypeSetAsDefaultByIdGet**
> apiRelationshipTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiRelationshipTypeTranslationsByIdGet"></a>
# **apiRelationshipTypeTranslationsByIdGet**
> apiRelationshipTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.RelationshipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiRelationshipTypeTranslationsByIdGet(id, callback);
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

