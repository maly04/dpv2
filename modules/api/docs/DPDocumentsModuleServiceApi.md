# DirectPortalRestApi.DPDocumentsModuleServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiModulesDocumentsUploadPost**](DPDocumentsModuleServiceApi.md#apiModulesDocumentsUploadPost) | **POST** /api/modules/documents/Upload | 


<a name="apiModulesDocumentsUploadPost"></a>
# **apiModulesDocumentsUploadPost**
> apiModulesDocumentsUploadPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPDocumentsModuleServiceApi();

var opts = { 
  'files': ["files_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiModulesDocumentsUploadPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

