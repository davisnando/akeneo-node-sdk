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
  GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner,
  GetProducts401Response,
} from '../models';
import {
    GetAssetFamilyAttributesAttributeCodeOptions200ResponseInnerFromJSON,
    GetAssetFamilyAttributesAttributeCodeOptions200ResponseInnerToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
} from '../models';

export interface GetAssetAttributesAttributeCodeOptionsCodeRequest {
    assetFamilyCode: string;
    attributeCode: string;
    code: string;
}

export interface GetAssetFamilyAttributesAttributeCodeOptionsRequest {
    assetFamilyCode: string;
    attributeCode: string;
}

export interface PatchAssetAttributesAttributeCodeOptionsCodeRequest {
    assetFamilyCode: string;
    attributeCode: string;
    code: string;
    body: GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner;
}

/**
 * 
 */
export class AssetAttributeOptionApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the information about a given asset attribute option.
     * Get an attribute option for a given attribute of a given asset family
     */
    async getAssetAttributesAttributeCodeOptionsCodeRaw(requestParameters: GetAssetAttributesAttributeCodeOptionsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner>> {
        if (requestParameters.assetFamilyCode === null || requestParameters.assetFamilyCode === undefined) {
            throw new runtime.RequiredError('assetFamilyCode','Required parameter requestParameters.assetFamilyCode was null or undefined when calling getAssetAttributesAttributeCodeOptionsCode.');
        }

        if (requestParameters.attributeCode === null || requestParameters.attributeCode === undefined) {
            throw new runtime.RequiredError('attributeCode','Required parameter requestParameters.attributeCode was null or undefined when calling getAssetAttributesAttributeCodeOptionsCode.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAssetAttributesAttributeCodeOptionsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options/{code}`.replace(`{${"asset_family_code"}}`, encodeURIComponent(String(requestParameters.assetFamilyCode))).replace(`{${"attribute_code"}}`, encodeURIComponent(String(requestParameters.attributeCode))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAssetFamilyAttributesAttributeCodeOptions200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given asset attribute option.
     * Get an attribute option for a given attribute of a given asset family
     */
    async getAssetAttributesAttributeCodeOptionsCode(requestParameters: GetAssetAttributesAttributeCodeOptionsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner> {
        const response = await this.getAssetAttributesAttributeCodeOptionsCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get a list of attribute options for a given asset family.
     * Get a list of attribute options of a given attribute for a given asset family
     */
    async getAssetFamilyAttributesAttributeCodeOptionsRaw(requestParameters: GetAssetFamilyAttributesAttributeCodeOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner>>> {
        if (requestParameters.assetFamilyCode === null || requestParameters.assetFamilyCode === undefined) {
            throw new runtime.RequiredError('assetFamilyCode','Required parameter requestParameters.assetFamilyCode was null or undefined when calling getAssetFamilyAttributesAttributeCodeOptions.');
        }

        if (requestParameters.attributeCode === null || requestParameters.attributeCode === undefined) {
            throw new runtime.RequiredError('attributeCode','Required parameter requestParameters.attributeCode was null or undefined when calling getAssetFamilyAttributesAttributeCodeOptions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options`.replace(`{${"asset_family_code"}}`, encodeURIComponent(String(requestParameters.assetFamilyCode))).replace(`{${"attribute_code"}}`, encodeURIComponent(String(requestParameters.attributeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetAssetFamilyAttributesAttributeCodeOptions200ResponseInnerFromJSON));
    }

    /**
     * This endpoint allows you to get a list of attribute options for a given asset family.
     * Get a list of attribute options of a given attribute for a given asset family
     */
    async getAssetFamilyAttributesAttributeCodeOptions(requestParameters: GetAssetFamilyAttributesAttributeCodeOptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetAssetFamilyAttributesAttributeCodeOptions200ResponseInner>> {
        const response = await this.getAssetFamilyAttributesAttributeCodeOptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given option for a given attribute and a given asset family. Learn more about the <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given asset family, it creates it.
     * Update/create an asset attribute option for a given asset family
     */
    async patchAssetAttributesAttributeCodeOptionsCodeRaw(requestParameters: PatchAssetAttributesAttributeCodeOptionsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetFamilyCode === null || requestParameters.assetFamilyCode === undefined) {
            throw new runtime.RequiredError('assetFamilyCode','Required parameter requestParameters.assetFamilyCode was null or undefined when calling patchAssetAttributesAttributeCodeOptionsCode.');
        }

        if (requestParameters.attributeCode === null || requestParameters.attributeCode === undefined) {
            throw new runtime.RequiredError('attributeCode','Required parameter requestParameters.attributeCode was null or undefined when calling patchAssetAttributesAttributeCodeOptionsCode.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchAssetAttributesAttributeCodeOptionsCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAssetAttributesAttributeCodeOptionsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/asset-families/{asset_family_code}/attributes/{attribute_code}/options/{code}`.replace(`{${"asset_family_code"}}`, encodeURIComponent(String(requestParameters.assetFamilyCode))).replace(`{${"attribute_code"}}`, encodeURIComponent(String(requestParameters.attributeCode))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GetAssetFamilyAttributesAttributeCodeOptions200ResponseInnerToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given option for a given attribute and a given asset family. Learn more about the <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given asset family, it creates it.
     * Update/create an asset attribute option for a given asset family
     */
    async patchAssetAttributesAttributeCodeOptionsCode(requestParameters: PatchAssetAttributesAttributeCodeOptionsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchAssetAttributesAttributeCodeOptionsCodeRaw(requestParameters, initOverrides);
    }

}
