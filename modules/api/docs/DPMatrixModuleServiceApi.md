# DirectPortalRestApi.DPMatrixModuleServiceApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiModulesMatrixGetBuildingMatrixByBuildingIdGet**](DPMatrixModuleServiceApi.md#apiModulesMatrixGetBuildingMatrixByBuildingIdGet) | **GET** /api/modules/matrix/GetBuildingMatrix/{buildingId} | 
[**apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet**](DPMatrixModuleServiceApi.md#apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet) | **GET** /api/modules/matrix/GetUnitMatrix/{buildingId}/{unitId} | 


<a name="apiModulesMatrixGetBuildingMatrixByBuildingIdGet"></a>
# **apiModulesMatrixGetBuildingMatrixByBuildingIdGet**
> apiModulesMatrixGetBuildingMatrixByBuildingIdGet(buildingId)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPMatrixModuleServiceApi();

var buildingId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiModulesMatrixGetBuildingMatrixByBuildingIdGet(buildingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet"></a>
# **apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet**
> apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet(buildingId, unitId)



### Example
```javascript
var DirectPortalRestApi = require('direct_portal_rest_api');

var apiInstance = new DirectPortalRestApi.DPMatrixModuleServiceApi();

var buildingId = 56; // Number | 

var unitId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.apiModulesMatrixGetUnitMatrixByBuildingIdByUnitIdGet(buildingId, unitId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buildingId** | **Number**|  | 
 **unitId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

