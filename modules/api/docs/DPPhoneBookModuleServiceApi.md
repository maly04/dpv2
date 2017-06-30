# DirectPortalRestApi.DPPhoneBookModuleServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiModulesPhonebookContactsGet**](DPPhoneBookModuleServiceApi.md#apiModulesPhonebookContactsGet) | **GET** /api/modules/phonebook/Contacts | 


<a name="apiModulesPhonebookContactsGet"></a>
# **apiModulesPhonebookContactsGet**
> DPContactsViewModel apiModulesPhonebookContactsGet()



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPPhoneBookModuleServiceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiModulesPhonebookContactsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DPContactsViewModel**](DPContactsViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

