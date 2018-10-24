/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AlfrescoApiClient } from '../../../alfrescoApiClient';


/**
 * Comments service.
 * @module api/CustomModelApi
 * @version 0.1.0
 */

/**
 * Constructs a new CustomModelApi.
 * @alias module:api/CustomModelApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
 * if unspecified.
 */
export class FavoritesApi {

    apiClient: AlfrescoApiClient;
    private: boolean;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
        this.private = true;
    }

    /**
     * create Custom Model
     */
    createCustomModel(status, description, name, namespaceUri, namespacePrefix) {

        if (namespaceUri == undefined || namespaceUri == null) {
            throw "Missing the required parameter 'namespaceUri' when calling createCustomModel";
        }

        if (namespacePrefix == undefined || namespacePrefix == null) {
            throw "Missing the required parameter 'namespacePrefix' when calling createCustomModel";
        }

        let postBody = {
            "status": status,
            "description": description,
            "name": name,
            "namespaceUri": namespaceUri,
            "namespacePrefix": namespacePrefix
        };

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom type
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomType(modelName, name, parentName, title, description) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling createCustomType";
        }

        if (name == undefined || name == null) {
            throw "Missing the required parameter 'name' when calling createCustomType";
        }

        let postBody = {
            "name": name,
            "parentName": parentName,
            "title": title,
            "description": description
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom aspect
     * @param {String} modelName
     * @param {String} name
     * @param {String} parentName
     * @param {String} description
     */
    createCustomAspect(modelName, name, parentName, title, description) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling createCustomAspect";
        }

        if (name == undefined || name == null) {
            throw "Missing the required parameter 'name' when calling createCustomAspect";
        }

        let postBody = {
            "name": name,
            "parentName": parentName,
            "title": title,
            "description": description
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Create a custom constraint
     * @param {String} modelName
     * @param {String} name
     * @param {String} type
     * @param {Object} parameters
     */
    createCustomConstraint(modelName, name, type, parameters) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling createCustomConstraint";
        }
        if (type == undefined || type == null) {
            throw "Missing the required parameter 'type' when calling createCustomConstraint";
        }
        if (name == undefined || name == null) {
            throw "Missing the required parameter 'name' when calling createCustomConstraint";
        }

        let postBody = {
            "name": name,
            "type": type,
            "parameters": parameters
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Activate the custom model
     * @param {String} modelName
     */
    activateCustomModel(modelName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling activateCustomModel";
        }

        let postBody = {
            "status": "ACTIVE"
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}?select=status', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Deactivate the custom model
     * @param {String} modelName
     */
    deactivateCustomModel(modelName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling deactivateCustomModel";
        }

        let postBody = {
            "status": "DRAFT"
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}?select=status', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add property into an existing aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} properties
     */
    addPropertyToAspect(modelName, aspectName, properties) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling addPropertyToAspect";
        }

        if (aspectName == undefined || aspectName == null) {
            throw "Missing the required parameter 'aspectName' when calling addPropertyToAspect";
        }

        let postBody = {
            "name": aspectName,
            "properties": properties
        };

        let pathParams = {
            "modelName": modelName,
            "aspectName": aspectName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}?select=props', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Add Property into an existing type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} properties
     * @param {String} aspectName
     */
    addPropertyToType(modelName, typeName, properties, aspectName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling addPropertyToType";
        }

        if (typeName == undefined || typeName == null) {
            throw "Missing the required parameter 'typeName' when calling addPropertyToType";
        }

        let postBody = {
            "name": aspectName,
            "properties": properties
        };

        let pathParams = {
            "modelName": modelName,
            "typeName": typeName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}?select=props', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Edit an existing custom model
     * @param {String} modelName
     * @param {String} description
     * @param {String} namespaceUri
     * @param {String} namespacePrefix
     */
    updateCustomModel(modelName, description, namespaceUri, namespacePrefix) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling updateCustomModel";
        }

        let postBody = {
            "name": modelName,
            "description": description,
            "namespaceUri": namespaceUri,
            "namespacePrefix": namespacePrefix
        };

        let pathParams = {
            "modelName": modelName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Edit an existing custom model type
     * @param {String} modelName
     * @param {String} typeName
     * @param {String} description
     * @param {String} parentName
     * @param {String} title
     */
    updateCustomType(modelName, typeName, description, parentName, title) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling UpdateCustomType";
        }

        if (typeName == undefined || typeName == null) {
            throw "Missing the required parameter 'typeName' when calling UpdateCustomType";
        }

        let postBody = {
            "name": modelName,
            "parentName": parentName,
            "title": title,
            "description": description
        };

        let pathParams = {
            "modelName": modelName,
            "typeName": typeName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Edit an existing custom model aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {String} description
     * @param {String} parentName
     * @param {String} title
     */
    updateCustomAspect(modelName, aspectName, description, parentName, title) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling updateCustomAspect";
        }

        if (aspectName == undefined || aspectName == null) {
            throw "Missing the required parameter 'aspectName' when calling updateCustomAspect";
        }

        let postBody = {
            "name": modelName,
            "parentName": parentName,
            "title": title,
            "description": description
        };

        let pathParams = {
            "modelName": modelName,
            "aspectName": aspectName
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom models
     */
    getAllCustomModel() {

        let postBody = {};

        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getCustomModel(modelName, queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getCustomModel";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model types
     * @param {String} modelName
     */
    getAllCustomType(modelName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getAllCustomType";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model type
     * @param {String} modelName
     * @param {String} typeName
     * @param {Object} queryParams
     */
    getCustomType(modelName, typeName, queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getCustomType";
        }

        if (typeName == undefined || typeName == null) {
            throw "Missing the required parameter 'typeName' when calling getCustomType";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName,
            "typeName": typeName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model aspect
     * @param {String} modelName
     * @param {Object} queryParamsInput
     */
    getAllCustomAspect(modelName,queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getAllCustomAspect";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model aspect
     * @param {String} modelName
     * @param {String} aspectName
     * @param {Object} queryParamsInput
     */
    getCustomAspect(modelName, aspectName, queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getCustomAspect";
        }

        if (aspectName == undefined || aspectName == null) {
            throw "Missing the required parameter 'aspectName' when calling getCustomAspect";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName,
            "aspectName": aspectName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/aspects/{aspectName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get all custom model defined constraints
     * @param {String} modelName
     * @param {Object} queryParams
     */
    getAllCustomConstraints(modelName,queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getAllCustomConstraints";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Get custom model defined constraints
     * @param {String} modelName
     * @param {String} constraintName
     * @param {Object} queryParams
     */
    getCustomConstraints(modelName, constraintName, queryParamsInput) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getCustomConstraints";
        }

        if (constraintName == undefined || constraintName == null) {
            throw "Missing the required parameter 'constraintName' when calling getCustomConstraints";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName,
            "constraintName": constraintName
        };

        let queryParams = queryParamsInput || {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/constraints{constraintName}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete the given custom model
     * @param {String} modelName
     */
    deleteCustomModel(modelName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling deleteCustomModel";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

    /**
     * Delete the given custom type
     * @param {String} modelName
     * @param {String} typeName
     */
    deleteCustomType(modelName, typeName) {

        if (modelName == undefined || modelName == null) {
            throw "Missing the required parameter 'modelName' when calling getCustomConstraints";
        }

        if (typeName == undefined || typeName == null) {
            throw "Missing the required parameter 'modelName' when calling deleteCustomType";
        }

        let postBody = {};

        let pathParams = {
            "modelName": modelName,
            "typeName": typeName
        };

        let queryParams = {};

        let headerParams = {};
        let formParams = {};

        let authNames = ['basicAuth'];
        let contentTypes = [this.apiClient.contentTypes.json];
        let accepts = [this.apiClient.contentTypes.json];
        let returnType = {};

        return this.apiClient.callApi(
            'cmm/{modelName}/types/{typeName}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }

}

