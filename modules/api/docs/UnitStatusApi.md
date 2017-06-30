# DirectPortalRestApi.UnitStatusApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUnitStatusActivateByIdGet**](UnitStatusApi.md#apiUnitStatusActivateByIdGet) | **GET** /api/UnitStatus/Activate/{id} | 
[**apiUnitStatusActiveGet**](UnitStatusApi.md#apiUnitStatusActiveGet) | **GET** /api/UnitStatus/Active | 
[**apiUnitStatusByIdGet**](UnitStatusApi.md#apiUnitStatusByIdGet) | **GET** /api/UnitStatus/{id} | 
[**apiUnitStatusByNameByIdGet**](UnitStatusApi.md#apiUnitStatusByNameByIdGet) | **GET** /api/UnitStatus/ByName/{id} | 
[**apiUnitStatusByNamePost**](UnitStatusApi.md#apiUnitStatusByNamePost) | **POST** /api/UnitStatus/ByName | 
[**apiUnitStatusContactAddressesByIdGet**](UnitStatusApi.md#apiUnitStatusContactAddressesByIdGet) | **GET** /api/UnitStatus/ContactAddresses/{id} | 
[**apiUnitStatusContactAddressesByIdPost**](UnitStatusApi.md#apiUnitStatusContactAddressesByIdPost) | **POST** /api/UnitStatus/ContactAddresses/{id} | 
[**apiUnitStatusContactDetailsByIdGet**](UnitStatusApi.md#apiUnitStatusContactDetailsByIdGet) | **GET** /api/UnitStatus/ContactDetails/{id} | 
[**apiUnitStatusContactDetailsByIdPost**](UnitStatusApi.md#apiUnitStatusContactDetailsByIdPost) | **POST** /api/UnitStatus/ContactDetails/{id} | 
[**apiUnitStatusDeactivateByIdGet**](UnitStatusApi.md#apiUnitStatusDeactivateByIdGet) | **GET** /api/UnitStatus/Deactivate/{id} | 
[**apiUnitStatusGet**](UnitStatusApi.md#apiUnitStatusGet) | **GET** /api/UnitStatus | 
[**apiUnitStatusNotesByIdGet**](UnitStatusApi.md#apiUnitStatusNotesByIdGet) | **GET** /api/UnitStatus/Notes/{id} | 
[**apiUnitStatusPost**](UnitStatusApi.md#apiUnitStatusPost) | **POST** /api/UnitStatus | 
[**apiUnitStatusPut**](UnitStatusApi.md#apiUnitStatusPut) | **PUT** /api/UnitStatus | 
[**apiUnitStatusRelationshipsByIdGet**](UnitStatusApi.md#apiUnitStatusRelationshipsByIdGet) | **GET** /api/UnitStatus/Relationships/{id} | 
[**apiUnitStatusSetAsDefaultByIdGet**](UnitStatusApi.md#apiUnitStatusSetAsDefaultByIdGet) | **GET** /api/UnitStatus/SetAsDefault/{id} | 
[**apiUnitStatusTranslationsByIdGet**](UnitStatusApi.md#apiUnitStatusTranslationsByIdGet) | **GET** /api/UnitStatus/Translations/{id} | 


<a name="apiUnitStatusActivateByIdGet"></a>
# **apiUnitStatusActivateByIdGet**
> apiUnitStatusActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusActivateByIdGet(id, callback);
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

<a name="apiUnitStatusActiveGet"></a>
# **apiUnitStatusActiveGet**
> apiUnitStatusActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

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
apiInstance.apiUnitStatusActiveGet(opts, callback);
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

<a name="apiUnitStatusByIdGet"></a>
# **apiUnitStatusByIdGet**
> apiUnitStatusByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

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
apiInstance.apiUnitStatusByIdGet(id, opts, callback);
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

<a name="apiUnitStatusByNameByIdGet"></a>
# **apiUnitStatusByNameByIdGet**
> apiUnitStatusByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusByNameByIdGet(id, callback);
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

<a name="apiUnitStatusByNamePost"></a>
# **apiUnitStatusByNamePost**
> apiUnitStatusByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitStatus() // DPUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitStatus**](DPUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitStatusContactAddressesByIdGet"></a>
# **apiUnitStatusContactAddressesByIdGet**
> apiUnitStatusContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusContactAddressesByIdGet(id, callback);
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

<a name="apiUnitStatusContactAddressesByIdPost"></a>
# **apiUnitStatusContactAddressesByIdPost**
> apiUnitStatusContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

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
apiInstance.apiUnitStatusContactAddressesByIdPost(id, opts, callback);
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

<a name="apiUnitStatusContactDetailsByIdGet"></a>
# **apiUnitStatusContactDetailsByIdGet**
> apiUnitStatusContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusContactDetailsByIdGet(id, callback);
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

<a name="apiUnitStatusContactDetailsByIdPost"></a>
# **apiUnitStatusContactDetailsByIdPost**
> apiUnitStatusContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

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
apiInstance.apiUnitStatusContactDetailsByIdPost(id, opts, callback);
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

<a name="apiUnitStatusDeactivateByIdGet"></a>
# **apiUnitStatusDeactivateByIdGet**
> apiUnitStatusDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusDeactivateByIdGet(id, callback);
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

<a name="apiUnitStatusGet"></a>
# **apiUnitStatusGet**
> apiUnitStatusGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

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
apiInstance.apiUnitStatusGet(opts, callback);
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

<a name="apiUnitStatusNotesByIdGet"></a>
# **apiUnitStatusNotesByIdGet**
> apiUnitStatusNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusNotesByIdGet(id, callback);
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

<a name="apiUnitStatusPost"></a>
# **apiUnitStatusPost**
> apiUnitStatusPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitStatus() // DPUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitStatus**](DPUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitStatusPut"></a>
# **apiUnitStatusPut**
> apiUnitStatusPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPUnitStatus() // DPUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPUnitStatus**](DPUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiUnitStatusRelationshipsByIdGet"></a>
# **apiUnitStatusRelationshipsByIdGet**
> apiUnitStatusRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusRelationshipsByIdGet(id, callback);
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

<a name="apiUnitStatusSetAsDefaultByIdGet"></a>
# **apiUnitStatusSetAsDefaultByIdGet**
> apiUnitStatusSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusSetAsDefaultByIdGet(id, callback);
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

<a name="apiUnitStatusTranslationsByIdGet"></a>
# **apiUnitStatusTranslationsByIdGet**
> apiUnitStatusTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.UnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUnitStatusTranslationsByIdGet(id, callback);
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

