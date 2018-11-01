# .AdminusersApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateUsersUsingPUT**](AdminusersApi.md#bulkUpdateUsersUsingPUT) | **PUT** /enterprise/admin/users | Bulk update a list of users
[**createNewUserUsingPOST**](AdminusersApi.md#createNewUserUsingPOST) | **POST** /enterprise/admin/users | Create a user
[**getUserUsingGET**](AdminusersApi.md#getUserUsingGET) | **GET** /enterprise/admin/users/{userId} | Get a user
[**getUsersUsingGET**](AdminusersApi.md#getUsersUsingGET) | **GET** /enterprise/admin/users | Query users
[**updateUserDetailsUsingPUT**](AdminusersApi.md#updateUserDetailsUsingPUT) | **PUT** /enterprise/admin/users/{userId} | Update a user


<a name="bulkUpdateUsersUsingPUT"></a>
# **bulkUpdateUsersUsingPUT**
> bulkUpdateUsersUsingPUT(update)

Bulk update a list of users

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminusersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkUpdateUsersUsingPUT(update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update** | [**BulkUserUpdateRepresentation**](BulkUserUpdateRepresentation.md)| update | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewUserUsingPOST"></a>
# **createNewUserUsingPOST**
> UserRepresentation createNewUserUsingPOST(userRepresentation)

Create a user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminusersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewUserUsingPOST(userRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserUsingGET"></a>
# **getUserUsingGET**
> AbstractUserRepresentation getUserUsingGET(userIdopts)

Get a user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminusersApi();

var opts = { 
  'summary': true // boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET(userIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**AbstractUserRepresentation**](AbstractUserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersUsingGET"></a>
# **getUsersUsingGET**
> ResultListDataRepresentationAbstractUserRepresentation getUsersUsingGET(opts)

Query users

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminusersApi();

var opts = { 
  'filter': filter_example // string | filter
  'status': status_example // string | status
  'accountType': accountType_example // string | accountType
  'sort': sort_example // string | sort
  'company': company_example // string | company
  'start': 56 // number | start
  'page': 56 // number | page
  'size': 56 // number | size
  'groupId': 789 // number | groupId
  'tenantId': 789 // number | tenantId
  'summary': true // boolean | summary
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **status** | **string**| status | [optional] 
 **accountType** | **string**| accountType | [optional] 
 **sort** | **string**| sort | [optional] 
 **company** | **string**| company | [optional] 
 **start** | **number**| start | [optional] 
 **page** | **number**| page | [optional] 
 **size** | **number**| size | [optional] 
 **groupId** | **number**| groupId | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **summary** | **boolean**| summary | [optional] 

### Return type

[**ResultListDataRepresentationAbstractUserRepresentation**](ResultListDataRepresentationAbstractUserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserDetailsUsingPUT"></a>
# **updateUserDetailsUsingPUT**
> updateUserDetailsUsingPUT(userIduserRepresentation)

Update a user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminusersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateUserDetailsUsingPUT(userIduserRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
