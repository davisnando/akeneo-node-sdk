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
  Currencies,
  CurrenciesGet200Response,
  GetProducts401Response,
} from '../models';
import {
    CurrenciesFromJSON,
    CurrenciesToJSON,
    CurrenciesGet200ResponseFromJSON,
    CurrenciesGet200ResponseToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
} from '../models';

export interface CurrenciesGetRequest {
    code: string;
}

export interface CurrenciesGetListRequest {
    page?: number;
    limit?: number;
    withCount?: boolean;
}

/**
 * 
 */
export class CurrencyApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the information about a given currency.
     * Get a currency
     */
    async currenciesGetRaw(requestParameters: CurrenciesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrenciesGet200Response>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling currenciesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/currencies/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrenciesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given currency.
     * Get a currency
     */
    async currenciesGet(requestParameters: CurrenciesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrenciesGet200Response> {
        const response = await this.currenciesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get a list of currencies. Currencies are paginated and sorted by code.
     * Get a list of currencies
     */
    async currenciesGetListRaw(requestParameters: CurrenciesGetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Currencies>> {
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
            path: `/api/rest/v1/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CurrenciesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of currencies. Currencies are paginated and sorted by code.
     * Get a list of currencies
     */
    async currenciesGetList(requestParameters: CurrenciesGetListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Currencies> {
        const response = await this.currenciesGetListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
