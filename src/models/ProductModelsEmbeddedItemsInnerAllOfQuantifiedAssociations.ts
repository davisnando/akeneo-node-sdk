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
import type { ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode } from './ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode';
import {
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode';

/**
 * Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0)
 * @export
 * @interface ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations
 */
export interface ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations {
    /**
     * 
     * @type {ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations
     */
    quantifiedAssociationTypeCode?: ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode;
}

/**
 * Check if a given object implements the ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations interface.
 */
export function instanceOfProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON(json: any): ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations {
    return ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped(json, false);
}

export function ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantifiedAssociationTypeCode': !exists(json, 'quantifiedAssociationTypeCode') ? undefined : ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json['quantifiedAssociationTypeCode']),
    };
}

export function ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON(value?: ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantifiedAssociationTypeCode': ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value.quantifiedAssociationTypeCode),
    };
}

