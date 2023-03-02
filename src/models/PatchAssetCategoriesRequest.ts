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

import { exists, mapValues } from '../runtime';
import type { PAMAssetCategoriesEmbeddedItemsInnerAllOfLabels } from './PAMAssetCategoriesEmbeddedItemsInnerAllOfLabels';
import {
    PAMAssetCategoriesEmbeddedItemsInnerAllOfLabelsFromJSON,
    PAMAssetCategoriesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    PAMAssetCategoriesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './PAMAssetCategoriesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface PatchAssetCategoriesRequest
 */
export interface PatchAssetCategoriesRequest {
    /**
     * PAM asset category code
     * @type {string}
     * @memberof PatchAssetCategoriesRequest
     */
    code: string;
    /**
     * PAM ssset category code of the parent's asset category
     * @type {string}
     * @memberof PatchAssetCategoriesRequest
     */
    parent?: string;
    /**
     * 
     * @type {PAMAssetCategoriesEmbeddedItemsInnerAllOfLabels}
     * @memberof PatchAssetCategoriesRequest
     */
    labels?: PAMAssetCategoriesEmbeddedItemsInnerAllOfLabels;
}

/**
 * Check if a given object implements the PatchAssetCategoriesRequest interface.
 */
export function instanceOfPatchAssetCategoriesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PatchAssetCategoriesRequestFromJSON(json: any): PatchAssetCategoriesRequest {
    return PatchAssetCategoriesRequestFromJSONTyped(json, false);
}

export function PatchAssetCategoriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchAssetCategoriesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'labels': !exists(json, 'labels') ? undefined : PAMAssetCategoriesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
    };
}

export function PatchAssetCategoriesRequestToJSON(value?: PatchAssetCategoriesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'parent': value.parent,
        'labels': PAMAssetCategoriesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
    };
}

