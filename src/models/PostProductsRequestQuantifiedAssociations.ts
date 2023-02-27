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
import type { PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCode } from './PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCode';
import {
    PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON,
    PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped,
    PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON,
} from './PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCode';

/**
 * Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0)
 * @export
 * @interface PostProductsRequestQuantifiedAssociations
 */
export interface PostProductsRequestQuantifiedAssociations {
    /**
     * 
     * @type {PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCode}
     * @memberof PostProductsRequestQuantifiedAssociations
     */
    quantifiedAssociationTypeCode?: PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCode;
}

/**
 * Check if a given object implements the PostProductsRequestQuantifiedAssociations interface.
 */
export function instanceOfPostProductsRequestQuantifiedAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostProductsRequestQuantifiedAssociationsFromJSON(json: any): PostProductsRequestQuantifiedAssociations {
    return PostProductsRequestQuantifiedAssociationsFromJSONTyped(json, false);
}

export function PostProductsRequestQuantifiedAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProductsRequestQuantifiedAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantifiedAssociationTypeCode': !exists(json, 'quantifiedAssociationTypeCode') ? undefined : PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json['quantifiedAssociationTypeCode']),
    };
}

export function PostProductsRequestQuantifiedAssociationsToJSON(value?: PostProductsRequestQuantifiedAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantifiedAssociationTypeCode': PostProductsRequestQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value.quantifiedAssociationTypeCode),
    };
}

