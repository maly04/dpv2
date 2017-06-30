# DirectPortalRestApi.SubscriptionApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSubscriptionActivateByIdGet**](SubscriptionApi.md#apiSubscriptionActivateByIdGet) | **GET** /api/Subscription/Activate/{id} | 
[**apiSubscriptionActiveGet**](SubscriptionApi.md#apiSubscriptionActiveGet) | **GET** /api/Subscription/Active | 
[**apiSubscriptionByIdGet**](SubscriptionApi.md#apiSubscriptionByIdGet) | **GET** /api/Subscription/{id} | 
[**apiSubscriptionByNameByIdGet**](SubscriptionApi.md#apiSubscriptionByNameByIdGet) | **GET** /api/Subscription/ByName/{id} | 
[**apiSubscriptionByNamePost**](SubscriptionApi.md#apiSubscriptionByNamePost) | **POST** /api/Subscription/ByName | 
[**apiSubscriptionContactAddressesByIdGet**](SubscriptionApi.md#apiSubscriptionContactAddressesByIdGet) | **GET** /api/Subscription/ContactAddresses/{id} | 
[**apiSubscriptionContactAddressesByIdPost**](SubscriptionApi.md#apiSubscriptionContactAddressesByIdPost) | **POST** /api/Subscription/ContactAddresses/{id} | 
[**apiSubscriptionContactDetailsByIdGet**](SubscriptionApi.md#apiSubscriptionContactDetailsByIdGet) | **GET** /api/Subscription/ContactDetails/{id} | 
[**apiSubscriptionContactDetailsByIdPost**](SubscriptionApi.md#apiSubscriptionContactDetailsByIdPost) | **POST** /api/Subscription/ContactDetails/{id} | 
[**apiSubscriptionDeactivateByIdGet**](SubscriptionApi.md#apiSubscriptionDeactivateByIdGet) | **GET** /api/Subscription/Deactivate/{id} | 
[**apiSubscriptionGet**](SubscriptionApi.md#apiSubscriptionGet) | **GET** /api/Subscription | 
[**apiSubscriptionNotesByIdGet**](SubscriptionApi.md#apiSubscriptionNotesByIdGet) | **GET** /api/Subscription/Notes/{id} | 
[**apiSubscriptionPost**](SubscriptionApi.md#apiSubscriptionPost) | **POST** /api/Subscription | 
[**apiSubscriptionPut**](SubscriptionApi.md#apiSubscriptionPut) | **PUT** /api/Subscription | 
[**apiSubscriptionRelationshipsByIdGet**](SubscriptionApi.md#apiSubscriptionRelationshipsByIdGet) | **GET** /api/Subscription/Relationships/{id} | 
[**apiSubscriptionSetAsDefaultByIdGet**](SubscriptionApi.md#apiSubscriptionSetAsDefaultByIdGet) | **GET** /api/Subscription/SetAsDefault/{id} | 
[**apiSubscriptionTranslationsByIdGet**](SubscriptionApi.md#apiSubscriptionTranslationsByIdGet) | **GET** /api/Subscription/Translations/{id} | 


<a name="apiSubscriptionActivateByIdGet"></a>
# **apiSubscriptionActivateByIdGet**
> apiSubscriptionActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionActivateByIdGet(id, callback);
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

<a name="apiSubscriptionActiveGet"></a>
# **apiSubscriptionActiveGet**
> apiSubscriptionActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

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
apiInstance.apiSubscriptionActiveGet(opts, callback);
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

<a name="apiSubscriptionByIdGet"></a>
# **apiSubscriptionByIdGet**
> apiSubscriptionByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

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
apiInstance.apiSubscriptionByIdGet(id, opts, callback);
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

<a name="apiSubscriptionByNameByIdGet"></a>
# **apiSubscriptionByNameByIdGet**
> apiSubscriptionByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionByNameByIdGet(id, callback);
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

<a name="apiSubscriptionByNamePost"></a>
# **apiSubscriptionByNamePost**
> apiSubscriptionByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSubscription() // DPSubscription | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSubscription**](DPSubscription.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSubscriptionContactAddressesByIdGet"></a>
# **apiSubscriptionContactAddressesByIdGet**
> apiSubscriptionContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionContactAddressesByIdGet(id, callback);
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

<a name="apiSubscriptionContactAddressesByIdPost"></a>
# **apiSubscriptionContactAddressesByIdPost**
> apiSubscriptionContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

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
apiInstance.apiSubscriptionContactAddressesByIdPost(id, opts, callback);
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

<a name="apiSubscriptionContactDetailsByIdGet"></a>
# **apiSubscriptionContactDetailsByIdGet**
> apiSubscriptionContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionContactDetailsByIdGet(id, callback);
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

<a name="apiSubscriptionContactDetailsByIdPost"></a>
# **apiSubscriptionContactDetailsByIdPost**
> apiSubscriptionContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

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
apiInstance.apiSubscriptionContactDetailsByIdPost(id, opts, callback);
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

<a name="apiSubscriptionDeactivateByIdGet"></a>
# **apiSubscriptionDeactivateByIdGet**
> apiSubscriptionDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionDeactivateByIdGet(id, callback);
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

<a name="apiSubscriptionGet"></a>
# **apiSubscriptionGet**
> apiSubscriptionGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

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
apiInstance.apiSubscriptionGet(opts, callback);
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

<a name="apiSubscriptionNotesByIdGet"></a>
# **apiSubscriptionNotesByIdGet**
> apiSubscriptionNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionNotesByIdGet(id, callback);
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

<a name="apiSubscriptionPost"></a>
# **apiSubscriptionPost**
> apiSubscriptionPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSubscription() // DPSubscription | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSubscription**](DPSubscription.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSubscriptionPut"></a>
# **apiSubscriptionPut**
> apiSubscriptionPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var opts = { 
  'value': new DirectPortalRestApi.DPSubscription() // DPSubscription | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPSubscription**](DPSubscription.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiSubscriptionRelationshipsByIdGet"></a>
# **apiSubscriptionRelationshipsByIdGet**
> apiSubscriptionRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionRelationshipsByIdGet(id, callback);
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

<a name="apiSubscriptionSetAsDefaultByIdGet"></a>
# **apiSubscriptionSetAsDefaultByIdGet**
> apiSubscriptionSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionSetAsDefaultByIdGet(id, callback);
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

<a name="apiSubscriptionTranslationsByIdGet"></a>
# **apiSubscriptionTranslationsByIdGet**
> apiSubscriptionTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.SubscriptionApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiSubscriptionTranslationsByIdGet(id, callback);
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

