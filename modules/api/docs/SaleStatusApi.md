# DirectPortalRestApi.SaleStatusApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSaleStatusActivateByIdGet**](SaleStatusApi.md#apiSaleStatusActivateByIdGet) | **GET** /api/SaleStatus/Activate/{id} | 
[**apiSaleStatusActiveGet**](SaleStatusApi.md#apiSaleStatusActiveGet) | **GET** /api/SaleStatus/Active | 
[**apiSaleStatusByIdGet**](SaleStatusApi.md#apiSaleStatusByIdGet) | **GET** /api/SaleStatus/{id} | 
[**apiSaleStatusByNameByIdGet**](SaleStatusApi.md#apiSaleStatusByNameByIdGet) | **GET** /api/SaleStatus/ByName/{id} | 
[**apiSaleStatusByNamePost**](SaleStatusApi.md#apiSaleStatusByNamePost) | **POST** /api/SaleStatus/ByName | 
[**apiSaleStatusContactAddressesByIdGet**](SaleStatusApi.md#apiSaleStatusContactAddressesByIdGet) | **GET** /api/SaleStatus/ContactAddresses/{id} | 
[**apiSaleStatusContactAddressesByIdPost**](SaleStatusApi.md#apiSaleStatusContactAddressesByIdPost) | **POST** /api/SaleStatus/ContactAddresses/{id} | 
[**apiSaleStatusContactDetailsByIdGet**](SaleStatusApi.md#apiSaleStatusContactDetailsByIdGet) | **GET** /api/SaleStatus/ContactDetails/{id} | 
[**apiSaleStatusContactDetailsByIdPost**](SaleStatusApi.md#apiSaleStatusContactDetailsByIdPost) | **POST** /api/SaleStatus/ContactDetails/{id} | 
[**apiSaleStatusDeactivateByIdGet**](SaleStatusApi.md#apiSaleStatusDeactivateByIdGet) | **GET** /api/SaleStatus/Deactivate/{id} | 
[**apiSaleStatusGet**](SaleStatusApi.md#apiSaleStatusGet) | **GET** /api/SaleStatus | 
[**apiSaleStatusNotesByIdGet**](SaleStatusApi.md#apiSaleStatusNotesByIdGet) | **GET** /api/SaleStatus/Notes/{id} | 
[**apiSaleStatusPost**](SaleStatusApi.md#apiSaleStatusPost) | **POST** /api/SaleStatus | 
[**apiSaleStatusPut**](SaleStatusApi.md#apiSaleStatusPut) | **PUT** /api/SaleStatus | 
[**apiSaleStatusRelationshipsByIdGet**](SaleStatusApi.md#apiSaleStatusRelationshipsByIdGet) | **GET** /api/SaleStatus/Relationships/{id} | 
[**apiSaleStatusSetAsDefaultByIdGet**](SaleStatusApi.md#apiSaleStatusSetAsDefaultByIdGet) | **GET** /api/SaleStatus/SetAsDefault/{id} | 
[**apiSaleStatusTranslationsByIdGet**](SaleStatusApi.md#apiSaleStatusTranslationsByIdGet) | **GET** /api/SaleStatus/Translations/{id} | 


<a name="apiSaleStatusActivateByIdGet"></a>
# **apiSaleStatusActivateByIdGet**
> apiSaleStatusActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusActivateByIdGet(id, callback);
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

<a name="apiSaleStatusActiveGet"></a>
# **apiSaleStatusActiveGet**
> apiSaleStatusActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

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
apiInstance.apiSaleStatusActiveGet(opts, callback);
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

<a name="apiSaleStatusByIdGet"></a>
# **apiSaleStatusByIdGet**
> apiSaleStatusByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

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
apiInstance.apiSaleStatusByIdGet(id, opts, callback);
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

<a name="apiSaleStatusByNameByIdGet"></a>
# **apiSaleStatusByNameByIdGet**
> apiSaleStatusByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusByNameByIdGet(id, callback);
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

<a name="apiSaleStatusByNamePost"></a>
# **apiSaleStatusByNamePost**
> apiSaleStatusByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatus() // DPSaleStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatus**](DPSaleStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusContactAddressesByIdGet"></a>
# **apiSaleStatusContactAddressesByIdGet**
> apiSaleStatusContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusContactAddressesByIdGet(id, callback);
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

<a name="apiSaleStatusContactAddressesByIdPost"></a>
# **apiSaleStatusContactAddressesByIdPost**
> apiSaleStatusContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

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
apiInstance.apiSaleStatusContactAddressesByIdPost(id, opts, callback);
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

<a name="apiSaleStatusContactDetailsByIdGet"></a>
# **apiSaleStatusContactDetailsByIdGet**
> apiSaleStatusContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusContactDetailsByIdGet(id, callback);
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

<a name="apiSaleStatusContactDetailsByIdPost"></a>
# **apiSaleStatusContactDetailsByIdPost**
> apiSaleStatusContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

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
apiInstance.apiSaleStatusContactDetailsByIdPost(id, opts, callback);
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

<a name="apiSaleStatusDeactivateByIdGet"></a>
# **apiSaleStatusDeactivateByIdGet**
> apiSaleStatusDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusDeactivateByIdGet(id, callback);
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

<a name="apiSaleStatusGet"></a>
# **apiSaleStatusGet**
> apiSaleStatusGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

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
apiInstance.apiSaleStatusGet(opts, callback);
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

<a name="apiSaleStatusNotesByIdGet"></a>
# **apiSaleStatusNotesByIdGet**
> apiSaleStatusNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusNotesByIdGet(id, callback);
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

<a name="apiSaleStatusPost"></a>
# **apiSaleStatusPost**
> apiSaleStatusPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatus() // DPSaleStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatus**](DPSaleStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusPut"></a>
# **apiSaleStatusPut**
> apiSaleStatusPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatus() // DPSaleStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatus**](DPSaleStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusRelationshipsByIdGet"></a>
# **apiSaleStatusRelationshipsByIdGet**
> apiSaleStatusRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusRelationshipsByIdGet(id, callback);
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

<a name="apiSaleStatusSetAsDefaultByIdGet"></a>
# **apiSaleStatusSetAsDefaultByIdGet**
> apiSaleStatusSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusSetAsDefaultByIdGet(id, callback);
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

<a name="apiSaleStatusTranslationsByIdGet"></a>
# **apiSaleStatusTranslationsByIdGet**
> apiSaleStatusTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTranslationsByIdGet(id, callback);
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

