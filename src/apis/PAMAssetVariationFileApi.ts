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
  GetProducts401Response,
  GetVariationFilesChannelCodeLocaleCode200Response,
  PostReferenceFilesLocaleCodeRequest,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    GetVariationFilesChannelCodeLocaleCode200ResponseFromJSON,
    GetVariationFilesChannelCodeLocaleCode200ResponseToJSON,
    PostReferenceFilesLocaleCodeRequestFromJSON,
    PostReferenceFilesLocaleCodeRequestToJSON,
} from '../models';

export interface GetVariationFilesChannelCodeLocaleCodeRequest {
    assetCode: string;
    channelCode: string;
    localeCode: string;
}

export interface GetVariationFilesChannelCodeLocaleCodeDownloadRequest {
    assetCode: string;
    channelCode: string;
    localeCode: string;
}

export interface PostVariationFilesChannelCodeLocaleCodeRequest {
    assetCode: string;
    channelCode: string;
    localeCode: string;
    contentType: string;
    body?: PostReferenceFilesLocaleCodeRequest;
}

/**
 * 
 */
export class PAMAssetVariationFileApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the information about a variation file of a given PAM asset.
     * Get a variation file
     */
    async getVariationFilesChannelCodeLocaleCodeRaw(requestParameters: GetVariationFilesChannelCodeLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetVariationFilesChannelCodeLocaleCode200Response>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling getVariationFilesChannelCodeLocaleCode.');
        }

        if (requestParameters.channelCode === null || requestParameters.channelCode === undefined) {
            throw new runtime.RequiredError('channelCode','Required parameter requestParameters.channelCode was null or undefined when calling getVariationFilesChannelCodeLocaleCode.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getVariationFilesChannelCodeLocaleCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"channel_code"}}`, encodeURIComponent(String(requestParameters.channelCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetVariationFilesChannelCodeLocaleCode200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a variation file of a given PAM asset.
     * Get a variation file
     */
    async getVariationFilesChannelCodeLocaleCode(requestParameters: GetVariationFilesChannelCodeLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetVariationFilesChannelCodeLocaleCode200Response> {
        const response = await this.getVariationFilesChannelCodeLocaleCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to download a given variation file.
     * Download a variation file
     */
    async getVariationFilesChannelCodeLocaleCodeDownloadRaw(requestParameters: GetVariationFilesChannelCodeLocaleCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling getVariationFilesChannelCodeLocaleCodeDownload.');
        }

        if (requestParameters.channelCode === null || requestParameters.channelCode === undefined) {
            throw new runtime.RequiredError('channelCode','Required parameter requestParameters.channelCode was null or undefined when calling getVariationFilesChannelCodeLocaleCodeDownload.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getVariationFilesChannelCodeLocaleCodeDownload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}/download`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"channel_code"}}`, encodeURIComponent(String(requestParameters.channelCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to download a given variation file.
     * Download a variation file
     */
    async getVariationFilesChannelCodeLocaleCodeDownload(requestParameters: GetVariationFilesChannelCodeLocaleCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getVariationFilesChannelCodeLocaleCodeDownloadRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to upload a new variation file for a given PAM asset, channel and locale.
     * Upload a new variation file
     */
    async postVariationFilesChannelCodeLocaleCodeRaw(requestParameters: PostVariationFilesChannelCodeLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling postVariationFilesChannelCodeLocaleCode.');
        }

        if (requestParameters.channelCode === null || requestParameters.channelCode === undefined) {
            throw new runtime.RequiredError('channelCode','Required parameter requestParameters.channelCode was null or undefined when calling postVariationFilesChannelCodeLocaleCode.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling postVariationFilesChannelCodeLocaleCode.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling postVariationFilesChannelCodeLocaleCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-type'] = String(requestParameters.contentType);
        }

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/variation-files/{channel_code}/{locale_code}`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"channel_code"}}`, encodeURIComponent(String(requestParameters.channelCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostReferenceFilesLocaleCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to upload a new variation file for a given PAM asset, channel and locale.
     * Upload a new variation file
     */
    async postVariationFilesChannelCodeLocaleCode(requestParameters: PostVariationFilesChannelCodeLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postVariationFilesChannelCodeLocaleCodeRaw(requestParameters, initOverrides);
    }

}
