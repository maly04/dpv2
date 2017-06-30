# DirectPortalRestApi.FeatureTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiFeatureTypeActivateByIdGet**](FeatureTypeApi.md#apiFeatureTypeActivateByIdGet) | **GET** /api/FeatureType/Activate/{id} | 
[**apiFeatureTypeActiveGet**](FeatureTypeApi.md#apiFeatureTypeActiveGet) | **GET** /api/FeatureType/Active | 
[**apiFeatureTypeByIdGet**](FeatureTypeApi.md#apiFeatureTypeByIdGet) | **GET** /api/FeatureType/{id} | 
[**apiFeatureTypeByNameByIdGet**](FeatureTypeApi.md#apiFeatureTypeByNameByIdGet) | **GET** /api/FeatureType/ByName/{id} | 
[**apiFeatureTypeByNamePost**](FeatureTypeApi.md#apiFeatureTypeByNamePost) | **POST** /api/FeatureType/ByName | 
[**apiFeatureTypeContactAddressesByIdGet**](FeatureTypeApi.md#apiFeatureTypeContactAddressesByIdGet) | **GET** /api/FeatureType/ContactAddresses/{id} | 
[**apiFeatureTypeContactAddressesByIdPost**](FeatureTypeApi.md#apiFeatureTypeContactAddressesByIdPost) | **POST** /api/FeatureType/ContactAddresses/{id} | 
[**apiFeatureTypeContactDetailsByIdGet**](FeatureTypeApi.md#apiFeatureTypeContactDetailsByIdGet) | **GET** /api/FeatureType/ContactDetails/{id} | 
[**apiFeatureTypeContactDetailsByIdPost**](FeatureTypeApi.md#apiFeatureTypeContactDetailsByIdPost) | **POST** /api/FeatureType/ContactDetails/{id} | 
[**apiFeatureTypeDeactivateByIdGet**](FeatureTypeApi.md#apiFeatureTypeDeactivateByIdGet) | **GET** /api/FeatureType/Deactivate/{id} | 
[**apiFeatureTypeGet**](FeatureTypeApi.md#apiFeatureTypeGet) | **GET** /api/FeatureType | 
[**apiFeatureTypeNotesByIdGet**](FeatureTypeApi.md#apiFeatureTypeNotesByIdGet) | **GET** /api/FeatureType/Notes/{id} | 
[**apiFeatureTypePost**](FeatureTypeApi.md#apiFeatureTypePost) | **POST** /api/FeatureType | 
[**apiFeatureTypePut**](FeatureTypeApi.md#apiFeatureTypePut) | **PUT** /api/FeatureType | 
[**apiFeatureTypeRelationshipsByIdGet**](FeatureTypeApi.md#apiFeatureTypeRelationshipsByIdGet) | **GET** /api/FeatureType/Relationships/{id} | 
[**apiFeatureTypeSetAsDefaultByIdGet**](FeatureTypeApi.md#apiFeatureTypeSetAsDefaultByIdGet) | **GET** /api/FeatureType/SetAsDefault/{id} | 
[**apiFeatureTypeTranslationsByIdGet**](FeatureTypeApi.md#apiFeatureTypeTranslationsByIdGet) | **GET** /api/FeatureType/Translations/{id} | 


<a name="apiFeatureTypeActivateByIdGet"></a>
# **apiFeatureTypeActivateByIdGet**
> apiFeatureTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeActivateByIdGet(id, callback);
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

<a name="apiFeatureTypeActiveGet"></a>
# **apiFeatureTypeActiveGet**
> apiFeatureTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

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
apiInstance.apiFeatureTypeActiveGet(opts, callback);
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

<a name="apiFeatureTypeByIdGet"></a>
# **apiFeatureTypeByIdGet**
> apiFeatureTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

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
apiInstance.apiFeatureTypeByIdGet(id, opts, callback);
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

<a name="apiFeatureTypeByNameByIdGet"></a>
# **apiFeatureTypeByNameByIdGet**
> apiFeatureTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeByNameByIdGet(id, callback);
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

<a name="apiFeatureTypeByNamePost"></a>
# **apiFeatureTypeByNamePost**
> apiFeatureTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPFeatureType() // DPFeatureType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPFeatureType**](DPFeatureType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiFeatureTypeContactAddressesByIdGet"></a>
# **apiFeatureTypeContactAddressesByIdGet**
> apiFeatureTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeContactAddressesByIdGet(id, callback);
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

<a name="apiFeatureTypeContactAddressesByIdPost"></a>
# **apiFeatureTypeContactAddressesByIdPost**
> apiFeatureTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

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
apiInstance.apiFeatureTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiFeatureTypeContactDetailsByIdGet"></a>
# **apiFeatureTypeContactDetailsByIdGet**
> apiFeatureTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeContactDetailsByIdGet(id, callback);
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

<a name="apiFeatureTypeContactDetailsByIdPost"></a>
# **apiFeatureTypeContactDetailsByIdPost**
> apiFeatureTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

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
apiInstance.apiFeatureTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiFeatureTypeDeactivateByIdGet"></a>
# **apiFeatureTypeDeactivateByIdGet**
> apiFeatureTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeDeactivateByIdGet(id, callback);
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

<a name="apiFeatureTypeGet"></a>
# **apiFeatureTypeGet**
> apiFeatureTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

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
apiInstance.apiFeatureTypeGet(opts, callback);
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

<a name="apiFeatureTypeNotesByIdGet"></a>
# **apiFeatureTypeNotesByIdGet**
> apiFeatureTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeNotesByIdGet(id, callback);
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

<a name="apiFeatureTypePost"></a>
# **apiFeatureTypePost**
> apiFeatureTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPFeatureType() // DPFeatureType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPFeatureType**](DPFeatureType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiFeatureTypePut"></a>
# **apiFeatureTypePut**
> apiFeatureTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPFeatureType() // DPFeatureType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPFeatureType**](DPFeatureType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiFeatureTypeRelationshipsByIdGet"></a>
# **apiFeatureTypeRelationshipsByIdGet**
> apiFeatureTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeRelationshipsByIdGet(id, callback);
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

<a name="apiFeatureTypeSetAsDefaultByIdGet"></a>
# **apiFeatureTypeSetAsDefaultByIdGet**
> apiFeatureTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiFeatureTypeTranslationsByIdGet"></a>
# **apiFeatureTypeTranslationsByIdGet**
> apiFeatureTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.FeatureTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiFeatureTypeTranslationsByIdGet(id, callback);
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

