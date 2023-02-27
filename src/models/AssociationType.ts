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
import type { AssociationTypesPostRequestLabels } from './AssociationTypesPostRequestLabels';
import {
    AssociationTypesPostRequestLabelsFromJSON,
    AssociationTypesPostRequestLabelsFromJSONTyped,
    AssociationTypesPostRequestLabelsToJSON,
} from './AssociationTypesPostRequestLabels';

/**
 * 
 * @export
 * @interface AssociationType
 */
export interface AssociationType {
    /**
     * Association type code
     * @type {string}
     * @memberof AssociationType
     */
    code: string;
    /**
     * 
     * @type {AssociationTypesPostRequestLabels}
     * @memberof AssociationType
     */
    labels?: AssociationTypesPostRequestLabels;
    /**
     * When true, the association is a quantified association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationType
     */
    isQuantified?: boolean;
    /**
     * When true, the association is a two-way association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationType
     */
    isTwoWay?: boolean;
}

/**
 * Check if a given object implements the AssociationType interface.
 */
export function instanceOfAssociationType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function AssociationTypeFromJSON(json: any): AssociationType {
    return AssociationTypeFromJSONTyped(json, false);
}

export function AssociationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AssociationTypesPostRequestLabelsFromJSON(json['labels']),
        'isQuantified': !exists(json, 'is_quantified') ? undefined : json['is_quantified'],
        'isTwoWay': !exists(json, 'is_two_way') ? undefined : json['is_two_way'],
    };
}

export function AssociationTypeToJSON(value?: AssociationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AssociationTypesPostRequestLabelsToJSON(value.labels),
        'is_quantified': value.isQuantified,
        'is_two_way': value.isTwoWay,
    };
}

