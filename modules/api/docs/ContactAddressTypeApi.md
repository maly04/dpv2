# DirectPortalRestApi.ContactAddressTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContactAddressTypeActivateByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeActivateByIdGet) | **GET** /api/ContactAddressType/Activate/{id} | 
[**apiContactAddressTypeActiveGet**](ContactAddressTypeApi.md#apiContactAddressTypeActiveGet) | **GET** /api/ContactAddressType/Active | 
[**apiContactAddressTypeByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeByIdGet) | **GET** /api/ContactAddressType/{id} | 
[**apiContactAddressTypeByNameByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeByNameByIdGet) | **GET** /api/ContactAddressType/ByName/{id} | 
[**apiContactAddressTypeByNamePost**](ContactAddressTypeApi.md#apiContactAddressTypeByNamePost) | **POST** /api/ContactAddressType/ByName | 
[**apiContactAddressTypeContactAddressesByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeContactAddressesByIdGet) | **GET** /api/ContactAddressType/ContactAddresses/{id} | 
[**apiContactAddressTypeContactAddressesByIdPost**](ContactAddressTypeApi.md#apiContactAddressTypeContactAddressesByIdPost) | **POST** /api/ContactAddressType/ContactAddresses/{id} | 
[**apiContactAddressTypeContactDetailsByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeContactDetailsByIdGet) | **GET** /api/ContactAddressType/ContactDetails/{id} | 
[**apiContactAddressTypeContactDetailsByIdPost**](ContactAddressTypeApi.md#apiContactAddressTypeContactDetailsByIdPost) | **POST** /api/ContactAddressType/ContactDetails/{id} | 
[**apiContactAddressTypeDeactivateByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeDeactivateByIdGet) | **GET** /api/ContactAddressType/Deactivate/{id} | 
[**apiContactAddressTypeGet**](ContactAddressTypeApi.md#apiContactAddressTypeGet) | **GET** /api/ContactAddressType | 
[**apiContactAddressTypeNotesByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeNotesByIdGet) | **GET** /api/ContactAddressType/Notes/{id} | 
[**apiContactAddressTypePost**](ContactAddressTypeApi.md#apiContactAddressTypePost) | **POST** /api/ContactAddressType | 
[**apiContactAddressTypePut**](ContactAddressTypeApi.md#apiContactAddressTypePut) | **PUT** /api/ContactAddressType | 
[**apiContactAddressTypeRelationshipsByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeRelationshipsByIdGet) | **GET** /api/ContactAddressType/Relationships/{id} | 
[**apiContactAddressTypeSetAsDefaultByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeSetAsDefaultByIdGet) | **GET** /api/ContactAddressType/SetAsDefault/{id} | 
[**apiContactAddressTypeTranslationsByIdGet**](ContactAddressTypeApi.md#apiContactAddressTypeTranslationsByIdGet) | **GET** /api/ContactAddressType/Translations/{id} | 


<a name="apiContactAddressTypeActivateByIdGet"></a>
# **apiContactAddressTypeActivateByIdGet**
> apiContactAddressTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeActivateByIdGet(id, callback);
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

<a name="apiContactAddressTypeActiveGet"></a>
# **apiContactAddressTypeActiveGet**
> apiContactAddressTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

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
apiInstance.apiContactAddressTypeActiveGet(opts, callback);
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

<a name="apiContactAddressTypeByIdGet"></a>
# **apiContactAddressTypeByIdGet**
> apiContactAddressTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

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
apiInstance.apiContactAddressTypeByIdGet(id, opts, callback);
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

<a name="apiContactAddressTypeByNameByIdGet"></a>
# **apiContactAddressTypeByNameByIdGet**
> apiContactAddressTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeByNameByIdGet(id, callback);
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

<a name="apiContactAddressTypeByNamePost"></a>
# **apiContactAddressTypeByNamePost**
> apiContactAddressTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactAddressType() // DPContactAddressType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactAddressType**](DPContactAddressType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactAddressTypeContactAddressesByIdGet"></a>
# **apiContactAddressTypeContactAddressesByIdGet**
> apiContactAddressTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeContactAddressesByIdGet(id, callback);
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

<a name="apiContactAddressTypeContactAddressesByIdPost"></a>
# **apiContactAddressTypeContactAddressesByIdPost**
> apiContactAddressTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

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
apiInstance.apiContactAddressTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiContactAddressTypeContactDetailsByIdGet"></a>
# **apiContactAddressTypeContactDetailsByIdGet**
> apiContactAddressTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeContactDetailsByIdGet(id, callback);
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

<a name="apiContactAddressTypeContactDetailsByIdPost"></a>
# **apiContactAddressTypeContactDetailsByIdPost**
> apiContactAddressTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

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
apiInstance.apiContactAddressTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiContactAddressTypeDeactivateByIdGet"></a>
# **apiContactAddressTypeDeactivateByIdGet**
> apiContactAddressTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeDeactivateByIdGet(id, callback);
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

<a name="apiContactAddressTypeGet"></a>
# **apiContactAddressTypeGet**
> apiContactAddressTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

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
apiInstance.apiContactAddressTypeGet(opts, callback);
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

<a name="apiContactAddressTypeNotesByIdGet"></a>
# **apiContactAddressTypeNotesByIdGet**
> apiContactAddressTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeNotesByIdGet(id, callback);
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

<a name="apiContactAddressTypePost"></a>
# **apiContactAddressTypePost**
> apiContactAddressTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactAddressType() // DPContactAddressType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactAddressType**](DPContactAddressType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactAddressTypePut"></a>
# **apiContactAddressTypePut**
> apiContactAddressTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactAddressType() // DPContactAddressType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactAddressType**](DPContactAddressType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactAddressTypeRelationshipsByIdGet"></a>
# **apiContactAddressTypeRelationshipsByIdGet**
> apiContactAddressTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeRelationshipsByIdGet(id, callback);
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

<a name="apiContactAddressTypeSetAsDefaultByIdGet"></a>
# **apiContactAddressTypeSetAsDefaultByIdGet**
> apiContactAddressTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiContactAddressTypeTranslationsByIdGet"></a>
# **apiContactAddressTypeTranslationsByIdGet**
> apiContactAddressTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactAddressTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactAddressTypeTranslationsByIdGet(id, callback);
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

