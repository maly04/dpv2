# DirectPortalRestApi.PersonPrefixApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPersonPrefixActivateByIdGet**](PersonPrefixApi.md#apiPersonPrefixActivateByIdGet) | **GET** /api/PersonPrefix/Activate/{id} | 
[**apiPersonPrefixActiveGet**](PersonPrefixApi.md#apiPersonPrefixActiveGet) | **GET** /api/PersonPrefix/Active | 
[**apiPersonPrefixByIdGet**](PersonPrefixApi.md#apiPersonPrefixByIdGet) | **GET** /api/PersonPrefix/{id} | 
[**apiPersonPrefixByNameByIdGet**](PersonPrefixApi.md#apiPersonPrefixByNameByIdGet) | **GET** /api/PersonPrefix/ByName/{id} | 
[**apiPersonPrefixByNamePost**](PersonPrefixApi.md#apiPersonPrefixByNamePost) | **POST** /api/PersonPrefix/ByName | 
[**apiPersonPrefixContactAddressesByIdGet**](PersonPrefixApi.md#apiPersonPrefixContactAddressesByIdGet) | **GET** /api/PersonPrefix/ContactAddresses/{id} | 
[**apiPersonPrefixContactAddressesByIdPost**](PersonPrefixApi.md#apiPersonPrefixContactAddressesByIdPost) | **POST** /api/PersonPrefix/ContactAddresses/{id} | 
[**apiPersonPrefixContactDetailsByIdGet**](PersonPrefixApi.md#apiPersonPrefixContactDetailsByIdGet) | **GET** /api/PersonPrefix/ContactDetails/{id} | 
[**apiPersonPrefixContactDetailsByIdPost**](PersonPrefixApi.md#apiPersonPrefixContactDetailsByIdPost) | **POST** /api/PersonPrefix/ContactDetails/{id} | 
[**apiPersonPrefixDeactivateByIdGet**](PersonPrefixApi.md#apiPersonPrefixDeactivateByIdGet) | **GET** /api/PersonPrefix/Deactivate/{id} | 
[**apiPersonPrefixGet**](PersonPrefixApi.md#apiPersonPrefixGet) | **GET** /api/PersonPrefix | 
[**apiPersonPrefixNotesByIdGet**](PersonPrefixApi.md#apiPersonPrefixNotesByIdGet) | **GET** /api/PersonPrefix/Notes/{id} | 
[**apiPersonPrefixPost**](PersonPrefixApi.md#apiPersonPrefixPost) | **POST** /api/PersonPrefix | 
[**apiPersonPrefixPut**](PersonPrefixApi.md#apiPersonPrefixPut) | **PUT** /api/PersonPrefix | 
[**apiPersonPrefixRelationshipsByIdGet**](PersonPrefixApi.md#apiPersonPrefixRelationshipsByIdGet) | **GET** /api/PersonPrefix/Relationships/{id} | 
[**apiPersonPrefixSetAsDefaultByIdGet**](PersonPrefixApi.md#apiPersonPrefixSetAsDefaultByIdGet) | **GET** /api/PersonPrefix/SetAsDefault/{id} | 
[**apiPersonPrefixTranslationsByIdGet**](PersonPrefixApi.md#apiPersonPrefixTranslationsByIdGet) | **GET** /api/PersonPrefix/Translations/{id} | 


<a name="apiPersonPrefixActivateByIdGet"></a>
# **apiPersonPrefixActivateByIdGet**
> apiPersonPrefixActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixActivateByIdGet(id, callback);
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

<a name="apiPersonPrefixActiveGet"></a>
# **apiPersonPrefixActiveGet**
> apiPersonPrefixActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

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
apiInstance.apiPersonPrefixActiveGet(opts, callback);
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

<a name="apiPersonPrefixByIdGet"></a>
# **apiPersonPrefixByIdGet**
> apiPersonPrefixByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

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
apiInstance.apiPersonPrefixByIdGet(id, opts, callback);
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

<a name="apiPersonPrefixByNameByIdGet"></a>
# **apiPersonPrefixByNameByIdGet**
> apiPersonPrefixByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixByNameByIdGet(id, callback);
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

<a name="apiPersonPrefixByNamePost"></a>
# **apiPersonPrefixByNamePost**
> apiPersonPrefixByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPersonPrefix() // DPPersonPrefix | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPersonPrefix**](DPPersonPrefix.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPersonPrefixContactAddressesByIdGet"></a>
# **apiPersonPrefixContactAddressesByIdGet**
> apiPersonPrefixContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixContactAddressesByIdGet(id, callback);
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

<a name="apiPersonPrefixContactAddressesByIdPost"></a>
# **apiPersonPrefixContactAddressesByIdPost**
> apiPersonPrefixContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

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
apiInstance.apiPersonPrefixContactAddressesByIdPost(id, opts, callback);
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

<a name="apiPersonPrefixContactDetailsByIdGet"></a>
# **apiPersonPrefixContactDetailsByIdGet**
> apiPersonPrefixContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixContactDetailsByIdGet(id, callback);
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

<a name="apiPersonPrefixContactDetailsByIdPost"></a>
# **apiPersonPrefixContactDetailsByIdPost**
> apiPersonPrefixContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

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
apiInstance.apiPersonPrefixContactDetailsByIdPost(id, opts, callback);
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

<a name="apiPersonPrefixDeactivateByIdGet"></a>
# **apiPersonPrefixDeactivateByIdGet**
> apiPersonPrefixDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixDeactivateByIdGet(id, callback);
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

<a name="apiPersonPrefixGet"></a>
# **apiPersonPrefixGet**
> apiPersonPrefixGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

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
apiInstance.apiPersonPrefixGet(opts, callback);
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

<a name="apiPersonPrefixNotesByIdGet"></a>
# **apiPersonPrefixNotesByIdGet**
> apiPersonPrefixNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixNotesByIdGet(id, callback);
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

<a name="apiPersonPrefixPost"></a>
# **apiPersonPrefixPost**
> apiPersonPrefixPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPersonPrefix() // DPPersonPrefix | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPersonPrefix**](DPPersonPrefix.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPersonPrefixPut"></a>
# **apiPersonPrefixPut**
> apiPersonPrefixPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPersonPrefix() // DPPersonPrefix | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPersonPrefix**](DPPersonPrefix.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPersonPrefixRelationshipsByIdGet"></a>
# **apiPersonPrefixRelationshipsByIdGet**
> apiPersonPrefixRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixRelationshipsByIdGet(id, callback);
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

<a name="apiPersonPrefixSetAsDefaultByIdGet"></a>
# **apiPersonPrefixSetAsDefaultByIdGet**
> apiPersonPrefixSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixSetAsDefaultByIdGet(id, callback);
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

<a name="apiPersonPrefixTranslationsByIdGet"></a>
# **apiPersonPrefixTranslationsByIdGet**
> apiPersonPrefixTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PersonPrefixApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPersonPrefixTranslationsByIdGet(id, callback);
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

