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
import type { AssetListAllOfValuesAttributeCode } from './AssetListAllOfValuesAttributeCode';
import {
    AssetListAllOfValuesAttributeCodeFromJSON,
    AssetListAllOfValuesAttributeCodeFromJSONTyped,
    AssetListAllOfValuesAttributeCodeToJSON,
} from './AssetListAllOfValuesAttributeCode';

/**
 * Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.
 * @export
 * @interface AssetListAllOfValues
 */
export interface AssetListAllOfValues {
    /**
     * 
     * @type {Array<AssetListAllOfValuesAttributeCode>}
     * @memberof AssetListAllOfValues
     */
    attributeCode?: Array<AssetListAllOfValuesAttributeCode>;
}

/**
 * Check if a given object implements the AssetListAllOfValues interface.
 */
export function instanceOfAssetListAllOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetListAllOfValuesFromJSON(json: any): AssetListAllOfValues {
    return AssetListAllOfValuesFromJSONTyped(json, false);
}

export function AssetListAllOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetListAllOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeCode': !exists(json, 'attributeCode') ? undefined : ((json['attributeCode'] as Array<any>).map(AssetListAllOfValuesAttributeCodeFromJSON)),
    };
}

export function AssetListAllOfValuesToJSON(value?: AssetListAllOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeCode': value.attributeCode === undefined ? undefined : ((value.attributeCode as Array<any>).map(AssetListAllOfValuesAttributeCodeToJSON)),
    };
}

