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
  Locales,
  LocalesEmbeddedItemsInnerAllOf,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    LocalesFromJSON,
    LocalesToJSON,
    LocalesEmbeddedItemsInnerAllOfFromJSON,
    LocalesEmbeddedItemsInnerAllOfToJSON,
} from '../models';

export interface GetLocalesRequest {
    search?: string;
    page?: number;
    limit?: number;
    withCount?: boolean;
}

export interface GetLocalesCodeRequest {
    code: string;
}

/**
 * 
 */
export class LocaleApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.
     * Get a list of locales
     */
    async getLocalesRaw(requestParameters: GetLocalesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Locales>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/locales`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocalesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of locales. Locales are paginated and sorted by code.
     * Get a list of locales
     */
    async getLocales(requestParameters: GetLocalesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Locales> {
        const response = await this.getLocalesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given locale.
     * Get a locale
     */
    async getLocalesCodeRaw(requestParameters: GetLocalesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocalesEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getLocalesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/locales/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocalesEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given locale.
     * Get a locale
     */
    async getLocalesCode(requestParameters: GetLocalesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocalesEmbeddedItemsInnerAllOf> {
        const response = await this.getLocalesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
