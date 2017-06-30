# DirectPortalRestApi.SalesRequestApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSalesRequestActivateByIdGet**](SalesRequestApi.md#apiSalesRequestActivateByIdGet) | **GET** /api/SalesRequest/Activate/{id} | 
[**apiSalesRequestActiveGet**](SalesRequestApi.md#apiSalesRequestActiveGet) | **GET** /api/SalesRequest/Active | 
[**apiSalesRequestByIdGet**](SalesRequestApi.md#apiSalesRequestByIdGet) | **GET** /api/SalesRequest/{id} | 
[**apiSalesRequestByNameByIdGet**](SalesRequestApi.md#apiSalesRequestByNameByIdGet) | **GET** /api/SalesRequest/ByName/{id} | 
[**apiSalesRequestByNamePost**](SalesRequestApi.md#apiSalesRequestByNamePost) | **POST** /api/SalesRequest/ByName | 
[**apiSalesRequestContactAddressesByIdGet**](SalesRequestApi.md#apiSalesRequestContactAddressesByIdGet) | **GET** /api/SalesRequest/ContactAddresses/{id} | 
[**apiSalesRequestContactAddressesByIdPost**](SalesRequestApi.md#apiSalesRequestContactAddressesByIdPost) | **POST** /api/SalesRequest/ContactAddresses/{id} | 
[**apiSalesRequestContactDetailsByIdGet**](SalesRequestApi.md#apiSalesRequestContactDetailsByIdGet) | **GET** /api/SalesRequest/ContactDetails/{id} | 
[**apiSalesRequestContactDetailsByIdPost**](SalesRequestApi.md#apiSalesRequestContactDetailsByIdPost) | **POST** /api/SalesRequest/ContactDetails/{id} | 
[**apiSalesRequestDeactivateByIdGet**](SalesRequestApi.md#apiSalesRequestDeactivateByIdGet) | **GET** /api/SalesRequest/Deactivate/{id} | 
[**apiSalesRequestGet**](SalesRequestApi.md#apiSalesRequestGet) | **GET** /api/SalesRequest | 
[**apiSalesRequestNotesByIdGet**](SalesRequestApi.md#apiSalesRequestNotesByIdGet) | **GET** /api/SalesRequest/Notes/{id} | 
[**apiSalesRequestPost**](SalesRequestApi.md#apiSalesRequestPost) | **POST** /api/SalesRequest | 
[**apiSalesRequestPut**](SalesRequestApi.md#apiSalesRequestPut) | **PUT** /api/SalesRequest | 
[**apiSalesRequestRelationshipsByIdGet**](SalesRequestApi.md#apiSalesRequestRelationshipsByIdGet) | **GET** /api/SalesRequest/Relationships/{id} | 
[**apiSalesRequestSetAsDefaultByIdGet**](SalesRequestApi.md#apiSalesRequestSetAsDefaultByIdGet) | **GET** /api/SalesRequest/SetAsDefault/{id} | 
[**apiSalesRequestTranslationsByIdGet**](SalesRequestApi.md#apiSalesRequestTranslationsByIdGet) | **GET** /api/SalesRequest/Translations/{id} | 


<a name="apiSalesRequestActivateByIdGet"></a>
# **apiSalesRequestActivateByIdGet**
> apiSalesRequestActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestActivateByIdGet(id, callback);
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

<a name="apiSalesRequestActiveGet"></a>
# **apiSalesRequestActiveGet**
> apiSalesRequestActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

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
apiInstance.apiSalesRequestActiveGet(opts, callback);
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

<a name="apiSalesRequestByIdGet"></a>
# **apiSalesRequestByIdGet**
> apiSalesRequestByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

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
apiInstance.apiSalesRequestByIdGet(id, opts, callback);
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

<a name="apiSalesRequestByNameByIdGet"></a>
# **apiSalesRequestByNameByIdGet**
> apiSalesRequestByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestByNameByIdGet(id, callback);
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

<a name="apiSalesRequestByNamePost"></a>
# **apiSalesRequestByNamePost**
> apiSalesRequestByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequest() // DPSalesRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequest**](DPSalesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestContactAddressesByIdGet"></a>
# **apiSalesRequestContactAddressesByIdGet**
> apiSalesRequestContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestContactAddressesByIdGet(id, callback);
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

<a name="apiSalesRequestContactAddressesByIdPost"></a>
# **apiSalesRequestContactAddressesByIdPost**
> apiSalesRequestContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

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
apiInstance.apiSalesRequestContactAddressesByIdPost(id, opts, callback);
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

<a name="apiSalesRequestContactDetailsByIdGet"></a>
# **apiSalesRequestContactDetailsByIdGet**
> apiSalesRequestContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestContactDetailsByIdGet(id, callback);
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

<a name="apiSalesRequestContactDetailsByIdPost"></a>
# **apiSalesRequestContactDetailsByIdPost**
> apiSalesRequestContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

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
apiInstance.apiSalesRequestContactDetailsByIdPost(id, opts, callback);
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

<a name="apiSalesRequestDeactivateByIdGet"></a>
# **apiSalesRequestDeactivateByIdGet**
> apiSalesRequestDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestDeactivateByIdGet(id, callback);
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

<a name="apiSalesRequestGet"></a>
# **apiSalesRequestGet**
> apiSalesRequestGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

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
apiInstance.apiSalesRequestGet(opts, callback);
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

<a name="apiSalesRequestNotesByIdGet"></a>
# **apiSalesRequestNotesByIdGet**
> apiSalesRequestNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestNotesByIdGet(id, callback);
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

<a name="apiSalesRequestPost"></a>
# **apiSalesRequestPost**
> apiSalesRequestPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequest() // DPSalesRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequest**](DPSalesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestPut"></a>
# **apiSalesRequestPut**
> apiSalesRequestPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequest() // DPSalesRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequest**](DPSalesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestRelationshipsByIdGet"></a>
# **apiSalesRequestRelationshipsByIdGet**
> apiSalesRequestRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestRelationshipsByIdGet(id, callback);
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

<a name="apiSalesRequestSetAsDefaultByIdGet"></a>
# **apiSalesRequestSetAsDefaultByIdGet**
> apiSalesRequestSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestSetAsDefaultByIdGet(id, callback);
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

<a name="apiSalesRequestTranslationsByIdGet"></a>
# **apiSalesRequestTranslationsByIdGet**
> apiSalesRequestTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTranslationsByIdGet(id, callback);
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

