# DirectPortalRestApi.OwnershipTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOwnershipTypeActivateByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeActivateByIdGet) | **GET** /api/OwnershipType/Activate/{id} | 
[**apiOwnershipTypeActiveGet**](OwnershipTypeApi.md#apiOwnershipTypeActiveGet) | **GET** /api/OwnershipType/Active | 
[**apiOwnershipTypeByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeByIdGet) | **GET** /api/OwnershipType/{id} | 
[**apiOwnershipTypeByNameByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeByNameByIdGet) | **GET** /api/OwnershipType/ByName/{id} | 
[**apiOwnershipTypeByNamePost**](OwnershipTypeApi.md#apiOwnershipTypeByNamePost) | **POST** /api/OwnershipType/ByName | 
[**apiOwnershipTypeContactAddressesByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeContactAddressesByIdGet) | **GET** /api/OwnershipType/ContactAddresses/{id} | 
[**apiOwnershipTypeContactAddressesByIdPost**](OwnershipTypeApi.md#apiOwnershipTypeContactAddressesByIdPost) | **POST** /api/OwnershipType/ContactAddresses/{id} | 
[**apiOwnershipTypeContactDetailsByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeContactDetailsByIdGet) | **GET** /api/OwnershipType/ContactDetails/{id} | 
[**apiOwnershipTypeContactDetailsByIdPost**](OwnershipTypeApi.md#apiOwnershipTypeContactDetailsByIdPost) | **POST** /api/OwnershipType/ContactDetails/{id} | 
[**apiOwnershipTypeDeactivateByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeDeactivateByIdGet) | **GET** /api/OwnershipType/Deactivate/{id} | 
[**apiOwnershipTypeGet**](OwnershipTypeApi.md#apiOwnershipTypeGet) | **GET** /api/OwnershipType | 
[**apiOwnershipTypeNotesByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeNotesByIdGet) | **GET** /api/OwnershipType/Notes/{id} | 
[**apiOwnershipTypePost**](OwnershipTypeApi.md#apiOwnershipTypePost) | **POST** /api/OwnershipType | 
[**apiOwnershipTypePut**](OwnershipTypeApi.md#apiOwnershipTypePut) | **PUT** /api/OwnershipType | 
[**apiOwnershipTypeRelationshipsByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeRelationshipsByIdGet) | **GET** /api/OwnershipType/Relationships/{id} | 
[**apiOwnershipTypeSetAsDefaultByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeSetAsDefaultByIdGet) | **GET** /api/OwnershipType/SetAsDefault/{id} | 
[**apiOwnershipTypeTranslationsByIdGet**](OwnershipTypeApi.md#apiOwnershipTypeTranslationsByIdGet) | **GET** /api/OwnershipType/Translations/{id} | 


<a name="apiOwnershipTypeActivateByIdGet"></a>
# **apiOwnershipTypeActivateByIdGet**
> apiOwnershipTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeActivateByIdGet(id, callback);
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

<a name="apiOwnershipTypeActiveGet"></a>
# **apiOwnershipTypeActiveGet**
> apiOwnershipTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

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
apiInstance.apiOwnershipTypeActiveGet(opts, callback);
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

<a name="apiOwnershipTypeByIdGet"></a>
# **apiOwnershipTypeByIdGet**
> apiOwnershipTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

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
apiInstance.apiOwnershipTypeByIdGet(id, opts, callback);
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

<a name="apiOwnershipTypeByNameByIdGet"></a>
# **apiOwnershipTypeByNameByIdGet**
> apiOwnershipTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeByNameByIdGet(id, callback);
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

<a name="apiOwnershipTypeByNamePost"></a>
# **apiOwnershipTypeByNamePost**
> apiOwnershipTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOwnershipType() // DPOwnershipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOwnershipType**](DPOwnershipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOwnershipTypeContactAddressesByIdGet"></a>
# **apiOwnershipTypeContactAddressesByIdGet**
> apiOwnershipTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeContactAddressesByIdGet(id, callback);
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

<a name="apiOwnershipTypeContactAddressesByIdPost"></a>
# **apiOwnershipTypeContactAddressesByIdPost**
> apiOwnershipTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

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
apiInstance.apiOwnershipTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiOwnershipTypeContactDetailsByIdGet"></a>
# **apiOwnershipTypeContactDetailsByIdGet**
> apiOwnershipTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeContactDetailsByIdGet(id, callback);
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

<a name="apiOwnershipTypeContactDetailsByIdPost"></a>
# **apiOwnershipTypeContactDetailsByIdPost**
> apiOwnershipTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

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
apiInstance.apiOwnershipTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiOwnershipTypeDeactivateByIdGet"></a>
# **apiOwnershipTypeDeactivateByIdGet**
> apiOwnershipTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeDeactivateByIdGet(id, callback);
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

<a name="apiOwnershipTypeGet"></a>
# **apiOwnershipTypeGet**
> apiOwnershipTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

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
apiInstance.apiOwnershipTypeGet(opts, callback);
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

<a name="apiOwnershipTypeNotesByIdGet"></a>
# **apiOwnershipTypeNotesByIdGet**
> apiOwnershipTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeNotesByIdGet(id, callback);
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

<a name="apiOwnershipTypePost"></a>
# **apiOwnershipTypePost**
> apiOwnershipTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOwnershipType() // DPOwnershipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOwnershipType**](DPOwnershipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOwnershipTypePut"></a>
# **apiOwnershipTypePut**
> apiOwnershipTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOwnershipType() // DPOwnershipType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOwnershipType**](DPOwnershipType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOwnershipTypeRelationshipsByIdGet"></a>
# **apiOwnershipTypeRelationshipsByIdGet**
> apiOwnershipTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeRelationshipsByIdGet(id, callback);
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

<a name="apiOwnershipTypeSetAsDefaultByIdGet"></a>
# **apiOwnershipTypeSetAsDefaultByIdGet**
> apiOwnershipTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiOwnershipTypeTranslationsByIdGet"></a>
# **apiOwnershipTypeTranslationsByIdGet**
> apiOwnershipTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OwnershipTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOwnershipTypeTranslationsByIdGet(id, callback);
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

