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
  Categories,
  CategoriesEmbeddedItemsInnerAllOf,
  GetProducts401Response,
  PatchCategoriesRequest,
  PatchProducts200Response,
  PostCategoriesRequest,
} from '../models';
import {
    CategoriesFromJSON,
    CategoriesToJSON,
    CategoriesEmbeddedItemsInnerAllOfFromJSON,
    CategoriesEmbeddedItemsInnerAllOfToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchCategoriesRequestFromJSON,
    PatchCategoriesRequestToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    PostCategoriesRequestFromJSON,
    PostCategoriesRequestToJSON,
} from '../models';

export interface GetCategoriesRequest {
    search?: string;
    page?: number;
    limit?: number;
    withCount?: boolean;
    withPosition?: boolean;
    withEnrichedAttributes?: boolean;
}

export interface GetCategoriesCodeRequest {
    code: string;
    withPosition?: boolean;
    withEnrichedAttributes?: boolean;
}

export interface GetCategoryMediaFilesCodeDownloadRequest {
    code: string;
}

export interface PatchCategoriesOperationRequest {
    body?: PatchCategoriesRequest;
}

export interface PatchCategoriesCodeRequest {
    code: string;
    body: PostCategoriesRequest;
}

export interface PostCategoriesOperationRequest {
    body?: PostCategoriesRequest;
}

/**
 * 
 */
export class CategoryApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.
     * Get list of categories
     */
    async getCategoriesRaw(requestParameters: GetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Categories>> {
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

        if (requestParameters.withPosition !== undefined) {
            queryParameters['with_position'] = requestParameters.withPosition;
        }

        if (requestParameters.withEnrichedAttributes !== undefined) {
            queryParameters['with_enriched_attributes'] = requestParameters.withEnrichedAttributes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoriesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of categories. Categories are paginated and sorted by `root/left`.
     * Get list of categories
     */
    async getCategories(requestParameters: GetCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Categories> {
        const response = await this.getCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given category.
     * Get a category
     */
    async getCategoriesCodeRaw(requestParameters: GetCategoriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoriesEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getCategoriesCode.');
        }

        const queryParameters: any = {};

        if (requestParameters.withPosition !== undefined) {
            queryParameters['with_position'] = requestParameters.withPosition;
        }

        if (requestParameters.withEnrichedAttributes !== undefined) {
            queryParameters['with_enriched_attributes'] = requestParameters.withEnrichedAttributes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/categories/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoriesEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given category.
     * Get a category
     */
    async getCategoriesCode(requestParameters: GetCategoriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoriesEmbeddedItemsInnerAllOf> {
        const response = await this.getCategoriesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to download a given media file that is used as an attribute value of a enriched category.
     * Download a category media file [COMING SOON]
     */
    async getCategoryMediaFilesCodeDownloadRaw(requestParameters: GetCategoryMediaFilesCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getCategoryMediaFilesCodeDownload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/category-media-files/{code}/download`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to download a given media file that is used as an attribute value of a enriched category.
     * Download a category media file [COMING SOON]
     */
    async getCategoryMediaFilesCodeDownload(requestParameters: GetCategoryMediaFilesCodeDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getCategoryMediaFilesCodeDownloadRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to update several categories at once.
     * Update/create several categories
     */
    async patchCategoriesRaw(requestParameters: PatchCategoriesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/categories`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchCategoriesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update several categories at once.
     * Update/create several categories
     */
    async patchCategories(requestParameters: PatchCategoriesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.patchCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given category. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no category exists for the given code, it creates it.
     * Update/create a category
     */
    async patchCategoriesCodeRaw(requestParameters: PatchCategoriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchCategoriesCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCategoriesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/categories/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostCategoriesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given category. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no category exists for the given code, it creates it.
     * Update/create a category
     */
    async patchCategoriesCode(requestParameters: PatchCategoriesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchCategoriesCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new category.
     * Create a new category
     */
    async postCategoriesRaw(requestParameters: PostCategoriesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCategoriesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new category.
     * Create a new category
     */
    async postCategories(requestParameters: PostCategoriesOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCategoriesRaw(requestParameters, initOverrides);
    }

}
