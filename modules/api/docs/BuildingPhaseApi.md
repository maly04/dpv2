# DirectPortalRestApi.BuildingPhaseApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiBuildingPhaseActivateByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseActivateByIdGet) | **GET** /api/BuildingPhase/Activate/{id} | 
[**apiBuildingPhaseActiveGet**](BuildingPhaseApi.md#apiBuildingPhaseActiveGet) | **GET** /api/BuildingPhase/Active | 
[**apiBuildingPhaseByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseByIdGet) | **GET** /api/BuildingPhase/{id} | 
[**apiBuildingPhaseByNameByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseByNameByIdGet) | **GET** /api/BuildingPhase/ByName/{id} | 
[**apiBuildingPhaseByNamePost**](BuildingPhaseApi.md#apiBuildingPhaseByNamePost) | **POST** /api/BuildingPhase/ByName | 
[**apiBuildingPhaseContactAddressesByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseContactAddressesByIdGet) | **GET** /api/BuildingPhase/ContactAddresses/{id} | 
[**apiBuildingPhaseContactAddressesByIdPost**](BuildingPhaseApi.md#apiBuildingPhaseContactAddressesByIdPost) | **POST** /api/BuildingPhase/ContactAddresses/{id} | 
[**apiBuildingPhaseContactDetailsByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseContactDetailsByIdGet) | **GET** /api/BuildingPhase/ContactDetails/{id} | 
[**apiBuildingPhaseContactDetailsByIdPost**](BuildingPhaseApi.md#apiBuildingPhaseContactDetailsByIdPost) | **POST** /api/BuildingPhase/ContactDetails/{id} | 
[**apiBuildingPhaseDeactivateByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseDeactivateByIdGet) | **GET** /api/BuildingPhase/Deactivate/{id} | 
[**apiBuildingPhaseGet**](BuildingPhaseApi.md#apiBuildingPhaseGet) | **GET** /api/BuildingPhase | 
[**apiBuildingPhaseNotesByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseNotesByIdGet) | **GET** /api/BuildingPhase/Notes/{id} | 
[**apiBuildingPhasePost**](BuildingPhaseApi.md#apiBuildingPhasePost) | **POST** /api/BuildingPhase | 
[**apiBuildingPhasePut**](BuildingPhaseApi.md#apiBuildingPhasePut) | **PUT** /api/BuildingPhase | 
[**apiBuildingPhaseRelationshipsByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseRelationshipsByIdGet) | **GET** /api/BuildingPhase/Relationships/{id} | 
[**apiBuildingPhaseSetAsDefaultByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseSetAsDefaultByIdGet) | **GET** /api/BuildingPhase/SetAsDefault/{id} | 
[**apiBuildingPhaseTranslationsByIdGet**](BuildingPhaseApi.md#apiBuildingPhaseTranslationsByIdGet) | **GET** /api/BuildingPhase/Translations/{id} | 


<a name="apiBuildingPhaseActivateByIdGet"></a>
# **apiBuildingPhaseActivateByIdGet**
> apiBuildingPhaseActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseActivateByIdGet(id, callback);
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

<a name="apiBuildingPhaseActiveGet"></a>
# **apiBuildingPhaseActiveGet**
> apiBuildingPhaseActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

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
apiInstance.apiBuildingPhaseActiveGet(opts, callback);
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

<a name="apiBuildingPhaseByIdGet"></a>
# **apiBuildingPhaseByIdGet**
> apiBuildingPhaseByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

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
apiInstance.apiBuildingPhaseByIdGet(id, opts, callback);
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

<a name="apiBuildingPhaseByNameByIdGet"></a>
# **apiBuildingPhaseByNameByIdGet**
> apiBuildingPhaseByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseByNameByIdGet(id, callback);
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

<a name="apiBuildingPhaseByNamePost"></a>
# **apiBuildingPhaseByNamePost**
> apiBuildingPhaseByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingPhase() // DPBuildingPhase | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingPhase**](DPBuildingPhase.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingPhaseContactAddressesByIdGet"></a>
# **apiBuildingPhaseContactAddressesByIdGet**
> apiBuildingPhaseContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseContactAddressesByIdGet(id, callback);
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

<a name="apiBuildingPhaseContactAddressesByIdPost"></a>
# **apiBuildingPhaseContactAddressesByIdPost**
> apiBuildingPhaseContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

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
apiInstance.apiBuildingPhaseContactAddressesByIdPost(id, opts, callback);
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

<a name="apiBuildingPhaseContactDetailsByIdGet"></a>
# **apiBuildingPhaseContactDetailsByIdGet**
> apiBuildingPhaseContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseContactDetailsByIdGet(id, callback);
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

<a name="apiBuildingPhaseContactDetailsByIdPost"></a>
# **apiBuildingPhaseContactDetailsByIdPost**
> apiBuildingPhaseContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

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
apiInstance.apiBuildingPhaseContactDetailsByIdPost(id, opts, callback);
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

<a name="apiBuildingPhaseDeactivateByIdGet"></a>
# **apiBuildingPhaseDeactivateByIdGet**
> apiBuildingPhaseDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseDeactivateByIdGet(id, callback);
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

<a name="apiBuildingPhaseGet"></a>
# **apiBuildingPhaseGet**
> apiBuildingPhaseGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

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
apiInstance.apiBuildingPhaseGet(opts, callback);
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

<a name="apiBuildingPhaseNotesByIdGet"></a>
# **apiBuildingPhaseNotesByIdGet**
> apiBuildingPhaseNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseNotesByIdGet(id, callback);
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

<a name="apiBuildingPhasePost"></a>
# **apiBuildingPhasePost**
> apiBuildingPhasePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingPhase() // DPBuildingPhase | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhasePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingPhase**](DPBuildingPhase.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingPhasePut"></a>
# **apiBuildingPhasePut**
> apiBuildingPhasePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var opts = { 
  'value': new DirectPortalRestApi.DPBuildingPhase() // DPBuildingPhase | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhasePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPBuildingPhase**](DPBuildingPhase.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiBuildingPhaseRelationshipsByIdGet"></a>
# **apiBuildingPhaseRelationshipsByIdGet**
> apiBuildingPhaseRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseRelationshipsByIdGet(id, callback);
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

<a name="apiBuildingPhaseSetAsDefaultByIdGet"></a>
# **apiBuildingPhaseSetAsDefaultByIdGet**
> apiBuildingPhaseSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseSetAsDefaultByIdGet(id, callback);
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

<a name="apiBuildingPhaseTranslationsByIdGet"></a>
# **apiBuildingPhaseTranslationsByIdGet**
> apiBuildingPhaseTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.BuildingPhaseApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiBuildingPhaseTranslationsByIdGet(id, callback);
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

