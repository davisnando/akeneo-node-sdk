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
 * @interface ProductUuidListAllOfAssociationsAssociationTypeCode
 */
export interface ProductUuidListAllOfAssociationsAssociationTypeCode {
    /**
     * Array of groups codes with which the product is in relation
     * @type {Array<string>}
     * @memberof ProductUuidListAllOfAssociationsAssociationTypeCode
     */
    groups?: Array<string>;
    /**
     * Array of product uuids with which the product is in relation
     * @type {Array<string>}
     * @memberof ProductUuidListAllOfAssociationsAssociationTypeCode
     */
    products?: Array<string>;
    /**
     * Array of product model codes with which the product is in relation (only available since the v2.1)
     * @type {Array<string>}
     * @memberof ProductUuidListAllOfAssociationsAssociationTypeCode
     */
    productModels?: Array<string>;
}

/**
 * Check if a given object implements the ProductUuidListAllOfAssociationsAssociationTypeCode interface.
 */
export function instanceOfProductUuidListAllOfAssociationsAssociationTypeCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductUuidListAllOfAssociationsAssociationTypeCodeFromJSON(json: any): ProductUuidListAllOfAssociationsAssociationTypeCode {
    return ProductUuidListAllOfAssociationsAssociationTypeCodeFromJSONTyped(json, false);
}

export function ProductUuidListAllOfAssociationsAssociationTypeCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductUuidListAllOfAssociationsAssociationTypeCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'products': !exists(json, 'products') ? undefined : json['products'],
        'productModels': !exists(json, 'product_models') ? undefined : json['product_models'],
    };
}

export function ProductUuidListAllOfAssociationsAssociationTypeCodeToJSON(value?: ProductUuidListAllOfAssociationsAssociationTypeCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': value.groups,
        'products': value.products,
        'product_models': value.productModels,
    };
}

