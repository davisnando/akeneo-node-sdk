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
import type { AssetFamilyItemListLinks } from './AssetFamilyItemListLinks';
import {
    AssetFamilyItemListLinksFromJSON,
    AssetFamilyItemListLinksFromJSONTyped,
    AssetFamilyItemListLinksToJSON,
} from './AssetFamilyItemListLinks';

/**
 * 
 * @export
 * @interface ReferenceEntityRecordItemList
 */
export interface ReferenceEntityRecordItemList {
    /**
     * 
     * @type {AssetFamilyItemListLinks}
     * @memberof ReferenceEntityRecordItemList
     */
    links?: AssetFamilyItemListLinks;
}

/**
 * Check if a given object implements the ReferenceEntityRecordItemList interface.
 */
export function instanceOfReferenceEntityRecordItemList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceEntityRecordItemListFromJSON(json: any): ReferenceEntityRecordItemList {
    return ReferenceEntityRecordItemListFromJSONTyped(json, false);
}

export function ReferenceEntityRecordItemListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntityRecordItemList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : AssetFamilyItemListLinksFromJSON(json['_links']),
    };
}

export function ReferenceEntityRecordItemListToJSON(value?: ReferenceEntityRecordItemList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': AssetFamilyItemListLinksToJSON(value.links),
    };
}

