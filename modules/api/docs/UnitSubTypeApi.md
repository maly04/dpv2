# DirectPortalRestApi.UnitSubTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUnitSubTypeActivateByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeActivateByIdGet) | **GET** /api/UnitSubType/Activate/{id} | 
[**apiUnitSubTypeActiveGet**](UnitSubTypeApi.md#apiUnitSubTypeActiveGet) | **GET** /api/UnitSubType/Active | 
[**apiUnitSubTypeByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeByIdGet) | **GET** /api/UnitSubType/{id} | 
[**apiUnitSubTypeByNameByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeByNameByIdGet) | **GET** /api/UnitSubType/ByName/{id} | 
[**apiUnitSubTypeByNamePost**](UnitSubTypeApi.md#apiUnitSubTypeByNamePost) | **POST** /api/UnitSubType/ByName | 
[**apiUnitSubTypeContactAddressesByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeContactAddressesByIdGet) | **GET** /api/UnitSubType/ContactAddresses/{id} | 
[**apiUnitSubTypeContactAddressesByIdPost**](UnitSubTypeApi.md#apiUnitSubTypeContactAddressesByIdPost) | **POST** /api/UnitSubType/ContactAddresses/{id} | 
[**apiUnitSubTypeContactDetailsByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeContactDetailsByIdGet) | **GET** /api/UnitSubType/ContactDetails/{id} | 
[**apiUnitSubTypeContactDetailsByIdPost**](UnitSubTypeApi.md#apiUnitSubTypeContactDetailsByIdPost) | **POST** /api/UnitSubType/ContactDetails/{id} | 
[**apiUnitSubTypeDeactivateByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeDeactivateByIdGet) | **GET** /api/UnitSubType/Deactivate/{id} | 
[**apiUnitSubTypeGet**](UnitSubTypeApi.md#apiUnitSubTypeGet) | **GET** /api/UnitSubType | 
[**apiUnitSubTypeNotesByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeNotesByIdGet) | **GET** /api/UnitSubType/Notes/{id} | 
[**apiUnitSubTypePost**](UnitSubTypeApi.md#apiUnitSubTypePost) | **POST** /api/UnitSubType | 
[**apiUnitSubTypePut**](UnitSubTypeApi.md#apiUnitSubTypePut) | **PUT** /api/UnitSubType | 
[**apiUnitSubTypeRelationshipsByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeRelationshipsByIdGet) | **GET** /api/UnitSubType/Relationships/{id} | 
[**apiUnitSubTypeSetAsDefaultByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeSetAsDefaultByIdGet) | **GET** /api/UnitSubType/SetAsDefault/{id} | 
[**apiUnitSubTypeTranslationsByIdGet**](UnitSubTypeApi.md#apiUnitSubTypeTranslationsByIdGet) | **GET** /api/UnitSubType/Translations/{id} | 


<a name="apiUnitSubTypeActivateByIdGet"></a>
# **apiUnitSubTypeActivateByIdGet**
> apiUnitSubTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeActivateByIdGet(id, callback);
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

<a name="apiUnitSubTypeActiveGet"></a>
# **apiUnitSubTypeActiveGet**
> apiUnitSubTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

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
apiInstance.apiUnitSubTypeActiveGet(opts, callback);
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

<a name="apiUnitSubTypeByIdGet"></a>
# **apiUnitSubTypeByIdGet**
> apiUnitSubTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

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
apiInstance.apiUnitSubTypeByIdGet(id, opts, callback);
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

<a name="apiUnitSubTypeByNameByIdGet"></a>
# **apiUnitSubTypeByNameByIdGet**
> apiUnitSubTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeByNameByIdGet(id, callback);
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

<a name="apiUnitSubTypeByNamePost"></a>
# **apiUnitSubTypeByNamePost**
> apiUnitSubTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitSubType() // DPUnitSubType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitSubType**](DPUnitSubType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitSubTypeContactAddressesByIdGet"></a>
# **apiUnitSubTypeContactAddressesByIdGet**
> apiUnitSubTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeContactAddressesByIdGet(id, callback);
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

<a name="apiUnitSubTypeContactAddressesByIdPost"></a>
# **apiUnitSubTypeContactAddressesByIdPost**
> apiUnitSubTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

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
apiInstance.apiUnitSubTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiUnitSubTypeContactDetailsByIdGet"></a>
# **apiUnitSubTypeContactDetailsByIdGet**
> apiUnitSubTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeContactDetailsByIdGet(id, callback);
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

<a name="apiUnitSubTypeContactDetailsByIdPost"></a>
# **apiUnitSubTypeContactDetailsByIdPost**
> apiUnitSubTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

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
apiInstance.apiUnitSubTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiUnitSubTypeDeactivateByIdGet"></a>
# **apiUnitSubTypeDeactivateByIdGet**
> apiUnitSubTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeDeactivateByIdGet(id, callback);
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

<a name="apiUnitSubTypeGet"></a>
# **apiUnitSubTypeGet**
> apiUnitSubTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

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
apiInstance.apiUnitSubTypeGet(opts, callback);
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

<a name="apiUnitSubTypeNotesByIdGet"></a>
# **apiUnitSubTypeNotesByIdGet**
> apiUnitSubTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeNotesByIdGet(id, callback);
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

<a name="apiUnitSubTypePost"></a>
# **apiUnitSubTypePost**
> apiUnitSubTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitSubType() // DPUnitSubType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitSubType**](DPUnitSubType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitSubTypePut"></a>
# **apiUnitSubTypePut**
> apiUnitSubTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitSubType() // DPUnitSubType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitSubType**](DPUnitSubType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitSubTypeRelationshipsByIdGet"></a>
# **apiUnitSubTypeRelationshipsByIdGet**
> apiUnitSubTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeRelationshipsByIdGet(id, callback);
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

<a name="apiUnitSubTypeSetAsDefaultByIdGet"></a>
# **apiUnitSubTypeSetAsDefaultByIdGet**
> apiUnitSubTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiUnitSubTypeTranslationsByIdGet"></a>
# **apiUnitSubTypeTranslationsByIdGet**
> apiUnitSubTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitSubTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitSubTypeTranslationsByIdGet(id, callback);
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

