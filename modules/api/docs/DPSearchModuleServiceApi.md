# DirectPortalRestApi.DPSearchModuleServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiModulesSearchSearchGet**](DPSearchModuleServiceApi.md#apiModulesSearchSearchGet) | **GET** /api/modules/search/Search | 


<a name="apiModulesSearchSearchGet"></a>
# **apiModulesSearchSearchGet**
> apiModulesSearchSearchGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPSearchModuleServiceApi();

var opts = { 
  'id': "id_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiModulesSearchSearchGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

