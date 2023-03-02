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
import type { PAMAssetsEmbeddedItemsInner } from './PAMAssetsEmbeddedItemsInner';
import {
    PAMAssetsEmbeddedItemsInnerFromJSON,
    PAMAssetsEmbeddedItemsInnerFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerToJSON,
} from './PAMAssetsEmbeddedItemsInner';

/**
 * 
 * @export
 * @interface PAMAssetsEmbedded
 */
export interface PAMAssetsEmbedded {
    /**
     * 
     * @type {Array<PAMAssetsEmbeddedItemsInner>}
     * @memberof PAMAssetsEmbedded
     */
    items?: Array<PAMAssetsEmbeddedItemsInner>;
}

/**
 * Check if a given object implements the PAMAssetsEmbedded interface.
 */
export function instanceOfPAMAssetsEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PAMAssetsEmbeddedFromJSON(json: any): PAMAssetsEmbedded {
    return PAMAssetsEmbeddedFromJSONTyped(json, false);
}

export function PAMAssetsEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAMAssetsEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(PAMAssetsEmbeddedItemsInnerFromJSON)),
    };
}

export function PAMAssetsEmbeddedToJSON(value?: PAMAssetsEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(PAMAssetsEmbeddedItemsInnerToJSON)),
    };
}

