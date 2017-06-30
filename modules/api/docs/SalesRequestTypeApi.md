# DirectPortalRestApi.SalesRequestTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSalesRequestTypeActivateByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeActivateByIdGet) | **GET** /api/SalesRequestType/Activate/{id} | 
[**apiSalesRequestTypeActiveGet**](SalesRequestTypeApi.md#apiSalesRequestTypeActiveGet) | **GET** /api/SalesRequestType/Active | 
[**apiSalesRequestTypeByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeByIdGet) | **GET** /api/SalesRequestType/{id} | 
[**apiSalesRequestTypeByNameByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeByNameByIdGet) | **GET** /api/SalesRequestType/ByName/{id} | 
[**apiSalesRequestTypeByNamePost**](SalesRequestTypeApi.md#apiSalesRequestTypeByNamePost) | **POST** /api/SalesRequestType/ByName | 
[**apiSalesRequestTypeContactAddressesByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeContactAddressesByIdGet) | **GET** /api/SalesRequestType/ContactAddresses/{id} | 
[**apiSalesRequestTypeContactAddressesByIdPost**](SalesRequestTypeApi.md#apiSalesRequestTypeContactAddressesByIdPost) | **POST** /api/SalesRequestType/ContactAddresses/{id} | 
[**apiSalesRequestTypeContactDetailsByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeContactDetailsByIdGet) | **GET** /api/SalesRequestType/ContactDetails/{id} | 
[**apiSalesRequestTypeContactDetailsByIdPost**](SalesRequestTypeApi.md#apiSalesRequestTypeContactDetailsByIdPost) | **POST** /api/SalesRequestType/ContactDetails/{id} | 
[**apiSalesRequestTypeDeactivateByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeDeactivateByIdGet) | **GET** /api/SalesRequestType/Deactivate/{id} | 
[**apiSalesRequestTypeGet**](SalesRequestTypeApi.md#apiSalesRequestTypeGet) | **GET** /api/SalesRequestType | 
[**apiSalesRequestTypeNotesByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeNotesByIdGet) | **GET** /api/SalesRequestType/Notes/{id} | 
[**apiSalesRequestTypePost**](SalesRequestTypeApi.md#apiSalesRequestTypePost) | **POST** /api/SalesRequestType | 
[**apiSalesRequestTypePut**](SalesRequestTypeApi.md#apiSalesRequestTypePut) | **PUT** /api/SalesRequestType | 
[**apiSalesRequestTypeRelationshipsByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeRelationshipsByIdGet) | **GET** /api/SalesRequestType/Relationships/{id} | 
[**apiSalesRequestTypeSetAsDefaultByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeSetAsDefaultByIdGet) | **GET** /api/SalesRequestType/SetAsDefault/{id} | 
[**apiSalesRequestTypeTranslationsByIdGet**](SalesRequestTypeApi.md#apiSalesRequestTypeTranslationsByIdGet) | **GET** /api/SalesRequestType/Translations/{id} | 


<a name="apiSalesRequestTypeActivateByIdGet"></a>
# **apiSalesRequestTypeActivateByIdGet**
> apiSalesRequestTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeActivateByIdGet(id, callback);
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

<a name="apiSalesRequestTypeActiveGet"></a>
# **apiSalesRequestTypeActiveGet**
> apiSalesRequestTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

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
apiInstance.apiSalesRequestTypeActiveGet(opts, callback);
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

<a name="apiSalesRequestTypeByIdGet"></a>
# **apiSalesRequestTypeByIdGet**
> apiSalesRequestTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

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
apiInstance.apiSalesRequestTypeByIdGet(id, opts, callback);
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

<a name="apiSalesRequestTypeByNameByIdGet"></a>
# **apiSalesRequestTypeByNameByIdGet**
> apiSalesRequestTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeByNameByIdGet(id, callback);
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

<a name="apiSalesRequestTypeByNamePost"></a>
# **apiSalesRequestTypeByNamePost**
> apiSalesRequestTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequestType() // DPSalesRequestType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequestType**](DPSalesRequestType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestTypeContactAddressesByIdGet"></a>
# **apiSalesRequestTypeContactAddressesByIdGet**
> apiSalesRequestTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeContactAddressesByIdGet(id, callback);
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

<a name="apiSalesRequestTypeContactAddressesByIdPost"></a>
# **apiSalesRequestTypeContactAddressesByIdPost**
> apiSalesRequestTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

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
apiInstance.apiSalesRequestTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiSalesRequestTypeContactDetailsByIdGet"></a>
# **apiSalesRequestTypeContactDetailsByIdGet**
> apiSalesRequestTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeContactDetailsByIdGet(id, callback);
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

<a name="apiSalesRequestTypeContactDetailsByIdPost"></a>
# **apiSalesRequestTypeContactDetailsByIdPost**
> apiSalesRequestTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

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
apiInstance.apiSalesRequestTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiSalesRequestTypeDeactivateByIdGet"></a>
# **apiSalesRequestTypeDeactivateByIdGet**
> apiSalesRequestTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeDeactivateByIdGet(id, callback);
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

<a name="apiSalesRequestTypeGet"></a>
# **apiSalesRequestTypeGet**
> apiSalesRequestTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

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
apiInstance.apiSalesRequestTypeGet(opts, callback);
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

<a name="apiSalesRequestTypeNotesByIdGet"></a>
# **apiSalesRequestTypeNotesByIdGet**
> apiSalesRequestTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeNotesByIdGet(id, callback);
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

<a name="apiSalesRequestTypePost"></a>
# **apiSalesRequestTypePost**
> apiSalesRequestTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequestType() // DPSalesRequestType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequestType**](DPSalesRequestType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestTypePut"></a>
# **apiSalesRequestTypePut**
> apiSalesRequestTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSalesRequestType() // DPSalesRequestType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSalesRequestType**](DPSalesRequestType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSalesRequestTypeRelationshipsByIdGet"></a>
# **apiSalesRequestTypeRelationshipsByIdGet**
> apiSalesRequestTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeRelationshipsByIdGet(id, callback);
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

<a name="apiSalesRequestTypeSetAsDefaultByIdGet"></a>
# **apiSalesRequestTypeSetAsDefaultByIdGet**
> apiSalesRequestTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiSalesRequestTypeTranslationsByIdGet"></a>
# **apiSalesRequestTypeTranslationsByIdGet**
> apiSalesRequestTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SalesRequestTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSalesRequestTypeTranslationsByIdGet(id, callback);
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

