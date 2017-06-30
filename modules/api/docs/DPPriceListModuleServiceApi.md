# DirectPortalRestApi.DPPriceListModuleServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPricelistGetPriceListForUnitGet**](DPPriceListModuleServiceApi.md#apiPricelistGetPriceListForUnitGet) | **GET** /api/pricelist/GetPriceListForUnit | 
[**apiPricelistGetPriceListGet**](DPPriceListModuleServiceApi.md#apiPricelistGetPriceListGet) | **GET** /api/pricelist/GetPriceList | 


<a name="apiPricelistGetPriceListForUnitGet"></a>
# **apiPricelistGetPriceListForUnitGet**
> DPPriceListItemViewModel apiPricelistGetPriceListForUnitGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPPriceListModuleServiceApi();

var opts = { 
  'id': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiPricelistGetPriceListForUnitGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | [optional] 

### Return type

[**DPPriceListItemViewModel**](DPPriceListItemViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiPricelistGetPriceListGet"></a>
# **apiPricelistGetPriceListGet**
> [DPPriceListItemViewModel] apiPricelistGetPriceListGet(opts)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPPriceListModuleServiceApi();

var opts = { 
  'selectedBuildings': [3.4], // [Number] | 
  'selectedTypes': [3.4], // [Number] | 
  'selectedStatuses': [3.4] // [Number] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiPricelistGetPriceListGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **selectedBuildings** | [**[Number]**](Number.md)|  | [optional] 
 **selectedTypes** | [**[Number]**](Number.md)|  | [optional] 
 **selectedStatuses** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**[DPPriceListItemViewModel]**](DPPriceListItemViewModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

