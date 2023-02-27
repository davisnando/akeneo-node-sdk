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
import type { PostProductsRequestValuesAttributeCodeInnerLinkedData } from './PostProductsRequestValuesAttributeCodeInnerLinkedData';
import {
    PostProductsRequestValuesAttributeCodeInnerLinkedDataFromJSON,
    PostProductsRequestValuesAttributeCodeInnerLinkedDataFromJSONTyped,
    PostProductsRequestValuesAttributeCodeInnerLinkedDataToJSON,
} from './PostProductsRequestValuesAttributeCodeInnerLinkedData';

/**
 * 
 * @export
 * @interface PostProductsRequestValuesAttributeCodeInner
 */
export interface PostProductsRequestValuesAttributeCodeInner {
    /**
     * <a href='api-reference.html#Channel'>Channel</a> code of the product value
     * @type {string}
     * @memberof PostProductsRequestValuesAttributeCodeInner
     */
    scope?: string;
    /**
     * <a href='api-reference.html#Locale'>Locale</a> code of the product value
     * @type {string}
     * @memberof PostProductsRequestValuesAttributeCodeInner
     */
    locale?: string;
    /**
     * Product value. See <a href='/concepts/products.html#the-data-format'>the `data` format</a> section for more details.
     * @type {object}
     * @memberof PostProductsRequestValuesAttributeCodeInner
     */
    data?: object;
    /**
     * 
     * @type {PostProductsRequestValuesAttributeCodeInnerLinkedData}
     * @memberof PostProductsRequestValuesAttributeCodeInner
     */
    linkedData?: PostProductsRequestValuesAttributeCodeInnerLinkedData;
}

/**
 * Check if a given object implements the PostProductsRequestValuesAttributeCodeInner interface.
 */
export function instanceOfPostProductsRequestValuesAttributeCodeInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostProductsRequestValuesAttributeCodeInnerFromJSON(json: any): PostProductsRequestValuesAttributeCodeInner {
    return PostProductsRequestValuesAttributeCodeInnerFromJSONTyped(json, false);
}

export function PostProductsRequestValuesAttributeCodeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProductsRequestValuesAttributeCodeInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'linkedData': !exists(json, 'linked_data') ? undefined : PostProductsRequestValuesAttributeCodeInnerLinkedDataFromJSON(json['linked_data']),
    };
}

export function PostProductsRequestValuesAttributeCodeInnerToJSON(value?: PostProductsRequestValuesAttributeCodeInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scope': value.scope,
        'locale': value.locale,
        'data': value.data,
        'linked_data': PostProductsRequestValuesAttributeCodeInnerLinkedDataToJSON(value.linkedData),
    };
}

