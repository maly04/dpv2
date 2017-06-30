# DirectPortalRestApi.DPMetadataServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMetadataByIdGet**](DPMetadataServiceApi.md#apiMetadataByIdGet) | **GET** /api/metadata/{id} | 
[**apiMetadataGet**](DPMetadataServiceApi.md#apiMetadataGet) | **GET** /api/metadata | 
[**apiMetadataTranslationsGet**](DPMetadataServiceApi.md#apiMetadataTranslationsGet) | **GET** /api/metadata/Translations | 


<a name="apiMetadataByIdGet"></a>
# **apiMetadataByIdGet**
> apiMetadataByIdGet(id, opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPMetadataServiceApi();

var id = "id_example"; // String | 

var opts = { 
  'fields': "fields_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiMetadataByIdGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fields** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiMetadataGet"></a>
# **apiMetadataGet**
> apiMetadataGet()



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPMetadataServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiMetadataGet(callback);
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

<a name="apiMetadataTranslationsGet"></a>
# **apiMetadataTranslationsGet**
> apiMetadataTranslationsGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPMetadataServiceApi();

var opts = { 
  'culture': "culture_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiMetadataTranslationsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **culture** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

