# DirectPortalRestApi.ContractDetailTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContractDetailTypeActivateByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeActivateByIdGet) | **GET** /api/ContractDetailType/Activate/{id} | 
[**apiContractDetailTypeActiveGet**](ContractDetailTypeApi.md#apiContractDetailTypeActiveGet) | **GET** /api/ContractDetailType/Active | 
[**apiContractDetailTypeByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeByIdGet) | **GET** /api/ContractDetailType/{id} | 
[**apiContractDetailTypeByNameByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeByNameByIdGet) | **GET** /api/ContractDetailType/ByName/{id} | 
[**apiContractDetailTypeByNamePost**](ContractDetailTypeApi.md#apiContractDetailTypeByNamePost) | **POST** /api/ContractDetailType/ByName | 
[**apiContractDetailTypeContactAddressesByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeContactAddressesByIdGet) | **GET** /api/ContractDetailType/ContactAddresses/{id} | 
[**apiContractDetailTypeContactAddressesByIdPost**](ContractDetailTypeApi.md#apiContractDetailTypeContactAddressesByIdPost) | **POST** /api/ContractDetailType/ContactAddresses/{id} | 
[**apiContractDetailTypeContactDetailsByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeContactDetailsByIdGet) | **GET** /api/ContractDetailType/ContactDetails/{id} | 
[**apiContractDetailTypeContactDetailsByIdPost**](ContractDetailTypeApi.md#apiContractDetailTypeContactDetailsByIdPost) | **POST** /api/ContractDetailType/ContactDetails/{id} | 
[**apiContractDetailTypeDeactivateByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeDeactivateByIdGet) | **GET** /api/ContractDetailType/Deactivate/{id} | 
[**apiContractDetailTypeGet**](ContractDetailTypeApi.md#apiContractDetailTypeGet) | **GET** /api/ContractDetailType | 
[**apiContractDetailTypeNotesByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeNotesByIdGet) | **GET** /api/ContractDetailType/Notes/{id} | 
[**apiContractDetailTypePost**](ContractDetailTypeApi.md#apiContractDetailTypePost) | **POST** /api/ContractDetailType | 
[**apiContractDetailTypePut**](ContractDetailTypeApi.md#apiContractDetailTypePut) | **PUT** /api/ContractDetailType | 
[**apiContractDetailTypeRelationshipsByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeRelationshipsByIdGet) | **GET** /api/ContractDetailType/Relationships/{id} | 
[**apiContractDetailTypeSetAsDefaultByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeSetAsDefaultByIdGet) | **GET** /api/ContractDetailType/SetAsDefault/{id} | 
[**apiContractDetailTypeTranslationsByIdGet**](ContractDetailTypeApi.md#apiContractDetailTypeTranslationsByIdGet) | **GET** /api/ContractDetailType/Translations/{id} | 


<a name="apiContractDetailTypeActivateByIdGet"></a>
# **apiContractDetailTypeActivateByIdGet**
> apiContractDetailTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeActivateByIdGet(id, callback);
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

<a name="apiContractDetailTypeActiveGet"></a>
# **apiContractDetailTypeActiveGet**
> apiContractDetailTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

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
apiInstance.apiContractDetailTypeActiveGet(opts, callback);
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

<a name="apiContractDetailTypeByIdGet"></a>
# **apiContractDetailTypeByIdGet**
> apiContractDetailTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

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
apiInstance.apiContractDetailTypeByIdGet(id, opts, callback);
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

<a name="apiContractDetailTypeByNameByIdGet"></a>
# **apiContractDetailTypeByNameByIdGet**
> apiContractDetailTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeByNameByIdGet(id, callback);
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

<a name="apiContractDetailTypeByNamePost"></a>
# **apiContractDetailTypeByNamePost**
> apiContractDetailTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetailType() // DPContractDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetailType**](DPContractDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailTypeContactAddressesByIdGet"></a>
# **apiContractDetailTypeContactAddressesByIdGet**
> apiContractDetailTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeContactAddressesByIdGet(id, callback);
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

<a name="apiContractDetailTypeContactAddressesByIdPost"></a>
# **apiContractDetailTypeContactAddressesByIdPost**
> apiContractDetailTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

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
apiInstance.apiContractDetailTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiContractDetailTypeContactDetailsByIdGet"></a>
# **apiContractDetailTypeContactDetailsByIdGet**
> apiContractDetailTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeContactDetailsByIdGet(id, callback);
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

<a name="apiContractDetailTypeContactDetailsByIdPost"></a>
# **apiContractDetailTypeContactDetailsByIdPost**
> apiContractDetailTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

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
apiInstance.apiContractDetailTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiContractDetailTypeDeactivateByIdGet"></a>
# **apiContractDetailTypeDeactivateByIdGet**
> apiContractDetailTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeDeactivateByIdGet(id, callback);
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

<a name="apiContractDetailTypeGet"></a>
# **apiContractDetailTypeGet**
> apiContractDetailTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

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
apiInstance.apiContractDetailTypeGet(opts, callback);
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

<a name="apiContractDetailTypeNotesByIdGet"></a>
# **apiContractDetailTypeNotesByIdGet**
> apiContractDetailTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeNotesByIdGet(id, callback);
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

<a name="apiContractDetailTypePost"></a>
# **apiContractDetailTypePost**
> apiContractDetailTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetailType() // DPContractDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetailType**](DPContractDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailTypePut"></a>
# **apiContractDetailTypePut**
> apiContractDetailTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContractDetailType() // DPContractDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContractDetailType**](DPContractDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContractDetailTypeRelationshipsByIdGet"></a>
# **apiContractDetailTypeRelationshipsByIdGet**
> apiContractDetailTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeRelationshipsByIdGet(id, callback);
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

<a name="apiContractDetailTypeSetAsDefaultByIdGet"></a>
# **apiContractDetailTypeSetAsDefaultByIdGet**
> apiContractDetailTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiContractDetailTypeTranslationsByIdGet"></a>
# **apiContractDetailTypeTranslationsByIdGet**
> apiContractDetailTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContractDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContractDetailTypeTranslationsByIdGet(id, callback);
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

