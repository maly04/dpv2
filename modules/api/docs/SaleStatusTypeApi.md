# DirectPortalRestApi.SaleStatusTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSaleStatusTypeActivateByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeActivateByIdGet) | **GET** /api/SaleStatusType/Activate/{id} | 
[**apiSaleStatusTypeActiveGet**](SaleStatusTypeApi.md#apiSaleStatusTypeActiveGet) | **GET** /api/SaleStatusType/Active | 
[**apiSaleStatusTypeByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeByIdGet) | **GET** /api/SaleStatusType/{id} | 
[**apiSaleStatusTypeByNameByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeByNameByIdGet) | **GET** /api/SaleStatusType/ByName/{id} | 
[**apiSaleStatusTypeByNamePost**](SaleStatusTypeApi.md#apiSaleStatusTypeByNamePost) | **POST** /api/SaleStatusType/ByName | 
[**apiSaleStatusTypeContactAddressesByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeContactAddressesByIdGet) | **GET** /api/SaleStatusType/ContactAddresses/{id} | 
[**apiSaleStatusTypeContactAddressesByIdPost**](SaleStatusTypeApi.md#apiSaleStatusTypeContactAddressesByIdPost) | **POST** /api/SaleStatusType/ContactAddresses/{id} | 
[**apiSaleStatusTypeContactDetailsByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeContactDetailsByIdGet) | **GET** /api/SaleStatusType/ContactDetails/{id} | 
[**apiSaleStatusTypeContactDetailsByIdPost**](SaleStatusTypeApi.md#apiSaleStatusTypeContactDetailsByIdPost) | **POST** /api/SaleStatusType/ContactDetails/{id} | 
[**apiSaleStatusTypeDeactivateByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeDeactivateByIdGet) | **GET** /api/SaleStatusType/Deactivate/{id} | 
[**apiSaleStatusTypeGet**](SaleStatusTypeApi.md#apiSaleStatusTypeGet) | **GET** /api/SaleStatusType | 
[**apiSaleStatusTypeNotesByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeNotesByIdGet) | **GET** /api/SaleStatusType/Notes/{id} | 
[**apiSaleStatusTypePost**](SaleStatusTypeApi.md#apiSaleStatusTypePost) | **POST** /api/SaleStatusType | 
[**apiSaleStatusTypePut**](SaleStatusTypeApi.md#apiSaleStatusTypePut) | **PUT** /api/SaleStatusType | 
[**apiSaleStatusTypeRelationshipsByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeRelationshipsByIdGet) | **GET** /api/SaleStatusType/Relationships/{id} | 
[**apiSaleStatusTypeSetAsDefaultByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeSetAsDefaultByIdGet) | **GET** /api/SaleStatusType/SetAsDefault/{id} | 
[**apiSaleStatusTypeTranslationsByIdGet**](SaleStatusTypeApi.md#apiSaleStatusTypeTranslationsByIdGet) | **GET** /api/SaleStatusType/Translations/{id} | 


<a name="apiSaleStatusTypeActivateByIdGet"></a>
# **apiSaleStatusTypeActivateByIdGet**
> apiSaleStatusTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeActivateByIdGet(id, callback);
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

<a name="apiSaleStatusTypeActiveGet"></a>
# **apiSaleStatusTypeActiveGet**
> apiSaleStatusTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

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
apiInstance.apiSaleStatusTypeActiveGet(opts, callback);
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

<a name="apiSaleStatusTypeByIdGet"></a>
# **apiSaleStatusTypeByIdGet**
> apiSaleStatusTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

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
apiInstance.apiSaleStatusTypeByIdGet(id, opts, callback);
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

<a name="apiSaleStatusTypeByNameByIdGet"></a>
# **apiSaleStatusTypeByNameByIdGet**
> apiSaleStatusTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeByNameByIdGet(id, callback);
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

<a name="apiSaleStatusTypeByNamePost"></a>
# **apiSaleStatusTypeByNamePost**
> apiSaleStatusTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatusType() // DPSaleStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatusType**](DPSaleStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusTypeContactAddressesByIdGet"></a>
# **apiSaleStatusTypeContactAddressesByIdGet**
> apiSaleStatusTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeContactAddressesByIdGet(id, callback);
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

<a name="apiSaleStatusTypeContactAddressesByIdPost"></a>
# **apiSaleStatusTypeContactAddressesByIdPost**
> apiSaleStatusTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

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
apiInstance.apiSaleStatusTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiSaleStatusTypeContactDetailsByIdGet"></a>
# **apiSaleStatusTypeContactDetailsByIdGet**
> apiSaleStatusTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeContactDetailsByIdGet(id, callback);
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

<a name="apiSaleStatusTypeContactDetailsByIdPost"></a>
# **apiSaleStatusTypeContactDetailsByIdPost**
> apiSaleStatusTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

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
apiInstance.apiSaleStatusTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiSaleStatusTypeDeactivateByIdGet"></a>
# **apiSaleStatusTypeDeactivateByIdGet**
> apiSaleStatusTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeDeactivateByIdGet(id, callback);
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

<a name="apiSaleStatusTypeGet"></a>
# **apiSaleStatusTypeGet**
> apiSaleStatusTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

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
apiInstance.apiSaleStatusTypeGet(opts, callback);
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

<a name="apiSaleStatusTypeNotesByIdGet"></a>
# **apiSaleStatusTypeNotesByIdGet**
> apiSaleStatusTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeNotesByIdGet(id, callback);
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

<a name="apiSaleStatusTypePost"></a>
# **apiSaleStatusTypePost**
> apiSaleStatusTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatusType() // DPSaleStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatusType**](DPSaleStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusTypePut"></a>
# **apiSaleStatusTypePut**
> apiSaleStatusTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSaleStatusType() // DPSaleStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSaleStatusType**](DPSaleStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSaleStatusTypeRelationshipsByIdGet"></a>
# **apiSaleStatusTypeRelationshipsByIdGet**
> apiSaleStatusTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeRelationshipsByIdGet(id, callback);
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

<a name="apiSaleStatusTypeSetAsDefaultByIdGet"></a>
# **apiSaleStatusTypeSetAsDefaultByIdGet**
> apiSaleStatusTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiSaleStatusTypeTranslationsByIdGet"></a>
# **apiSaleStatusTypeTranslationsByIdGet**
> apiSaleStatusTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SaleStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSaleStatusTypeTranslationsByIdGet(id, callback);
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

