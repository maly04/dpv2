# DirectPortalRestApi.ContractDetailApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContractDetailActivateByIdGet**](ContractDetailApi.md#apiContractDetailActivateByIdGet) | **GET** /api/ContractDetail/Activate/{id} | 
[**apiContractDetailActiveGet**](ContractDetailApi.md#apiContractDetailActiveGet) | **GET** /api/ContractDetail/Active | 
[**apiContractDetailByIdGet**](ContractDetailApi.md#apiContractDetailByIdGet) | **GET** /api/ContractDetail/{id} | 
[**apiContractDetailByNameByIdGet**](ContractDetailApi.md#apiContractDetailByNameByIdGet) | **GET** /api/ContractDetail/ByName/{id} | 
[**apiContractDetailByNamePost**](ContractDetailApi.md#apiContractDetailByNamePost) | **POST** /api/ContractDetail/ByName | 
[**apiContractDetailContactAddressesByIdGet**](ContractDetailApi.md#apiContractDetailContactAddressesByIdGet) | **GET** /api/ContractDetail/ContactAddresses/{id} | 
[**apiContractDetailContactAddressesByIdPost**](ContractDetailApi.md#apiContractDetailContactAddressesByIdPost) | **POST** /api/ContractDetail/ContactAddresses/{id} | 
[**apiContractDetailContactDetailsByIdGet**](ContractDetailApi.md#apiContractDetailContactDetailsByIdGet) | **GET** /api/ContractDetail/ContactDetails/{id} | 
[**apiContractDetailContactDetailsByIdPost**](ContractDetailApi.md#apiContractDetailContactDetailsByIdPost) | **POST** /api/ContractDetail/ContactDetails/{id} | 
[**apiContractDetailDeactivateByIdGet**](ContractDetailApi.md#apiContractDetailDeactivateByIdGet) | **GET** /api/ContractDetail/Deactivate/{id} | 
[**apiContractDetailGet**](ContractDetailApi.md#apiContractDetailGet) | **GET** /api/ContractDetail | 
[**apiContractDetailNotesByIdGet**](ContractDetailApi.md#apiContractDetailNotesByIdGet) | **GET** /api/ContractDetail/Notes/{id} | 
[**apiContractDetailPost**](ContractDetailApi.md#apiContractDetailPost) | **POST** /api/ContractDetail | 
[**apiContractDetailPut**](ContractDetailApi.md#apiContractDetailPut) | **PUT** /api/ContractDetail | 
[**apiContractDetailRelationshipsByIdGet**](ContractDetailApi.md#apiContractDetailRelationshipsByIdGet) | **GET** /api/ContractDetail/Relationships/{id} | 
[**apiContractDetailSetAsDefaultByIdGet**](ContractDetailApi.md#apiContractDetailSetAsDefaultByIdGet) | **GET** /api/ContractDetail/SetAsDefault/{id} | 
[**apiContractDetailTranslationsByIdGet**](ContractDetailApi.md#apiContractDetailTranslationsByIdGet) | **GET** /api/ContractDetail/Translations/{id} | 


<a name="apiContractDetailActivateByIdGet"></a>
# **apiContractDetailActivateByIdGet**
> apiContractDetailActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailActivateByIdGet(id, callback);
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

<a name="apiContractDetailActiveGet"></a>
# **apiContractDetailActiveGet**
> apiContractDetailActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

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
apiInstance.apiContractDetailActiveGet(opts, callback);
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

<a name="apiContractDetailByIdGet"></a>
# **apiContractDetailByIdGet**
> apiContractDetailByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

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
apiInstance.apiContractDetailByIdGet(id, opts, callback);
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

<a name="apiContractDetailByNameByIdGet"></a>
# **apiContractDetailByNameByIdGet**
> apiContractDetailByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailByNameByIdGet(id, callback);
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

<a name="apiContractDetailByNamePost"></a>
# **apiContractDetailByNamePost**
> apiContractDetailByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetail() // DPContractDetail | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetail**](DPContractDetail.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailContactAddressesByIdGet"></a>
# **apiContractDetailContactAddressesByIdGet**
> apiContractDetailContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailContactAddressesByIdGet(id, callback);
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

<a name="apiContractDetailContactAddressesByIdPost"></a>
# **apiContractDetailContactAddressesByIdPost**
> apiContractDetailContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

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
apiInstance.apiContractDetailContactAddressesByIdPost(id, opts, callback);
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

<a name="apiContractDetailContactDetailsByIdGet"></a>
# **apiContractDetailContactDetailsByIdGet**
> apiContractDetailContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailContactDetailsByIdGet(id, callback);
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

<a name="apiContractDetailContactDetailsByIdPost"></a>
# **apiContractDetailContactDetailsByIdPost**
> apiContractDetailContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

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
apiInstance.apiContractDetailContactDetailsByIdPost(id, opts, callback);
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

<a name="apiContractDetailDeactivateByIdGet"></a>
# **apiContractDetailDeactivateByIdGet**
> apiContractDetailDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailDeactivateByIdGet(id, callback);
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

<a name="apiContractDetailGet"></a>
# **apiContractDetailGet**
> apiContractDetailGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

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
apiInstance.apiContractDetailGet(opts, callback);
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

<a name="apiContractDetailNotesByIdGet"></a>
# **apiContractDetailNotesByIdGet**
> apiContractDetailNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailNotesByIdGet(id, callback);
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

<a name="apiContractDetailPost"></a>
# **apiContractDetailPost**
> apiContractDetailPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetail() // DPContractDetail | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetail**](DPContractDetail.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailPut"></a>
# **apiContractDetailPut**
> apiContractDetailPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetail() // DPContractDetail | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetail**](DPContractDetail.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailRelationshipsByIdGet"></a>
# **apiContractDetailRelationshipsByIdGet**
> apiContractDetailRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailRelationshipsByIdGet(id, callback);
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

<a name="apiContractDetailSetAsDefaultByIdGet"></a>
# **apiContractDetailSetAsDefaultByIdGet**
> apiContractDetailSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailSetAsDefaultByIdGet(id, callback);
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

<a name="apiContractDetailTranslationsByIdGet"></a>
# **apiContractDetailTranslationsByIdGet**
> apiContractDetailTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTranslationsByIdGet(id, callback);
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

