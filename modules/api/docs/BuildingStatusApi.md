# DirectPortalRestApi.BuildingStatusApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBuildingStatusActivateByIdGet**](BuildingStatusApi.md#apiBuildingStatusActivateByIdGet) | **GET** /api/BuildingStatus/Activate/{id} | 
[**apiBuildingStatusActiveGet**](BuildingStatusApi.md#apiBuildingStatusActiveGet) | **GET** /api/BuildingStatus/Active | 
[**apiBuildingStatusByIdGet**](BuildingStatusApi.md#apiBuildingStatusByIdGet) | **GET** /api/BuildingStatus/{id} | 
[**apiBuildingStatusByNameByIdGet**](BuildingStatusApi.md#apiBuildingStatusByNameByIdGet) | **GET** /api/BuildingStatus/ByName/{id} | 
[**apiBuildingStatusByNamePost**](BuildingStatusApi.md#apiBuildingStatusByNamePost) | **POST** /api/BuildingStatus/ByName | 
[**apiBuildingStatusContactAddressesByIdGet**](BuildingStatusApi.md#apiBuildingStatusContactAddressesByIdGet) | **GET** /api/BuildingStatus/ContactAddresses/{id} | 
[**apiBuildingStatusContactAddressesByIdPost**](BuildingStatusApi.md#apiBuildingStatusContactAddressesByIdPost) | **POST** /api/BuildingStatus/ContactAddresses/{id} | 
[**apiBuildingStatusContactDetailsByIdGet**](BuildingStatusApi.md#apiBuildingStatusContactDetailsByIdGet) | **GET** /api/BuildingStatus/ContactDetails/{id} | 
[**apiBuildingStatusContactDetailsByIdPost**](BuildingStatusApi.md#apiBuildingStatusContactDetailsByIdPost) | **POST** /api/BuildingStatus/ContactDetails/{id} | 
[**apiBuildingStatusDeactivateByIdGet**](BuildingStatusApi.md#apiBuildingStatusDeactivateByIdGet) | **GET** /api/BuildingStatus/Deactivate/{id} | 
[**apiBuildingStatusGet**](BuildingStatusApi.md#apiBuildingStatusGet) | **GET** /api/BuildingStatus | 
[**apiBuildingStatusNotesByIdGet**](BuildingStatusApi.md#apiBuildingStatusNotesByIdGet) | **GET** /api/BuildingStatus/Notes/{id} | 
[**apiBuildingStatusPost**](BuildingStatusApi.md#apiBuildingStatusPost) | **POST** /api/BuildingStatus | 
[**apiBuildingStatusPut**](BuildingStatusApi.md#apiBuildingStatusPut) | **PUT** /api/BuildingStatus | 
[**apiBuildingStatusRelationshipsByIdGet**](BuildingStatusApi.md#apiBuildingStatusRelationshipsByIdGet) | **GET** /api/BuildingStatus/Relationships/{id} | 
[**apiBuildingStatusSetAsDefaultByIdGet**](BuildingStatusApi.md#apiBuildingStatusSetAsDefaultByIdGet) | **GET** /api/BuildingStatus/SetAsDefault/{id} | 
[**apiBuildingStatusTranslationsByIdGet**](BuildingStatusApi.md#apiBuildingStatusTranslationsByIdGet) | **GET** /api/BuildingStatus/Translations/{id} | 


<a name="apiBuildingStatusActivateByIdGet"></a>
# **apiBuildingStatusActivateByIdGet**
> apiBuildingStatusActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusActivateByIdGet(id, callback);
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

<a name="apiBuildingStatusActiveGet"></a>
# **apiBuildingStatusActiveGet**
> apiBuildingStatusActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

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
apiInstance.apiBuildingStatusActiveGet(opts, callback);
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

<a name="apiBuildingStatusByIdGet"></a>
# **apiBuildingStatusByIdGet**
> apiBuildingStatusByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

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
apiInstance.apiBuildingStatusByIdGet(id, opts, callback);
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

<a name="apiBuildingStatusByNameByIdGet"></a>
# **apiBuildingStatusByNameByIdGet**
> apiBuildingStatusByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusByNameByIdGet(id, callback);
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

<a name="apiBuildingStatusByNamePost"></a>
# **apiBuildingStatusByNamePost**
> apiBuildingStatusByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatus() // DPBuildingStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatus**](DPBuildingStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusContactAddressesByIdGet"></a>
# **apiBuildingStatusContactAddressesByIdGet**
> apiBuildingStatusContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusContactAddressesByIdGet(id, callback);
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

<a name="apiBuildingStatusContactAddressesByIdPost"></a>
# **apiBuildingStatusContactAddressesByIdPost**
> apiBuildingStatusContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

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
apiInstance.apiBuildingStatusContactAddressesByIdPost(id, opts, callback);
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

<a name="apiBuildingStatusContactDetailsByIdGet"></a>
# **apiBuildingStatusContactDetailsByIdGet**
> apiBuildingStatusContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusContactDetailsByIdGet(id, callback);
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

<a name="apiBuildingStatusContactDetailsByIdPost"></a>
# **apiBuildingStatusContactDetailsByIdPost**
> apiBuildingStatusContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

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
apiInstance.apiBuildingStatusContactDetailsByIdPost(id, opts, callback);
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

<a name="apiBuildingStatusDeactivateByIdGet"></a>
# **apiBuildingStatusDeactivateByIdGet**
> apiBuildingStatusDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusDeactivateByIdGet(id, callback);
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

<a name="apiBuildingStatusGet"></a>
# **apiBuildingStatusGet**
> apiBuildingStatusGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

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
apiInstance.apiBuildingStatusGet(opts, callback);
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

<a name="apiBuildingStatusNotesByIdGet"></a>
# **apiBuildingStatusNotesByIdGet**
> apiBuildingStatusNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusNotesByIdGet(id, callback);
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

<a name="apiBuildingStatusPost"></a>
# **apiBuildingStatusPost**
> apiBuildingStatusPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatus() // DPBuildingStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatus**](DPBuildingStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusPut"></a>
# **apiBuildingStatusPut**
> apiBuildingStatusPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatus() // DPBuildingStatus | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatus**](DPBuildingStatus.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusRelationshipsByIdGet"></a>
# **apiBuildingStatusRelationshipsByIdGet**
> apiBuildingStatusRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusRelationshipsByIdGet(id, callback);
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

<a name="apiBuildingStatusSetAsDefaultByIdGet"></a>
# **apiBuildingStatusSetAsDefaultByIdGet**
> apiBuildingStatusSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusSetAsDefaultByIdGet(id, callback);
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

<a name="apiBuildingStatusTranslationsByIdGet"></a>
# **apiBuildingStatusTranslationsByIdGet**
> apiBuildingStatusTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTranslationsByIdGet(id, callback);
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

