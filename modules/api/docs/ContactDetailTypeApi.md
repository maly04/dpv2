# DirectPortalRestApi.ContactDetailTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiContactDetailTypeActivateByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeActivateByIdGet) | **GET** /api/ContactDetailType/Activate/{id} | 
[**apiContactDetailTypeActiveGet**](ContactDetailTypeApi.md#apiContactDetailTypeActiveGet) | **GET** /api/ContactDetailType/Active | 
[**apiContactDetailTypeByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeByIdGet) | **GET** /api/ContactDetailType/{id} | 
[**apiContactDetailTypeByNameByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeByNameByIdGet) | **GET** /api/ContactDetailType/ByName/{id} | 
[**apiContactDetailTypeByNamePost**](ContactDetailTypeApi.md#apiContactDetailTypeByNamePost) | **POST** /api/ContactDetailType/ByName | 
[**apiContactDetailTypeContactAddressesByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeContactAddressesByIdGet) | **GET** /api/ContactDetailType/ContactAddresses/{id} | 
[**apiContactDetailTypeContactAddressesByIdPost**](ContactDetailTypeApi.md#apiContactDetailTypeContactAddressesByIdPost) | **POST** /api/ContactDetailType/ContactAddresses/{id} | 
[**apiContactDetailTypeContactDetailsByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeContactDetailsByIdGet) | **GET** /api/ContactDetailType/ContactDetails/{id} | 
[**apiContactDetailTypeContactDetailsByIdPost**](ContactDetailTypeApi.md#apiContactDetailTypeContactDetailsByIdPost) | **POST** /api/ContactDetailType/ContactDetails/{id} | 
[**apiContactDetailTypeDeactivateByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeDeactivateByIdGet) | **GET** /api/ContactDetailType/Deactivate/{id} | 
[**apiContactDetailTypeGet**](ContactDetailTypeApi.md#apiContactDetailTypeGet) | **GET** /api/ContactDetailType | 
[**apiContactDetailTypeNotesByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeNotesByIdGet) | **GET** /api/ContactDetailType/Notes/{id} | 
[**apiContactDetailTypePost**](ContactDetailTypeApi.md#apiContactDetailTypePost) | **POST** /api/ContactDetailType | 
[**apiContactDetailTypePut**](ContactDetailTypeApi.md#apiContactDetailTypePut) | **PUT** /api/ContactDetailType | 
[**apiContactDetailTypeRelationshipsByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeRelationshipsByIdGet) | **GET** /api/ContactDetailType/Relationships/{id} | 
[**apiContactDetailTypeSetAsDefaultByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeSetAsDefaultByIdGet) | **GET** /api/ContactDetailType/SetAsDefault/{id} | 
[**apiContactDetailTypeTranslationsByIdGet**](ContactDetailTypeApi.md#apiContactDetailTypeTranslationsByIdGet) | **GET** /api/ContactDetailType/Translations/{id} | 


<a name="apiContactDetailTypeActivateByIdGet"></a>
# **apiContactDetailTypeActivateByIdGet**
> apiContactDetailTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeActivateByIdGet(id, callback);
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

<a name="apiContactDetailTypeActiveGet"></a>
# **apiContactDetailTypeActiveGet**
> apiContactDetailTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

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
apiInstance.apiContactDetailTypeActiveGet(opts, callback);
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

<a name="apiContactDetailTypeByIdGet"></a>
# **apiContactDetailTypeByIdGet**
> apiContactDetailTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

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
apiInstance.apiContactDetailTypeByIdGet(id, opts, callback);
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

<a name="apiContactDetailTypeByNameByIdGet"></a>
# **apiContactDetailTypeByNameByIdGet**
> apiContactDetailTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeByNameByIdGet(id, callback);
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

<a name="apiContactDetailTypeByNamePost"></a>
# **apiContactDetailTypeByNamePost**
> apiContactDetailTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactDetailType() // DPContactDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactDetailType**](DPContactDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactDetailTypeContactAddressesByIdGet"></a>
# **apiContactDetailTypeContactAddressesByIdGet**
> apiContactDetailTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeContactAddressesByIdGet(id, callback);
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

<a name="apiContactDetailTypeContactAddressesByIdPost"></a>
# **apiContactDetailTypeContactAddressesByIdPost**
> apiContactDetailTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

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
apiInstance.apiContactDetailTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiContactDetailTypeContactDetailsByIdGet"></a>
# **apiContactDetailTypeContactDetailsByIdGet**
> apiContactDetailTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeContactDetailsByIdGet(id, callback);
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

<a name="apiContactDetailTypeContactDetailsByIdPost"></a>
# **apiContactDetailTypeContactDetailsByIdPost**
> apiContactDetailTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

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
apiInstance.apiContactDetailTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiContactDetailTypeDeactivateByIdGet"></a>
# **apiContactDetailTypeDeactivateByIdGet**
> apiContactDetailTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeDeactivateByIdGet(id, callback);
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

<a name="apiContactDetailTypeGet"></a>
# **apiContactDetailTypeGet**
> apiContactDetailTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

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
apiInstance.apiContactDetailTypeGet(opts, callback);
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

<a name="apiContactDetailTypeNotesByIdGet"></a>
# **apiContactDetailTypeNotesByIdGet**
> apiContactDetailTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeNotesByIdGet(id, callback);
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

<a name="apiContactDetailTypePost"></a>
# **apiContactDetailTypePost**
> apiContactDetailTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactDetailType() // DPContactDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactDetailType**](DPContactDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactDetailTypePut"></a>
# **apiContactDetailTypePut**
> apiContactDetailTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPContactDetailType() // DPContactDetailType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPContactDetailType**](DPContactDetailType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiContactDetailTypeRelationshipsByIdGet"></a>
# **apiContactDetailTypeRelationshipsByIdGet**
> apiContactDetailTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeRelationshipsByIdGet(id, callback);
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

<a name="apiContactDetailTypeSetAsDefaultByIdGet"></a>
# **apiContactDetailTypeSetAsDefaultByIdGet**
> apiContactDetailTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiContactDetailTypeTranslationsByIdGet"></a>
# **apiContactDetailTypeTranslationsByIdGet**
> apiContactDetailTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ContactDetailTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiContactDetailTypeTranslationsByIdGet(id, callback);
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

