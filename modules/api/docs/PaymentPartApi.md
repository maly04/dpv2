# DirectPortalRestApi.PaymentPartApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPaymentPartActivateByIdGet**](PaymentPartApi.md#apiPaymentPartActivateByIdGet) | **GET** /api/PaymentPart/Activate/{id} | 
[**apiPaymentPartActiveGet**](PaymentPartApi.md#apiPaymentPartActiveGet) | **GET** /api/PaymentPart/Active | 
[**apiPaymentPartByIdGet**](PaymentPartApi.md#apiPaymentPartByIdGet) | **GET** /api/PaymentPart/{id} | 
[**apiPaymentPartByNameByIdGet**](PaymentPartApi.md#apiPaymentPartByNameByIdGet) | **GET** /api/PaymentPart/ByName/{id} | 
[**apiPaymentPartByNamePost**](PaymentPartApi.md#apiPaymentPartByNamePost) | **POST** /api/PaymentPart/ByName | 
[**apiPaymentPartContactAddressesByIdGet**](PaymentPartApi.md#apiPaymentPartContactAddressesByIdGet) | **GET** /api/PaymentPart/ContactAddresses/{id} | 
[**apiPaymentPartContactAddressesByIdPost**](PaymentPartApi.md#apiPaymentPartContactAddressesByIdPost) | **POST** /api/PaymentPart/ContactAddresses/{id} | 
[**apiPaymentPartContactDetailsByIdGet**](PaymentPartApi.md#apiPaymentPartContactDetailsByIdGet) | **GET** /api/PaymentPart/ContactDetails/{id} | 
[**apiPaymentPartContactDetailsByIdPost**](PaymentPartApi.md#apiPaymentPartContactDetailsByIdPost) | **POST** /api/PaymentPart/ContactDetails/{id} | 
[**apiPaymentPartDeactivateByIdGet**](PaymentPartApi.md#apiPaymentPartDeactivateByIdGet) | **GET** /api/PaymentPart/Deactivate/{id} | 
[**apiPaymentPartGet**](PaymentPartApi.md#apiPaymentPartGet) | **GET** /api/PaymentPart | 
[**apiPaymentPartNotesByIdGet**](PaymentPartApi.md#apiPaymentPartNotesByIdGet) | **GET** /api/PaymentPart/Notes/{id} | 
[**apiPaymentPartPost**](PaymentPartApi.md#apiPaymentPartPost) | **POST** /api/PaymentPart | 
[**apiPaymentPartPut**](PaymentPartApi.md#apiPaymentPartPut) | **PUT** /api/PaymentPart | 
[**apiPaymentPartRelationshipsByIdGet**](PaymentPartApi.md#apiPaymentPartRelationshipsByIdGet) | **GET** /api/PaymentPart/Relationships/{id} | 
[**apiPaymentPartSetAsDefaultByIdGet**](PaymentPartApi.md#apiPaymentPartSetAsDefaultByIdGet) | **GET** /api/PaymentPart/SetAsDefault/{id} | 
[**apiPaymentPartTranslationsByIdGet**](PaymentPartApi.md#apiPaymentPartTranslationsByIdGet) | **GET** /api/PaymentPart/Translations/{id} | 


<a name="apiPaymentPartActivateByIdGet"></a>
# **apiPaymentPartActivateByIdGet**
> apiPaymentPartActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartActivateByIdGet(id, callback);
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

<a name="apiPaymentPartActiveGet"></a>
# **apiPaymentPartActiveGet**
> apiPaymentPartActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

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
apiInstance.apiPaymentPartActiveGet(opts, callback);
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

<a name="apiPaymentPartByIdGet"></a>
# **apiPaymentPartByIdGet**
> apiPaymentPartByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

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
apiInstance.apiPaymentPartByIdGet(id, opts, callback);
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

<a name="apiPaymentPartByNameByIdGet"></a>
# **apiPaymentPartByNameByIdGet**
> apiPaymentPartByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartByNameByIdGet(id, callback);
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

<a name="apiPaymentPartByNamePost"></a>
# **apiPaymentPartByNamePost**
> apiPaymentPartByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentPart() // DPPaymentPart | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentPart**](DPPaymentPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentPartContactAddressesByIdGet"></a>
# **apiPaymentPartContactAddressesByIdGet**
> apiPaymentPartContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartContactAddressesByIdGet(id, callback);
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

<a name="apiPaymentPartContactAddressesByIdPost"></a>
# **apiPaymentPartContactAddressesByIdPost**
> apiPaymentPartContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

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
apiInstance.apiPaymentPartContactAddressesByIdPost(id, opts, callback);
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

<a name="apiPaymentPartContactDetailsByIdGet"></a>
# **apiPaymentPartContactDetailsByIdGet**
> apiPaymentPartContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartContactDetailsByIdGet(id, callback);
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

<a name="apiPaymentPartContactDetailsByIdPost"></a>
# **apiPaymentPartContactDetailsByIdPost**
> apiPaymentPartContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

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
apiInstance.apiPaymentPartContactDetailsByIdPost(id, opts, callback);
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

<a name="apiPaymentPartDeactivateByIdGet"></a>
# **apiPaymentPartDeactivateByIdGet**
> apiPaymentPartDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartDeactivateByIdGet(id, callback);
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

<a name="apiPaymentPartGet"></a>
# **apiPaymentPartGet**
> apiPaymentPartGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

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
apiInstance.apiPaymentPartGet(opts, callback);
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

<a name="apiPaymentPartNotesByIdGet"></a>
# **apiPaymentPartNotesByIdGet**
> apiPaymentPartNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartNotesByIdGet(id, callback);
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

<a name="apiPaymentPartPost"></a>
# **apiPaymentPartPost**
> apiPaymentPartPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentPart() // DPPaymentPart | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentPart**](DPPaymentPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentPartPut"></a>
# **apiPaymentPartPut**
> apiPaymentPartPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentPart() // DPPaymentPart | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentPart**](DPPaymentPart.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentPartRelationshipsByIdGet"></a>
# **apiPaymentPartRelationshipsByIdGet**
> apiPaymentPartRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartRelationshipsByIdGet(id, callback);
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

<a name="apiPaymentPartSetAsDefaultByIdGet"></a>
# **apiPaymentPartSetAsDefaultByIdGet**
> apiPaymentPartSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartSetAsDefaultByIdGet(id, callback);
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

<a name="apiPaymentPartTranslationsByIdGet"></a>
# **apiPaymentPartTranslationsByIdGet**
> apiPaymentPartTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentPartApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentPartTranslationsByIdGet(id, callback);
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

