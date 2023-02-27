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
  Attributes,
  GetAttributesCode200Response,
  GetProducts401Response,
  PatchAttributesRequest,
  PatchProducts200Response,
  PostAttributesRequest,
} from '../models';
import {
    AttributesFromJSON,
    AttributesToJSON,
    GetAttributesCode200ResponseFromJSON,
    GetAttributesCode200ResponseToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchAttributesRequestFromJSON,
    PatchAttributesRequestToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    PostAttributesRequestFromJSON,
    PostAttributesRequestToJSON,
} from '../models';

export interface GetAttributesRequest {
    search?: string;
    page?: number;
    limit?: number;
    withCount?: boolean;
    withTableSelectOptions?: boolean;
}

export interface GetAttributesCodeRequest {
    code: string;
    withTableSelectOptions?: boolean;
}

export interface PatchAttributesOperationRequest {
    body?: PatchAttributesRequest;
}

export interface PatchAttributesCodeRequest {
    code: string;
    body: PostAttributesRequest;
}

export interface PostAttributesOperationRequest {
    body?: PostAttributesRequest;
}

/**
 * 
 */
export class AttributeApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.
     * Get list of attributes
     */
    async getAttributesRaw(requestParameters: GetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Attributes>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.withCount !== undefined) {
            queryParameters['with_count'] = requestParameters.withCount;
        }

        if (requestParameters.withTableSelectOptions !== undefined) {
            queryParameters['with_table_select_options'] = requestParameters.withTableSelectOptions;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/attributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of attributes. Attributes are paginated and sorted by code.
     * Get list of attributes
     */
    async getAttributes(requestParameters: GetAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Attributes> {
        const response = await this.getAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given attribute.
     * Get an attribute
     */
    async getAttributesCodeRaw(requestParameters: GetAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAttributesCode200Response>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAttributesCode.');
        }

        const queryParameters: any = {};

        if (requestParameters.withTableSelectOptions !== undefined) {
            queryParameters['with_table_select_options'] = requestParameters.withTableSelectOptions;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/attributes/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAttributesCode200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given attribute.
     * Get an attribute
     */
    async getAttributesCode(requestParameters: GetAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAttributesCode200Response> {
        const response = await this.getAttributesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update and/or create several attributes at once.
     * Update/create several attributes
     */
    async patchAttributesRaw(requestParameters: PatchAttributesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/attributes`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchAttributesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update and/or create several attributes at once.
     * Update/create several attributes
     */
    async patchAttributes(requestParameters: PatchAttributesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.patchAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given attribute. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no attribute exists for the given code, it creates it.
     * Update/create an attribute
     */
    async patchAttributesCodeRaw(requestParameters: PatchAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchAttributesCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAttributesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/attributes/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostAttributesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given attribute. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no attribute exists for the given code, it creates it.
     * Update/create an attribute
     */
    async patchAttributesCode(requestParameters: PatchAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchAttributesCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new attribute.
     * Create a new attribute
     */
    async postAttributesRaw(requestParameters: PostAttributesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/attributes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostAttributesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new attribute.
     * Create a new attribute
     */
    async postAttributes(requestParameters: PostAttributesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postAttributesRaw(requestParameters, initOverrides);
    }

}
