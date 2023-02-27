/* tslint:disable */
/* eslint-disable */
/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetEndpoints200Response,
  GetProducts401Response,
} from '../models';
import {
    GetEndpoints200ResponseFromJSON,
    GetEndpoints200ResponseToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
} from '../models';

/**
 * 
 */
export class OverviewApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.
     * Get list of all endpoints
     */
    async getEndpointsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEndpoints200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEndpoints200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.
     * Get list of all endpoints
     */
    async getEndpoints(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEndpoints200Response> {
        const response = await this.getEndpointsRaw(initOverrides);
        return await response.value();
    }

}
