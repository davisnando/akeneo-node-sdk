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
  AssetFamilies,
  AssetFamiliesEmbeddedItemsInnerAllOf,
  GetProducts401Response,
  PatchAssetFamilyCodeRequest,
} from '../models';
import {
    AssetFamiliesFromJSON,
    AssetFamiliesToJSON,
    AssetFamiliesEmbeddedItemsInnerAllOfFromJSON,
    AssetFamiliesEmbeddedItemsInnerAllOfToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchAssetFamilyCodeRequestFromJSON,
    PatchAssetFamilyCodeRequestToJSON,
} from '../models';

export interface GetAssetFamiliesRequest {
    searchAfter?: string;
}

export interface GetAssetFamilyCodeRequest {
    code: string;
}

export interface PatchAssetFamilyCodeOperationRequest {
    code: string;
    body: PatchAssetFamilyCodeRequest;
}

/**
 * 
 */
export class AssetFamilyApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get a list of asset families. Asset families are paginated.
     * Get list of asset families
     */
    async getAssetFamiliesRaw(requestParameters: GetAssetFamiliesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AssetFamilies>> {
        const queryParameters: any = {};

        if (requestParameters.searchAfter !== undefined) {
            queryParameters['search_after'] = requestParameters.searchAfter;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-families`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFamiliesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of asset families. Asset families are paginated.
     * Get list of asset families
     */
    async getAssetFamilies(requestParameters: GetAssetFamiliesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AssetFamilies> {
        const response = await this.getAssetFamiliesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given asset family.
     * Get an asset family
     */
    async getAssetFamilyCodeRaw(requestParameters: GetAssetFamilyCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AssetFamiliesEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAssetFamilyCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-families/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetFamiliesEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given asset family.
     * Get an asset family
     */
    async getAssetFamilyCode(requestParameters: GetAssetFamilyCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AssetFamiliesEmbeddedItemsInnerAllOf> {
        const response = await this.getAssetFamilyCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given asset family. Note that if the asset family does not already exist, it creates it.
     * Update/create an asset family
     */
    async patchAssetFamilyCodeRaw(requestParameters: PatchAssetFamilyCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchAssetFamilyCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAssetFamilyCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/asset-families/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchAssetFamilyCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given asset family. Note that if the asset family does not already exist, it creates it.
     * Update/create an asset family
     */
    async patchAssetFamilyCode(requestParameters: PatchAssetFamilyCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchAssetFamilyCodeRaw(requestParameters, initOverrides);
    }

}
