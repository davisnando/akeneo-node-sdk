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
import type { PostFamiliesRequestAttributeRequirements } from './PostFamiliesRequestAttributeRequirements';
import {
    PostFamiliesRequestAttributeRequirementsFromJSON,
    PostFamiliesRequestAttributeRequirementsFromJSONTyped,
    PostFamiliesRequestAttributeRequirementsToJSON,
} from './PostFamiliesRequestAttributeRequirements';
import type { PostFamiliesRequestLabels } from './PostFamiliesRequestLabels';
import {
    PostFamiliesRequestLabelsFromJSON,
    PostFamiliesRequestLabelsFromJSONTyped,
    PostFamiliesRequestLabelsToJSON,
} from './PostFamiliesRequestLabels';

/**
 * 
 * @export
 * @interface PostFamiliesRequest
 */
export interface PostFamiliesRequest {
    /**
     * Family code
     * @type {string}
     * @memberof PostFamiliesRequest
     */
    code: string;
    /**
     * Attribute code used as label
     * @type {string}
     * @memberof PostFamiliesRequest
     */
    attributeAsLabel: string;
    /**
     * Attribute code used as the main picture in the user interface (only since v2.0)
     * @type {string}
     * @memberof PostFamiliesRequest
     */
    attributeAsImage?: string;
    /**
     * Attributes codes that compose the family
     * @type {Array<string>}
     * @memberof PostFamiliesRequest
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {PostFamiliesRequestAttributeRequirements}
     * @memberof PostFamiliesRequest
     */
    attributeRequirements?: PostFamiliesRequestAttributeRequirements;
    /**
     * 
     * @type {PostFamiliesRequestLabels}
     * @memberof PostFamiliesRequest
     */
    labels?: PostFamiliesRequestLabels;
}

/**
 * Check if a given object implements the PostFamiliesRequest interface.
 */
export function instanceOfPostFamiliesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "attributeAsLabel" in value;

    return isInstance;
}

export function PostFamiliesRequestFromJSON(json: any): PostFamiliesRequest {
    return PostFamiliesRequestFromJSONTyped(json, false);
}

export function PostFamiliesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFamiliesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'attributeAsLabel': json['attribute_as_label'],
        'attributeAsImage': !exists(json, 'attribute_as_image') ? undefined : json['attribute_as_image'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'attributeRequirements': !exists(json, 'attribute_requirements') ? undefined : PostFamiliesRequestAttributeRequirementsFromJSON(json['attribute_requirements']),
        'labels': !exists(json, 'labels') ? undefined : PostFamiliesRequestLabelsFromJSON(json['labels']),
    };
}

export function PostFamiliesRequestToJSON(value?: PostFamiliesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'attribute_as_label': value.attributeAsLabel,
        'attribute_as_image': value.attributeAsImage,
        'attributes': value.attributes,
        'attribute_requirements': PostFamiliesRequestAttributeRequirementsToJSON(value.attributeRequirements),
        'labels': PostFamiliesRequestLabelsToJSON(value.labels),
    };
}

