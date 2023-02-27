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
 * 
 * @export
 * @interface CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
 */
export interface CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode {
    /**
     * Attribute value
     * @type {object}
     * @memberof CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
     */
    data?: object;
    /**
     * The attribute type
     * @type {string}
     * @memberof CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
     */
    type?: string;
    /**
     * <a href='api-reference.html#Locale'>Locale</a> code of the attribute value
     * @type {string}
     * @memberof CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
     */
    locale?: string;
    /**
     * <a href='api-reference.html#Channel'>Channel</a> code of the attribute value
     * @type {string}
     * @memberof CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
     */
    channel?: string;
    /**
     * The attribute code with its uuid (attributeCode|attributeUuid)
     * @type {string}
     * @memberof CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode
     */
    attributeCode?: string;
}

/**
 * Check if a given object implements the CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode interface.
 */
export function instanceOfCategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeFromJSON(json: any): CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode {
    return CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeFromJSONTyped(json, false);
}

export function CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'attributeCode': !exists(json, 'attribute_code') ? undefined : json['attribute_code'],
    };
}

export function CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeToJSON(value?: CategoryListAllOfValuesAttributeCodeAttributeUuidChannelCodeLocaleCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'type': value.type,
        'locale': value.locale,
        'channel': value.channel,
        'attribute_code': value.attributeCode,
    };
}

