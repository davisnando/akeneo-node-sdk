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
import type { PatchAssetsRequestInnerValues } from './PatchAssetsRequestInnerValues';
import {
    PatchAssetsRequestInnerValuesFromJSON,
    PatchAssetsRequestInnerValuesFromJSONTyped,
    PatchAssetsRequestInnerValuesToJSON,
} from './PatchAssetsRequestInnerValues';

/**
 * 
 * @export
 * @interface PatchAssetCodeRequest
 */
export interface PatchAssetCodeRequest {
    /**
     * Code of the asset
     * @type {string}
     * @memberof PatchAssetCodeRequest
     */
    code: string;
    /**
     * 
     * @type {PatchAssetsRequestInnerValues}
     * @memberof PatchAssetCodeRequest
     */
    values?: PatchAssetsRequestInnerValues;
    /**
     * Date of creation (Only available on SaaS versions)
     * @type {string}
     * @memberof PatchAssetCodeRequest
     */
    created?: string;
    /**
     * Date of the last update (Only available on SaaS versions)
     * @type {string}
     * @memberof PatchAssetCodeRequest
     */
    updated?: string;
}

/**
 * Check if a given object implements the PatchAssetCodeRequest interface.
 */
export function instanceOfPatchAssetCodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PatchAssetCodeRequestFromJSON(json: any): PatchAssetCodeRequest {
    return PatchAssetCodeRequestFromJSONTyped(json, false);
}

export function PatchAssetCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchAssetCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'values': !exists(json, 'values') ? undefined : PatchAssetsRequestInnerValuesFromJSON(json['values']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
    };
}

export function PatchAssetCodeRequestToJSON(value?: PatchAssetCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'values': PatchAssetsRequestInnerValuesToJSON(value.values),
        'created': value.created,
        'updated': value.updated,
    };
}

