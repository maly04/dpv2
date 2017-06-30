# DirectPortalRestApi.DPEmailServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEmailSendEmailPost**](DPEmailServiceApi.md#apiEmailSendEmailPost) | **POST** /api/email/SendEmail | 


<a name="apiEmailSendEmailPost"></a>
# **apiEmailSendEmailPost**
> apiEmailSendEmailPost(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPEmailServiceApi();

var opts = { 
  'fromName': "fromName_example", // String | 
  'fromAddress': "fromAddress_example", // String | 
  'toName': "toName_example", // String | 
  'toAddress': "toAddress_example", // String | 
  'cc': "cc_example", // String | 
  'subject': "subject_example", // String | 
  'isHtml': true, // Boolean | 
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiEmailSendEmailPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromName** | **String**|  | [optional] 
 **fromAddress** | **String**|  | [optional] 
 **toName** | **String**|  | [optional] 
 **toAddress** | **String**|  | [optional] 
 **cc** | **String**|  | [optional] 
 **subject** | **String**|  | [optional] 
 **isHtml** | **Boolean**|  | [optional] 
 **body** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

