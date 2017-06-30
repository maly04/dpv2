# DirectPortalRestApi.ReservationTypeApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiReservationTypeActivateByIdGet**](ReservationTypeApi.md#apiReservationTypeActivateByIdGet) | **GET** /api/ReservationType/Activate/{id} | 
[**apiReservationTypeActiveGet**](ReservationTypeApi.md#apiReservationTypeActiveGet) | **GET** /api/ReservationType/Active | 
[**apiReservationTypeByIdGet**](ReservationTypeApi.md#apiReservationTypeByIdGet) | **GET** /api/ReservationType/{id} | 
[**apiReservationTypeByNameByIdGet**](ReservationTypeApi.md#apiReservationTypeByNameByIdGet) | **GET** /api/ReservationType/ByName/{id} | 
[**apiReservationTypeByNamePost**](ReservationTypeApi.md#apiReservationTypeByNamePost) | **POST** /api/ReservationType/ByName | 
[**apiReservationTypeContactAddressesByIdGet**](ReservationTypeApi.md#apiReservationTypeContactAddressesByIdGet) | **GET** /api/ReservationType/ContactAddresses/{id} | 
[**apiReservationTypeContactAddressesByIdPost**](ReservationTypeApi.md#apiReservationTypeContactAddressesByIdPost) | **POST** /api/ReservationType/ContactAddresses/{id} | 
[**apiReservationTypeContactDetailsByIdGet**](ReservationTypeApi.md#apiReservationTypeContactDetailsByIdGet) | **GET** /api/ReservationType/ContactDetails/{id} | 
[**apiReservationTypeContactDetailsByIdPost**](ReservationTypeApi.md#apiReservationTypeContactDetailsByIdPost) | **POST** /api/ReservationType/ContactDetails/{id} | 
[**apiReservationTypeDeactivateByIdGet**](ReservationTypeApi.md#apiReservationTypeDeactivateByIdGet) | **GET** /api/ReservationType/Deactivate/{id} | 
[**apiReservationTypeGet**](ReservationTypeApi.md#apiReservationTypeGet) | **GET** /api/ReservationType | 
[**apiReservationTypeNotesByIdGet**](ReservationTypeApi.md#apiReservationTypeNotesByIdGet) | **GET** /api/ReservationType/Notes/{id} | 
[**apiReservationTypePost**](ReservationTypeApi.md#apiReservationTypePost) | **POST** /api/ReservationType | 
[**apiReservationTypePut**](ReservationTypeApi.md#apiReservationTypePut) | **PUT** /api/ReservationType | 
[**apiReservationTypeRelationshipsByIdGet**](ReservationTypeApi.md#apiReservationTypeRelationshipsByIdGet) | **GET** /api/ReservationType/Relationships/{id} | 
[**apiReservationTypeSetAsDefaultByIdGet**](ReservationTypeApi.md#apiReservationTypeSetAsDefaultByIdGet) | **GET** /api/ReservationType/SetAsDefault/{id} | 
[**apiReservationTypeTranslationsByIdGet**](ReservationTypeApi.md#apiReservationTypeTranslationsByIdGet) | **GET** /api/ReservationType/Translations/{id} | 


<a name="apiReservationTypeActivateByIdGet"></a>
# **apiReservationTypeActivateByIdGet**
> apiReservationTypeActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeActivateByIdGet(id, callback);
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

<a name="apiReservationTypeActiveGet"></a>
# **apiReservationTypeActiveGet**
> apiReservationTypeActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

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
apiInstance.apiReservationTypeActiveGet(opts, callback);
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

<a name="apiReservationTypeByIdGet"></a>
# **apiReservationTypeByIdGet**
> apiReservationTypeByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

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
apiInstance.apiReservationTypeByIdGet(id, opts, callback);
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

<a name="apiReservationTypeByNameByIdGet"></a>
# **apiReservationTypeByNameByIdGet**
> apiReservationTypeByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeByNameByIdGet(id, callback);
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

<a name="apiReservationTypeByNamePost"></a>
# **apiReservationTypeByNamePost**
> apiReservationTypeByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPReservationType() // DPReservationType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPReservationType**](DPReservationType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiReservationTypeContactAddressesByIdGet"></a>
# **apiReservationTypeContactAddressesByIdGet**
> apiReservationTypeContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeContactAddressesByIdGet(id, callback);
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

<a name="apiReservationTypeContactAddressesByIdPost"></a>
# **apiReservationTypeContactAddressesByIdPost**
> apiReservationTypeContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

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
apiInstance.apiReservationTypeContactAddressesByIdPost(id, opts, callback);
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

<a name="apiReservationTypeContactDetailsByIdGet"></a>
# **apiReservationTypeContactDetailsByIdGet**
> apiReservationTypeContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeContactDetailsByIdGet(id, callback);
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

<a name="apiReservationTypeContactDetailsByIdPost"></a>
# **apiReservationTypeContactDetailsByIdPost**
> apiReservationTypeContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

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
apiInstance.apiReservationTypeContactDetailsByIdPost(id, opts, callback);
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

<a name="apiReservationTypeDeactivateByIdGet"></a>
# **apiReservationTypeDeactivateByIdGet**
> apiReservationTypeDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeDeactivateByIdGet(id, callback);
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

<a name="apiReservationTypeGet"></a>
# **apiReservationTypeGet**
> apiReservationTypeGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

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
apiInstance.apiReservationTypeGet(opts, callback);
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

<a name="apiReservationTypeNotesByIdGet"></a>
# **apiReservationTypeNotesByIdGet**
> apiReservationTypeNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeNotesByIdGet(id, callback);
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

<a name="apiReservationTypePost"></a>
# **apiReservationTypePost**
> apiReservationTypePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPReservationType() // DPReservationType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPReservationType**](DPReservationType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiReservationTypePut"></a>
# **apiReservationTypePut**
> apiReservationTypePut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var opts = { 
  'value': new DirectPortalRestApi.DPReservationType() // DPReservationType | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypePut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPReservationType**](DPReservationType.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiReservationTypeRelationshipsByIdGet"></a>
# **apiReservationTypeRelationshipsByIdGet**
> apiReservationTypeRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeRelationshipsByIdGet(id, callback);
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

<a name="apiReservationTypeSetAsDefaultByIdGet"></a>
# **apiReservationTypeSetAsDefaultByIdGet**
> apiReservationTypeSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeSetAsDefaultByIdGet(id, callback);
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

<a name="apiReservationTypeTranslationsByIdGet"></a>
# **apiReservationTypeTranslationsByIdGet**
> apiReservationTypeTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.ReservationTypeApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiReservationTypeTranslationsByIdGet(id, callback);
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

