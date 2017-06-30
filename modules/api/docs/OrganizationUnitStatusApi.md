# DirectPortalRestApi.OrganizationUnitStatusApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOrganizationUnitStatusActivateByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusActivateByIdGet) | **GET** /api/OrganizationUnitStatus/Activate/{id} | 
[**apiOrganizationUnitStatusActiveGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusActiveGet) | **GET** /api/OrganizationUnitStatus/Active | 
[**apiOrganizationUnitStatusByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusByIdGet) | **GET** /api/OrganizationUnitStatus/{id} | 
[**apiOrganizationUnitStatusByNameByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusByNameByIdGet) | **GET** /api/OrganizationUnitStatus/ByName/{id} | 
[**apiOrganizationUnitStatusByNamePost**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusByNamePost) | **POST** /api/OrganizationUnitStatus/ByName | 
[**apiOrganizationUnitStatusContactAddressesByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusContactAddressesByIdGet) | **GET** /api/OrganizationUnitStatus/ContactAddresses/{id} | 
[**apiOrganizationUnitStatusContactAddressesByIdPost**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusContactAddressesByIdPost) | **POST** /api/OrganizationUnitStatus/ContactAddresses/{id} | 
[**apiOrganizationUnitStatusContactDetailsByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusContactDetailsByIdGet) | **GET** /api/OrganizationUnitStatus/ContactDetails/{id} | 
[**apiOrganizationUnitStatusContactDetailsByIdPost**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusContactDetailsByIdPost) | **POST** /api/OrganizationUnitStatus/ContactDetails/{id} | 
[**apiOrganizationUnitStatusDeactivateByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusDeactivateByIdGet) | **GET** /api/OrganizationUnitStatus/Deactivate/{id} | 
[**apiOrganizationUnitStatusGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusGet) | **GET** /api/OrganizationUnitStatus | 
[**apiOrganizationUnitStatusNotesByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusNotesByIdGet) | **GET** /api/OrganizationUnitStatus/Notes/{id} | 
[**apiOrganizationUnitStatusPost**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusPost) | **POST** /api/OrganizationUnitStatus | 
[**apiOrganizationUnitStatusPut**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusPut) | **PUT** /api/OrganizationUnitStatus | 
[**apiOrganizationUnitStatusRelationshipsByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusRelationshipsByIdGet) | **GET** /api/OrganizationUnitStatus/Relationships/{id} | 
[**apiOrganizationUnitStatusSetAsDefaultByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusSetAsDefaultByIdGet) | **GET** /api/OrganizationUnitStatus/SetAsDefault/{id} | 
[**apiOrganizationUnitStatusTranslationsByIdGet**](OrganizationUnitStatusApi.md#apiOrganizationUnitStatusTranslationsByIdGet) | **GET** /api/OrganizationUnitStatus/Translations/{id} | 


<a name="apiOrganizationUnitStatusActivateByIdGet"></a>
# **apiOrganizationUnitStatusActivateByIdGet**
> apiOrganizationUnitStatusActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusActivateByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusActiveGet"></a>
# **apiOrganizationUnitStatusActiveGet**
> apiOrganizationUnitStatusActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

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
apiInstance.apiOrganizationUnitStatusActiveGet(opts, callback);
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

<a name="apiOrganizationUnitStatusByIdGet"></a>
# **apiOrganizationUnitStatusByIdGet**
> apiOrganizationUnitStatusByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

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
apiInstance.apiOrganizationUnitStatusByIdGet(id, opts, callback);
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

<a name="apiOrganizationUnitStatusByNameByIdGet"></a>
# **apiOrganizationUnitStatusByNameByIdGet**
> apiOrganizationUnitStatusByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusByNameByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusByNamePost"></a>
# **apiOrganizationUnitStatusByNamePost**
> apiOrganizationUnitStatusByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnitStatus() // DPOrganizationUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnitStatus**](DPOrganizationUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitStatusContactAddressesByIdGet"></a>
# **apiOrganizationUnitStatusContactAddressesByIdGet**
> apiOrganizationUnitStatusContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusContactAddressesByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusContactAddressesByIdPost"></a>
# **apiOrganizationUnitStatusContactAddressesByIdPost**
> apiOrganizationUnitStatusContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

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
apiInstance.apiOrganizationUnitStatusContactAddressesByIdPost(id, opts, callback);
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

<a name="apiOrganizationUnitStatusContactDetailsByIdGet"></a>
# **apiOrganizationUnitStatusContactDetailsByIdGet**
> apiOrganizationUnitStatusContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusContactDetailsByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusContactDetailsByIdPost"></a>
# **apiOrganizationUnitStatusContactDetailsByIdPost**
> apiOrganizationUnitStatusContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

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
apiInstance.apiOrganizationUnitStatusContactDetailsByIdPost(id, opts, callback);
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

<a name="apiOrganizationUnitStatusDeactivateByIdGet"></a>
# **apiOrganizationUnitStatusDeactivateByIdGet**
> apiOrganizationUnitStatusDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusDeactivateByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusGet"></a>
# **apiOrganizationUnitStatusGet**
> apiOrganizationUnitStatusGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

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
apiInstance.apiOrganizationUnitStatusGet(opts, callback);
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

<a name="apiOrganizationUnitStatusNotesByIdGet"></a>
# **apiOrganizationUnitStatusNotesByIdGet**
> apiOrganizationUnitStatusNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusNotesByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusPost"></a>
# **apiOrganizationUnitStatusPost**
> apiOrganizationUnitStatusPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnitStatus() // DPOrganizationUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnitStatus**](DPOrganizationUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitStatusPut"></a>
# **apiOrganizationUnitStatusPut**
> apiOrganizationUnitStatusPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnitStatus() // DPOrganizationUnitStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnitStatus**](DPOrganizationUnitStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitStatusRelationshipsByIdGet"></a>
# **apiOrganizationUnitStatusRelationshipsByIdGet**
> apiOrganizationUnitStatusRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusRelationshipsByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusSetAsDefaultByIdGet"></a>
# **apiOrganizationUnitStatusSetAsDefaultByIdGet**
> apiOrganizationUnitStatusSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusSetAsDefaultByIdGet(id, callback);
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

<a name="apiOrganizationUnitStatusTranslationsByIdGet"></a>
# **apiOrganizationUnitStatusTranslationsByIdGet**
> apiOrganizationUnitStatusTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitStatusTranslationsByIdGet(id, callback);
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

