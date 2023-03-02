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
import type { AttributesEmbeddedItemsInnerAllOfLabels } from './AttributesEmbeddedItemsInnerAllOfLabels';
import {
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSON,
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AttributesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AttributesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
 */
export interface GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner {
    /**
     * Attribute's option code
     * @type {string}
     * @memberof GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
     */
    code: string;
    /**
     * 
     * @type {AttributesEmbeddedItemsInnerAllOfLabels}
     * @memberof GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
     */
    labels?: AttributesEmbeddedItemsInnerAllOfLabels;
}

/**
 * Check if a given object implements the GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner interface.
 */
export function instanceOfGetReferenceEntityAttributesAttributeCodeOptions200ResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function GetReferenceEntityAttributesAttributeCodeOptions200ResponseInnerFromJSON(json: any): GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner {
    return GetReferenceEntityAttributesAttributeCodeOptions200ResponseInnerFromJSONTyped(json, false);
}

export function GetReferenceEntityAttributesAttributeCodeOptions200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AttributesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
    };
}

export function GetReferenceEntityAttributesAttributeCodeOptions200ResponseInnerToJSON(value?: GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AttributesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
    };
}

