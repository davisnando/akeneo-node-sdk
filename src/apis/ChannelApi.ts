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
  Channels,
  ChannelsEmbeddedItemsInnerAllOf,
  GetProducts401Response,
  PatchProducts200Response,
  SeveralChannelsPatchRequest,
} from '../models';
import {
    ChannelsFromJSON,
    ChannelsToJSON,
    ChannelsEmbeddedItemsInnerAllOfFromJSON,
    ChannelsEmbeddedItemsInnerAllOfToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    SeveralChannelsPatchRequestFromJSON,
    SeveralChannelsPatchRequestToJSON,
} from '../models';

export interface ChannelsPatchRequest {
    code: string;
    body: ChannelsEmbeddedItemsInnerAllOf;
}

export interface ChannelsPostRequest {
    body?: ChannelsEmbeddedItemsInnerAllOf;
}

export interface GetChannelsRequest {
    page?: number;
    limit?: number;
    withCount?: boolean;
}

export interface GetChannelsCodeRequest {
    code: string;
}

export interface SeveralChannelsPatchOperationRequest {
    body?: SeveralChannelsPatchRequest;
}

/**
 * 
 */
export class ChannelApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to update a given channel. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no channel exists for the given code, it creates it.
     * Update/create a channel
     */
    async channelsPatchRaw(requestParameters: ChannelsPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling channelsPatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling channelsPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/channels/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelsEmbeddedItemsInnerAllOfToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given channel. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no channel exists for the given code, it creates it.
     * Update/create a channel
     */
    async channelsPatch(requestParameters: ChannelsPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.channelsPatchRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new channel.
     * Create a new channel
     */
    async channelsPostRaw(requestParameters: ChannelsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/channels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelsEmbeddedItemsInnerAllOfToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new channel.
     * Create a new channel
     */
    async channelsPost(requestParameters: ChannelsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.channelsPostRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to get a list of channels. Channels are paginated and sorted by code.
     * Get a list of channels
     */
    async getChannelsRaw(requestParameters: GetChannelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channels>> {
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
            path: `/api/rest/v1/channels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of channels. Channels are paginated and sorted by code.
     * Get a list of channels
     */
    async getChannels(requestParameters: GetChannelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channels> {
        const response = await this.getChannelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given channel.
     * Get a channel
     */
    async getChannelsCodeRaw(requestParameters: GetChannelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getChannelsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/channels/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given channel.
     * Get a channel
     */
    async getChannelsCode(requestParameters: GetChannelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsEmbeddedItemsInnerAllOf> {
        const response = await this.getChannelsCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update and/or create several channels at once.
     * Update/create several channels
     */
    async severalChannelsPatchRaw(requestParameters: SeveralChannelsPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/channels`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SeveralChannelsPatchRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update and/or create several channels at once.
     * Update/create several channels
     */
    async severalChannelsPatch(requestParameters: SeveralChannelsPatchOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.severalChannelsPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
