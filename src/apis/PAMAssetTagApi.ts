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
  GetAssetTagsCode200Response,
  GetProducts401Response,
  PAMAssetTags,
} from '../models';
import {
    GetAssetTagsCode200ResponseFromJSON,
    GetAssetTagsCode200ResponseToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PAMAssetTagsFromJSON,
    PAMAssetTagsToJSON,
} from '../models';

export interface GetAssetTagsRequest {
    page?: number;
    limit?: number;
    withCount?: boolean;
}

export interface GetAssetTagsCodeRequest {
    code: string;
}

export interface PatchAssetTagsCodeRequest {
    code: string;
    body: GetAssetTagsCode200Response;
}

/**
 * 
 */
export class PAMAssetTagApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get a list of PAM asset tags. PAM asset tags are paginated.
     * Get list of PAM asset tags
     */
    async getAssetTagsRaw(requestParameters: GetAssetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PAMAssetTags>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.withCount !== undefined) {
            queryParameters['with_count'] = requestParameters.withCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PAMAssetTagsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of PAM asset tags. PAM asset tags are paginated.
     * Get list of PAM asset tags
     */
    async getAssetTags(requestParameters: GetAssetTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PAMAssetTags> {
        const response = await this.getAssetTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given PAM asset tag.
     * Get a PAM asset tag
     */
    async getAssetTagsCodeRaw(requestParameters: GetAssetTagsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAssetTagsCode200Response>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAssetTagsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-tags/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAssetTagsCode200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given PAM asset tag.
     * Get a PAM asset tag
     */
    async getAssetTagsCode(requestParameters: GetAssetTagsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAssetTagsCode200Response> {
        const response = await this.getAssetTagsCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given PAM asset tag. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no tag exists for the given code, it creates it.
     * Update/create a PAM asset tag
     */
    async patchAssetTagsCodeRaw(requestParameters: PatchAssetTagsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchAssetTagsCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAssetTagsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/asset-tags/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GetAssetTagsCode200ResponseToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given PAM asset tag. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no tag exists for the given code, it creates it.
     * Update/create a PAM asset tag
     */
    async patchAssetTagsCode(requestParameters: PatchAssetTagsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchAssetTagsCodeRaw(requestParameters, initOverrides);
    }

}
