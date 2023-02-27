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
import type { PostProductModelsRequestValuesAttributeCodeInner } from './PostProductModelsRequestValuesAttributeCodeInner';
import {
    PostProductModelsRequestValuesAttributeCodeInnerFromJSON,
    PostProductModelsRequestValuesAttributeCodeInnerFromJSONTyped,
    PostProductModelsRequestValuesAttributeCodeInnerToJSON,
} from './PostProductModelsRequestValuesAttributeCodeInner';

/**
 * Published product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
 * @export
 * @interface GetPublishedProductsCode200ResponseValues
 */
export interface GetPublishedProductsCode200ResponseValues {
    /**
     * 
     * @type {Array<PostProductModelsRequestValuesAttributeCodeInner>}
     * @memberof GetPublishedProductsCode200ResponseValues
     */
    attributeCode?: Array<PostProductModelsRequestValuesAttributeCodeInner>;
}

/**
 * Check if a given object implements the GetPublishedProductsCode200ResponseValues interface.
 */
export function instanceOfGetPublishedProductsCode200ResponseValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetPublishedProductsCode200ResponseValuesFromJSON(json: any): GetPublishedProductsCode200ResponseValues {
    return GetPublishedProductsCode200ResponseValuesFromJSONTyped(json, false);
}

export function GetPublishedProductsCode200ResponseValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPublishedProductsCode200ResponseValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeCode': !exists(json, 'attributeCode') ? undefined : ((json['attributeCode'] as Array<any>).map(PostProductModelsRequestValuesAttributeCodeInnerFromJSON)),
    };
}

export function GetPublishedProductsCode200ResponseValuesToJSON(value?: GetPublishedProductsCode200ResponseValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeCode': value.attributeCode === undefined ? undefined : ((value.attributeCode as Array<any>).map(PostProductModelsRequestValuesAttributeCodeInnerToJSON)),
    };
}

