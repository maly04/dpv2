# DirectPortalRestApi.PaymentMethodApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPaymentMethodActivateByIdGet**](PaymentMethodApi.md#apiPaymentMethodActivateByIdGet) | **GET** /api/PaymentMethod/Activate/{id} | 
[**apiPaymentMethodActiveGet**](PaymentMethodApi.md#apiPaymentMethodActiveGet) | **GET** /api/PaymentMethod/Active | 
[**apiPaymentMethodByIdGet**](PaymentMethodApi.md#apiPaymentMethodByIdGet) | **GET** /api/PaymentMethod/{id} | 
[**apiPaymentMethodByNameByIdGet**](PaymentMethodApi.md#apiPaymentMethodByNameByIdGet) | **GET** /api/PaymentMethod/ByName/{id} | 
[**apiPaymentMethodByNamePost**](PaymentMethodApi.md#apiPaymentMethodByNamePost) | **POST** /api/PaymentMethod/ByName | 
[**apiPaymentMethodContactAddressesByIdGet**](PaymentMethodApi.md#apiPaymentMethodContactAddressesByIdGet) | **GET** /api/PaymentMethod/ContactAddresses/{id} | 
[**apiPaymentMethodContactAddressesByIdPost**](PaymentMethodApi.md#apiPaymentMethodContactAddressesByIdPost) | **POST** /api/PaymentMethod/ContactAddresses/{id} | 
[**apiPaymentMethodContactDetailsByIdGet**](PaymentMethodApi.md#apiPaymentMethodContactDetailsByIdGet) | **GET** /api/PaymentMethod/ContactDetails/{id} | 
[**apiPaymentMethodContactDetailsByIdPost**](PaymentMethodApi.md#apiPaymentMethodContactDetailsByIdPost) | **POST** /api/PaymentMethod/ContactDetails/{id} | 
[**apiPaymentMethodDeactivateByIdGet**](PaymentMethodApi.md#apiPaymentMethodDeactivateByIdGet) | **GET** /api/PaymentMethod/Deactivate/{id} | 
[**apiPaymentMethodGet**](PaymentMethodApi.md#apiPaymentMethodGet) | **GET** /api/PaymentMethod | 
[**apiPaymentMethodNotesByIdGet**](PaymentMethodApi.md#apiPaymentMethodNotesByIdGet) | **GET** /api/PaymentMethod/Notes/{id} | 
[**apiPaymentMethodPost**](PaymentMethodApi.md#apiPaymentMethodPost) | **POST** /api/PaymentMethod | 
[**apiPaymentMethodPut**](PaymentMethodApi.md#apiPaymentMethodPut) | **PUT** /api/PaymentMethod | 
[**apiPaymentMethodRelationshipsByIdGet**](PaymentMethodApi.md#apiPaymentMethodRelationshipsByIdGet) | **GET** /api/PaymentMethod/Relationships/{id} | 
[**apiPaymentMethodSetAsDefaultByIdGet**](PaymentMethodApi.md#apiPaymentMethodSetAsDefaultByIdGet) | **GET** /api/PaymentMethod/SetAsDefault/{id} | 
[**apiPaymentMethodTranslationsByIdGet**](PaymentMethodApi.md#apiPaymentMethodTranslationsByIdGet) | **GET** /api/PaymentMethod/Translations/{id} | 


<a name="apiPaymentMethodActivateByIdGet"></a>
# **apiPaymentMethodActivateByIdGet**
> apiPaymentMethodActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodActivateByIdGet(id, callback);
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

<a name="apiPaymentMethodActiveGet"></a>
# **apiPaymentMethodActiveGet**
> apiPaymentMethodActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

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
apiInstance.apiPaymentMethodActiveGet(opts, callback);
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

<a name="apiPaymentMethodByIdGet"></a>
# **apiPaymentMethodByIdGet**
> apiPaymentMethodByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

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
apiInstance.apiPaymentMethodByIdGet(id, opts, callback);
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

<a name="apiPaymentMethodByNameByIdGet"></a>
# **apiPaymentMethodByNameByIdGet**
> apiPaymentMethodByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodByNameByIdGet(id, callback);
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

<a name="apiPaymentMethodByNamePost"></a>
# **apiPaymentMethodByNamePost**
> apiPaymentMethodByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentMethod() // DPPaymentMethod | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentMethod**](DPPaymentMethod.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentMethodContactAddressesByIdGet"></a>
# **apiPaymentMethodContactAddressesByIdGet**
> apiPaymentMethodContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodContactAddressesByIdGet(id, callback);
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

<a name="apiPaymentMethodContactAddressesByIdPost"></a>
# **apiPaymentMethodContactAddressesByIdPost**
> apiPaymentMethodContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

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
apiInstance.apiPaymentMethodContactAddressesByIdPost(id, opts, callback);
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

<a name="apiPaymentMethodContactDetailsByIdGet"></a>
# **apiPaymentMethodContactDetailsByIdGet**
> apiPaymentMethodContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodContactDetailsByIdGet(id, callback);
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

<a name="apiPaymentMethodContactDetailsByIdPost"></a>
# **apiPaymentMethodContactDetailsByIdPost**
> apiPaymentMethodContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

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
apiInstance.apiPaymentMethodContactDetailsByIdPost(id, opts, callback);
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

<a name="apiPaymentMethodDeactivateByIdGet"></a>
# **apiPaymentMethodDeactivateByIdGet**
> apiPaymentMethodDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodDeactivateByIdGet(id, callback);
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

<a name="apiPaymentMethodGet"></a>
# **apiPaymentMethodGet**
> apiPaymentMethodGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

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
apiInstance.apiPaymentMethodGet(opts, callback);
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

<a name="apiPaymentMethodNotesByIdGet"></a>
# **apiPaymentMethodNotesByIdGet**
> apiPaymentMethodNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodNotesByIdGet(id, callback);
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

<a name="apiPaymentMethodPost"></a>
# **apiPaymentMethodPost**
> apiPaymentMethodPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentMethod() // DPPaymentMethod | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentMethod**](DPPaymentMethod.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentMethodPut"></a>
# **apiPaymentMethodPut**
> apiPaymentMethodPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var opts = { 
  'value': new DirectPortalRestApi.DPPaymentMethod() // DPPaymentMethod | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPPaymentMethod**](DPPaymentMethod.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiPaymentMethodRelationshipsByIdGet"></a>
# **apiPaymentMethodRelationshipsByIdGet**
> apiPaymentMethodRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodRelationshipsByIdGet(id, callback);
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

<a name="apiPaymentMethodSetAsDefaultByIdGet"></a>
# **apiPaymentMethodSetAsDefaultByIdGet**
> apiPaymentMethodSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodSetAsDefaultByIdGet(id, callback);
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

<a name="apiPaymentMethodTranslationsByIdGet"></a>
# **apiPaymentMethodTranslationsByIdGet**
> apiPaymentMethodTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.PaymentMethodApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiPaymentMethodTranslationsByIdGet(id, callback);
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

