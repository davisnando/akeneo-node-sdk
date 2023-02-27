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
 * Family variant labels for each locale
 * @export
 * @interface PostFamiliesFamilyCodeVariantsRequestLabels
 */
export interface PostFamiliesFamilyCodeVariantsRequestLabels {
    /**
     * Family variant label for the locale `localeCode`
     * @type {string}
     * @memberof PostFamiliesFamilyCodeVariantsRequestLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the PostFamiliesFamilyCodeVariantsRequestLabels interface.
 */
export function instanceOfPostFamiliesFamilyCodeVariantsRequestLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostFamiliesFamilyCodeVariantsRequestLabelsFromJSON(json: any): PostFamiliesFamilyCodeVariantsRequestLabels {
    return PostFamiliesFamilyCodeVariantsRequestLabelsFromJSONTyped(json, false);
}

export function PostFamiliesFamilyCodeVariantsRequestLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFamiliesFamilyCodeVariantsRequestLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function PostFamiliesFamilyCodeVariantsRequestLabelsToJSON(value?: PostFamiliesFamilyCodeVariantsRequestLabels | null): any {
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

