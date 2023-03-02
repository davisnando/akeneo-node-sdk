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
import type { Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode } from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode';
import {
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON,
} from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode';

/**
 * Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0)
 * @export
 * @interface Products1EmbeddedItemsInnerAllOfQuantifiedAssociations
 */
export interface Products1EmbeddedItemsInnerAllOfQuantifiedAssociations {
    /**
     * 
     * @type {Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode}
     * @memberof Products1EmbeddedItemsInnerAllOfQuantifiedAssociations
     */
    quantifiedAssociationTypeCode?: Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode;
}

/**
 * Check if a given object implements the Products1EmbeddedItemsInnerAllOfQuantifiedAssociations interface.
 */
export function instanceOfProducts1EmbeddedItemsInnerAllOfQuantifiedAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON(json: any): Products1EmbeddedItemsInnerAllOfQuantifiedAssociations {
    return Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped(json, false);
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Products1EmbeddedItemsInnerAllOfQuantifiedAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantifiedAssociationTypeCode': !exists(json, 'quantifiedAssociationTypeCode') ? undefined : Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json['quantifiedAssociationTypeCode']),
    };
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON(value?: Products1EmbeddedItemsInnerAllOfQuantifiedAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantifiedAssociationTypeCode': Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value.quantifiedAssociationTypeCode),
    };
}

