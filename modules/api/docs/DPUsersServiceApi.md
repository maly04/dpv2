# DirectPortalRestApi.DPUsersServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUsersGetByIdGet**](DPUsersServiceApi.md#apiUsersGetByIdGet) | **GET** /api/users/Get/{id} | 
[**apiUsersGetGet**](DPUsersServiceApi.md#apiUsersGetGet) | **GET** /api/users/Get | 
[**apiUsersPost**](DPUsersServiceApi.md#apiUsersPost) | **POST** /api/users | 


<a name="apiUsersGetByIdGet"></a>
# **apiUsersGetByIdGet**
> apiUsersGetByIdGet(id)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPUsersServiceApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUsersGetByIdGet(id, callback);
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

<a name="apiUsersGetGet"></a>
# **apiUsersGetGet**
> apiUsersGetGet()



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPUsersServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUsersGetGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiUsersPost"></a>
# **apiUsersPost**
> apiUsersPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPUsersServiceApi();

var opts = { 
  'model': new DirectPortalRestApi.DPCreateUserViewModel() // DPCreateUserViewModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiUsersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**DPCreateUserViewModel**](DPCreateUserViewModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

