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
import type { PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode } from './PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode';
import {
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSON,
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSONTyped,
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeToJSON,
} from './PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode';

/**
 * Several associations related to groups and/or other published products, grouped by association types
 * @export
 * @interface PublishedProductsEmbeddedItemsInnerAllOfAssociations
 */
export interface PublishedProductsEmbeddedItemsInnerAllOfAssociations {
    /**
     * 
     * @type {PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode}
     * @memberof PublishedProductsEmbeddedItemsInnerAllOfAssociations
     */
    associationTypeCode?: PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCode;
}

/**
 * Check if a given object implements the PublishedProductsEmbeddedItemsInnerAllOfAssociations interface.
 */
export function instanceOfPublishedProductsEmbeddedItemsInnerAllOfAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSON(json: any): PublishedProductsEmbeddedItemsInnerAllOfAssociations {
    return PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json, false);
}

export function PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedProductsEmbeddedItemsInnerAllOfAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associationTypeCode': !exists(json, 'associationTypeCode') ? undefined : PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSON(json['associationTypeCode']),
    };
}

export function PublishedProductsEmbeddedItemsInnerAllOfAssociationsToJSON(value?: PublishedProductsEmbeddedItemsInnerAllOfAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associationTypeCode': PublishedProductsEmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeToJSON(value.associationTypeCode),
    };
}

