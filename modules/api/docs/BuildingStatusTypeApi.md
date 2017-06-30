# DirectPortalRestApi.BuildingStatusTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBuildingStatusTypeActivateByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeActivateByIdGet) | **GET** /api/BuildingStatusType/Activate/{id} | 
[**apiBuildingStatusTypeActiveGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeActiveGet) | **GET** /api/BuildingStatusType/Active | 
[**apiBuildingStatusTypeByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeByIdGet) | **GET** /api/BuildingStatusType/{id} | 
[**apiBuildingStatusTypeByNameByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeByNameByIdGet) | **GET** /api/BuildingStatusType/ByName/{id} | 
[**apiBuildingStatusTypeByNamePost**](BuildingStatusTypeApi.md#apiBuildingStatusTypeByNamePost) | **POST** /api/BuildingStatusType/ByName | 
[**apiBuildingStatusTypeContactAddressesByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeContactAddressesByIdGet) | **GET** /api/BuildingStatusType/ContactAddresses/{id} | 
[**apiBuildingStatusTypeContactAddressesByIdPost**](BuildingStatusTypeApi.md#apiBuildingStatusTypeContactAddressesByIdPost) | **POST** /api/BuildingStatusType/ContactAddresses/{id} | 
[**apiBuildingStatusTypeContactDetailsByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeContactDetailsByIdGet) | **GET** /api/BuildingStatusType/ContactDetails/{id} | 
[**apiBuildingStatusTypeContactDetailsByIdPost**](BuildingStatusTypeApi.md#apiBuildingStatusTypeContactDetailsByIdPost) | **POST** /api/BuildingStatusType/ContactDetails/{id} | 
[**apiBuildingStatusTypeDeactivateByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeDeactivateByIdGet) | **GET** /api/BuildingStatusType/Deactivate/{id} | 
[**apiBuildingStatusTypeGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeGet) | **GET** /api/BuildingStatusType | 
[**apiBuildingStatusTypeNotesByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeNotesByIdGet) | **GET** /api/BuildingStatusType/Notes/{id} | 
[**apiBuildingStatusTypePost**](BuildingStatusTypeApi.md#apiBuildingStatusTypePost) | **POST** /api/BuildingStatusType | 
[**apiBuildingStatusTypePut**](BuildingStatusTypeApi.md#apiBuildingStatusTypePut) | **PUT** /api/BuildingStatusType | 
[**apiBuildingStatusTypeRelationshipsByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeRelationshipsByIdGet) | **GET** /api/BuildingStatusType/Relationships/{id} | 
[**apiBuildingStatusTypeSetAsDefaultByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeSetAsDefaultByIdGet) | **GET** /api/BuildingStatusType/SetAsDefault/{id} | 
[**apiBuildingStatusTypeTranslationsByIdGet**](BuildingStatusTypeApi.md#apiBuildingStatusTypeTranslationsByIdGet) | **GET** /api/BuildingStatusType/Translations/{id} | 


<a name="apiBuildingStatusTypeActivateByIdGet"></a>
# **apiBuildingStatusTypeActivateByIdGet**
> apiBuildingStatusTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeActivateByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeActiveGet"></a>
# **apiBuildingStatusTypeActiveGet**
> apiBuildingStatusTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

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
apiInstance.apiBuildingStatusTypeActiveGet(opts, callback);
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

<a name="apiBuildingStatusTypeByIdGet"></a>
# **apiBuildingStatusTypeByIdGet**
> apiBuildingStatusTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

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
apiInstance.apiBuildingStatusTypeByIdGet(id, opts, callback);
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

<a name="apiBuildingStatusTypeByNameByIdGet"></a>
# **apiBuildingStatusTypeByNameByIdGet**
> apiBuildingStatusTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeByNameByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeByNamePost"></a>
# **apiBuildingStatusTypeByNamePost**
> apiBuildingStatusTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatusType() // DPBuildingStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatusType**](DPBuildingStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusTypeContactAddressesByIdGet"></a>
# **apiBuildingStatusTypeContactAddressesByIdGet**
> apiBuildingStatusTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeContactAddressesByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeContactAddressesByIdPost"></a>
# **apiBuildingStatusTypeContactAddressesByIdPost**
> apiBuildingStatusTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

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
apiInstance.apiBuildingStatusTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiBuildingStatusTypeContactDetailsByIdGet"></a>
# **apiBuildingStatusTypeContactDetailsByIdGet**
> apiBuildingStatusTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeContactDetailsByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeContactDetailsByIdPost"></a>
# **apiBuildingStatusTypeContactDetailsByIdPost**
> apiBuildingStatusTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

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
apiInstance.apiBuildingStatusTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiBuildingStatusTypeDeactivateByIdGet"></a>
# **apiBuildingStatusTypeDeactivateByIdGet**
> apiBuildingStatusTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeDeactivateByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeGet"></a>
# **apiBuildingStatusTypeGet**
> apiBuildingStatusTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

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
apiInstance.apiBuildingStatusTypeGet(opts, callback);
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

<a name="apiBuildingStatusTypeNotesByIdGet"></a>
# **apiBuildingStatusTypeNotesByIdGet**
> apiBuildingStatusTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeNotesByIdGet(id, callback);
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

<a name="apiBuildingStatusTypePost"></a>
# **apiBuildingStatusTypePost**
> apiBuildingStatusTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatusType() // DPBuildingStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatusType**](DPBuildingStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusTypePut"></a>
# **apiBuildingStatusTypePut**
> apiBuildingStatusTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingStatusType() // DPBuildingStatusType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingStatusType**](DPBuildingStatusType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingStatusTypeRelationshipsByIdGet"></a>
# **apiBuildingStatusTypeRelationshipsByIdGet**
> apiBuildingStatusTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeRelationshipsByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeSetAsDefaultByIdGet"></a>
# **apiBuildingStatusTypeSetAsDefaultByIdGet**
> apiBuildingStatusTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiBuildingStatusTypeTranslationsByIdGet"></a>
# **apiBuildingStatusTypeTranslationsByIdGet**
> apiBuildingStatusTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingStatusTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingStatusTypeTranslationsByIdGet(id, callback);
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

