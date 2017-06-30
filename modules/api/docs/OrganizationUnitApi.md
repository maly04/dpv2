# DirectPortalRestApi.OrganizationUnitApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiOrganizationUnitActivateByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitActivateByIdGet) | **GET** /api/OrganizationUnit/Activate/{id} | 
[**apiOrganizationUnitActiveGet**](OrganizationUnitApi.md#apiOrganizationUnitActiveGet) | **GET** /api/OrganizationUnit/Active | 
[**apiOrganizationUnitByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitByIdGet) | **GET** /api/OrganizationUnit/{id} | 
[**apiOrganizationUnitByNameByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitByNameByIdGet) | **GET** /api/OrganizationUnit/ByName/{id} | 
[**apiOrganizationUnitByNamePost**](OrganizationUnitApi.md#apiOrganizationUnitByNamePost) | **POST** /api/OrganizationUnit/ByName | 
[**apiOrganizationUnitContactAddressesByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitContactAddressesByIdGet) | **GET** /api/OrganizationUnit/ContactAddresses/{id} | 
[**apiOrganizationUnitContactAddressesByIdPost**](OrganizationUnitApi.md#apiOrganizationUnitContactAddressesByIdPost) | **POST** /api/OrganizationUnit/ContactAddresses/{id} | 
[**apiOrganizationUnitContactDetailsByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitContactDetailsByIdGet) | **GET** /api/OrganizationUnit/ContactDetails/{id} | 
[**apiOrganizationUnitContactDetailsByIdPost**](OrganizationUnitApi.md#apiOrganizationUnitContactDetailsByIdPost) | **POST** /api/OrganizationUnit/ContactDetails/{id} | 
[**apiOrganizationUnitDeactivateByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitDeactivateByIdGet) | **GET** /api/OrganizationUnit/Deactivate/{id} | 
[**apiOrganizationUnitGet**](OrganizationUnitApi.md#apiOrganizationUnitGet) | **GET** /api/OrganizationUnit | 
[**apiOrganizationUnitNotesByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitNotesByIdGet) | **GET** /api/OrganizationUnit/Notes/{id} | 
[**apiOrganizationUnitPost**](OrganizationUnitApi.md#apiOrganizationUnitPost) | **POST** /api/OrganizationUnit | 
[**apiOrganizationUnitPut**](OrganizationUnitApi.md#apiOrganizationUnitPut) | **PUT** /api/OrganizationUnit | 
[**apiOrganizationUnitRelationshipsByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitRelationshipsByIdGet) | **GET** /api/OrganizationUnit/Relationships/{id} | 
[**apiOrganizationUnitSetAsDefaultByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitSetAsDefaultByIdGet) | **GET** /api/OrganizationUnit/SetAsDefault/{id} | 
[**apiOrganizationUnitTranslationsByIdGet**](OrganizationUnitApi.md#apiOrganizationUnitTranslationsByIdGet) | **GET** /api/OrganizationUnit/Translations/{id} | 


<a name="apiOrganizationUnitActivateByIdGet"></a>
# **apiOrganizationUnitActivateByIdGet**
> apiOrganizationUnitActivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitActivateByIdGet(id, callback);
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

<a name="apiOrganizationUnitActiveGet"></a>
# **apiOrganizationUnitActiveGet**
> apiOrganizationUnitActiveGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

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
apiInstance.apiOrganizationUnitActiveGet(opts, callback);
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

<a name="apiOrganizationUnitByIdGet"></a>
# **apiOrganizationUnitByIdGet**
> apiOrganizationUnitByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

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
apiInstance.apiOrganizationUnitByIdGet(id, opts, callback);
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

<a name="apiOrganizationUnitByNameByIdGet"></a>
# **apiOrganizationUnitByNameByIdGet**
> apiOrganizationUnitByNameByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitByNameByIdGet(id, callback);
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

<a name="apiOrganizationUnitByNamePost"></a>
# **apiOrganizationUnitByNamePost**
> apiOrganizationUnitByNamePost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnit() // DPOrganizationUnit | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitByNamePost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnit**](DPOrganizationUnit.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitContactAddressesByIdGet"></a>
# **apiOrganizationUnitContactAddressesByIdGet**
> apiOrganizationUnitContactAddressesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitContactAddressesByIdGet(id, callback);
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

<a name="apiOrganizationUnitContactAddressesByIdPost"></a>
# **apiOrganizationUnitContactAddressesByIdPost**
> apiOrganizationUnitContactAddressesByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

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
apiInstance.apiOrganizationUnitContactAddressesByIdPost(id, opts, callback);
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

<a name="apiOrganizationUnitContactDetailsByIdGet"></a>
# **apiOrganizationUnitContactDetailsByIdGet**
> apiOrganizationUnitContactDetailsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitContactDetailsByIdGet(id, callback);
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

<a name="apiOrganizationUnitContactDetailsByIdPost"></a>
# **apiOrganizationUnitContactDetailsByIdPost**
> apiOrganizationUnitContactDetailsByIdPost(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

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
apiInstance.apiOrganizationUnitContactDetailsByIdPost(id, opts, callback);
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

<a name="apiOrganizationUnitDeactivateByIdGet"></a>
# **apiOrganizationUnitDeactivateByIdGet**
> apiOrganizationUnitDeactivateByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitDeactivateByIdGet(id, callback);
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

<a name="apiOrganizationUnitGet"></a>
# **apiOrganizationUnitGet**
> apiOrganizationUnitGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

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
apiInstance.apiOrganizationUnitGet(opts, callback);
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

<a name="apiOrganizationUnitNotesByIdGet"></a>
# **apiOrganizationUnitNotesByIdGet**
> apiOrganizationUnitNotesByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitNotesByIdGet(id, callback);
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

<a name="apiOrganizationUnitPost"></a>
# **apiOrganizationUnitPost**
> apiOrganizationUnitPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnit() // DPOrganizationUnit | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnit**](DPOrganizationUnit.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitPut"></a>
# **apiOrganizationUnitPut**
> apiOrganizationUnitPut(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var opts = { 
  'value': new DirectPortalRestApi.DPOrganizationUnit() // DPOrganizationUnit | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**DPOrganizationUnit**](DPOrganizationUnit.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="apiOrganizationUnitRelationshipsByIdGet"></a>
# **apiOrganizationUnitRelationshipsByIdGet**
> apiOrganizationUnitRelationshipsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitRelationshipsByIdGet(id, callback);
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

<a name="apiOrganizationUnitSetAsDefaultByIdGet"></a>
# **apiOrganizationUnitSetAsDefaultByIdGet**
> apiOrganizationUnitSetAsDefaultByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitSetAsDefaultByIdGet(id, callback);
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

<a name="apiOrganizationUnitTranslationsByIdGet"></a>
# **apiOrganizationUnitTranslationsByIdGet**
> apiOrganizationUnitTranslationsByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.OrganizationUnitApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiOrganizationUnitTranslationsByIdGet(id, callback);
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

