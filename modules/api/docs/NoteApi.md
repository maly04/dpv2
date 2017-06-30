# DirectPortalRestApi.NoteApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiNoteActivateByIdGet**](NoteApi.md#apiNoteActivateByIdGet) | **GET** /api/Note/Activate/{id} | 
[**apiNoteActiveGet**](NoteApi.md#apiNoteActiveGet) | **GET** /api/Note/Active | 
[**apiNoteByIdGet**](NoteApi.md#apiNoteByIdGet) | **GET** /api/Note/{id} | 
[**apiNoteByNameByIdGet**](NoteApi.md#apiNoteByNameByIdGet) | **GET** /api/Note/ByName/{id} | 
[**apiNoteByNamePost**](NoteApi.md#apiNoteByNamePost) | **POST** /api/Note/ByName | 
[**apiNoteContactAddressesByIdGet**](NoteApi.md#apiNoteContactAddressesByIdGet) | **GET** /api/Note/ContactAddresses/{id} | 
[**apiNoteContactAddressesByIdPost**](NoteApi.md#apiNoteContactAddressesByIdPost) | **POST** /api/Note/ContactAddresses/{id} | 
[**apiNoteContactDetailsByIdGet**](NoteApi.md#apiNoteContactDetailsByIdGet) | **GET** /api/Note/ContactDetails/{id} | 
[**apiNoteContactDetailsByIdPost**](NoteApi.md#apiNoteContactDetailsByIdPost) | **POST** /api/Note/ContactDetails/{id} | 
[**apiNoteDeactivateByIdGet**](NoteApi.md#apiNoteDeactivateByIdGet) | **GET** /api/Note/Deactivate/{id} | 
[**apiNoteGet**](NoteApi.md#apiNoteGet) | **GET** /api/Note | 
[**apiNoteNotesByIdGet**](NoteApi.md#apiNoteNotesByIdGet) | **GET** /api/Note/Notes/{id} | 
[**apiNotePost**](NoteApi.md#apiNotePost) | **POST** /api/Note | 
[**apiNotePut**](NoteApi.md#apiNotePut) | **PUT** /api/Note | 
[**apiNoteRelationshipsByIdGet**](NoteApi.md#apiNoteRelationshipsByIdGet) | **GET** /api/Note/Relationships/{id} | 
[**apiNoteSetAsDefaultByIdGet**](NoteApi.md#apiNoteSetAsDefaultByIdGet) | **GET** /api/Note/SetAsDefault/{id} | 
[**apiNoteTranslationsByIdGet**](NoteApi.md#apiNoteTranslationsByIdGet) | **GET** /api/Note/Translations/{id} | 


<a name="apiNoteActivateByIdGet"></a>
# **apiNoteActivateByIdGet**
> apiNoteActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteActivateByIdGet(id, callback);
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

<a name="apiNoteActiveGet"></a>
# **apiNoteActiveGet**
> apiNoteActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

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
apiInstance.apiNoteActiveGet(opts, callback);
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

<a name="apiNoteByIdGet"></a>
# **apiNoteByIdGet**
> apiNoteByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

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
apiInstance.apiNoteByIdGet(id, opts, callback);
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

<a name="apiNoteByNameByIdGet"></a>
# **apiNoteByNameByIdGet**
> apiNoteByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteByNameByIdGet(id, callback);
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

<a name="apiNoteByNamePost"></a>
# **apiNoteByNamePost**
> apiNoteByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var opts = { 
  'value': new DirectPortalRestApi.DPNote() // DPNote | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPNote**](DPNote.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiNoteContactAddressesByIdGet"></a>
# **apiNoteContactAddressesByIdGet**
> apiNoteContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteContactAddressesByIdGet(id, callback);
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

<a name="apiNoteContactAddressesByIdPost"></a>
# **apiNoteContactAddressesByIdPost**
> apiNoteContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

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
apiInstance.apiNoteContactAddressesByIdPost(id, opts, callback);
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

<a name="apiNoteContactDetailsByIdGet"></a>
# **apiNoteContactDetailsByIdGet**
> apiNoteContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteContactDetailsByIdGet(id, callback);
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

<a name="apiNoteContactDetailsByIdPost"></a>
# **apiNoteContactDetailsByIdPost**
> apiNoteContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

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
apiInstance.apiNoteContactDetailsByIdPost(id, opts, callback);
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

<a name="apiNoteDeactivateByIdGet"></a>
# **apiNoteDeactivateByIdGet**
> apiNoteDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteDeactivateByIdGet(id, callback);
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

<a name="apiNoteGet"></a>
# **apiNoteGet**
> apiNoteGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

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
apiInstance.apiNoteGet(opts, callback);
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

<a name="apiNoteNotesByIdGet"></a>
# **apiNoteNotesByIdGet**
> apiNoteNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteNotesByIdGet(id, callback);
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

<a name="apiNotePost"></a>
# **apiNotePost**
> apiNotePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var opts = { 
  'value': new DirectPortalRestApi.DPNote() // DPNote | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNotePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPNote**](DPNote.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiNotePut"></a>
# **apiNotePut**
> apiNotePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var opts = { 
  'value': new DirectPortalRestApi.DPNote() // DPNote | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNotePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPNote**](DPNote.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiNoteRelationshipsByIdGet"></a>
# **apiNoteRelationshipsByIdGet**
> apiNoteRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteRelationshipsByIdGet(id, callback);
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

<a name="apiNoteSetAsDefaultByIdGet"></a>
# **apiNoteSetAsDefaultByIdGet**
> apiNoteSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteSetAsDefaultByIdGet(id, callback);
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

<a name="apiNoteTranslationsByIdGet"></a>
# **apiNoteTranslationsByIdGet**
> apiNoteTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.NoteApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiNoteTranslationsByIdGet(id, callback);
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

