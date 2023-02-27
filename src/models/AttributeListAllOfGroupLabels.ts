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
/**
 * Group labels for each locale
 * @export
 * @interface AttributeListAllOfGroupLabels
 */
export interface AttributeListAllOfGroupLabels {
    /**
     * Group label for the locale `localeCode`
     * @type {string}
     * @memberof AttributeListAllOfGroupLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the AttributeListAllOfGroupLabels interface.
 */
export function instanceOfAttributeListAllOfGroupLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeListAllOfGroupLabelsFromJSON(json: any): AttributeListAllOfGroupLabels {
    return AttributeListAllOfGroupLabelsFromJSONTyped(json, false);
}

export function AttributeListAllOfGroupLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeListAllOfGroupLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function AttributeListAllOfGroupLabelsToJSON(value?: AttributeListAllOfGroupLabels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
    };
}

