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
  GetReferenceFilesLocaleCode200Response,
  PostReferenceFilesLocaleCode201Response,
  PostReferenceFilesLocaleCodeRequest,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    GetReferenceFilesLocaleCode200ResponseFromJSON,
    GetReferenceFilesLocaleCode200ResponseToJSON,
    PostReferenceFilesLocaleCode201ResponseFromJSON,
    PostReferenceFilesLocaleCode201ResponseToJSON,
    PostReferenceFilesLocaleCodeRequestFromJSON,
    PostReferenceFilesLocaleCodeRequestToJSON,
} from '../models';

export interface GetReferenceFilesChannelCodeLocaleCodeDownloadRequest {
    assetCode: string;
    localeCode: string;
}

export interface GetReferenceFilesLocaleCodeRequest {
    assetCode: string;
    localeCode: string;
}

export interface PostReferenceFilesLocaleCodeOperationRequest {
    assetCode: string;
    localeCode: string;
    contentType: string;
    body?: PostReferenceFilesLocaleCodeRequest;
}

/**
 * 
 */
export class PAMAssetReferenceFileApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to download a given reference file.
     * Download a reference file
     */
    async getReferenceFilesChannelCodeLocaleCodeDownloadRaw(requestParameters: GetReferenceFilesChannelCodeLocaleCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling getReferenceFilesChannelCodeLocaleCodeDownload.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getReferenceFilesChannelCodeLocaleCodeDownload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/reference-files/{locale_code}/download`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to download a given reference file.
     * Download a reference file
     */
    async getReferenceFilesChannelCodeLocaleCodeDownload(requestParameters: GetReferenceFilesChannelCodeLocaleCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getReferenceFilesChannelCodeLocaleCodeDownloadRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to get the information about a reference file of a given PAM asset.
     * Get a reference file
     */
    async getReferenceFilesLocaleCodeRaw(requestParameters: GetReferenceFilesLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetReferenceFilesLocaleCode200Response>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling getReferenceFilesLocaleCode.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling getReferenceFilesLocaleCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/reference-files/{locale_code}`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetReferenceFilesLocaleCode200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a reference file of a given PAM asset.
     * Get a reference file
     */
    async getReferenceFilesLocaleCode(requestParameters: GetReferenceFilesLocaleCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetReferenceFilesLocaleCode200Response> {
        const response = await this.getReferenceFilesLocaleCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to upload a new reference file for a given PAM asset and locale. It will also automatically generate all the variation files corresponding to this reference file.
     * Upload a new reference file
     */
    async postReferenceFilesLocaleCodeRaw(requestParameters: PostReferenceFilesLocaleCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostReferenceFilesLocaleCode201Response>> {
        if (requestParameters.assetCode === null || requestParameters.assetCode === undefined) {
            throw new runtime.RequiredError('assetCode','Required parameter requestParameters.assetCode was null or undefined when calling postReferenceFilesLocaleCode.');
        }

        if (requestParameters.localeCode === null || requestParameters.localeCode === undefined) {
            throw new runtime.RequiredError('localeCode','Required parameter requestParameters.localeCode was null or undefined when calling postReferenceFilesLocaleCode.');
        }

        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling postReferenceFilesLocaleCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        const response = await this.request({
            path: `/api/rest/v1/assets/{asset_code}/reference-files/{locale_code}`.replace(`{${"asset_code"}}`, encodeURIComponent(String(requestParameters.assetCode))).replace(`{${"locale_code"}}`, encodeURIComponent(String(requestParameters.localeCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostReferenceFilesLocaleCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostReferenceFilesLocaleCode201ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to upload a new reference file for a given PAM asset and locale. It will also automatically generate all the variation files corresponding to this reference file.
     * Upload a new reference file
     */
    async postReferenceFilesLocaleCode(requestParameters: PostReferenceFilesLocaleCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostReferenceFilesLocaleCode201Response> {
        const response = await this.postReferenceFilesLocaleCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
