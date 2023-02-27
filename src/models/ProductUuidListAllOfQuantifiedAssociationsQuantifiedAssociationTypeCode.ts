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
import type { ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels } from './ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels';
import {
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSON,
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSONTyped,
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsToJSON,
} from './ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels';
import type { ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProducts } from './ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProducts';
import {
    ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsFromJSON,
    ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsFromJSONTyped,
    ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsToJSON,
} from './ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProducts';

/**
 * 
 * @export
 * @interface ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
 */
export interface ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    /**
     * Array of objects containing product uuids and quantities with which the product is in relation
     * @type {Array<ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProducts>}
     * @memberof ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
     */
    products?: Array<ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProducts>;
    /**
     * Array of objects containing product model codes and quantities with which the product is in relation
     * @type {Array<ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels>}
     * @memberof ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
     */
    productModels?: Array<ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels>;
}

/**
 * Check if a given object implements the ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode interface.
 */
export function instanceOfProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json: any): ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    return ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped(json, false);
}

export function ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'products': !exists(json, 'products') ? undefined : ((json['products'] as Array<any>).map(ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsFromJSON)),
        'productModels': !exists(json, 'product_models') ? undefined : ((json['product_models'] as Array<any>).map(ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSON)),
    };
}

export function ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value?: ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'products': value.products === undefined ? undefined : ((value.products as Array<any>).map(ProductUuidListAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsToJSON)),
        'product_models': value.productModels === undefined ? undefined : ((value.productModels as Array<any>).map(ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsToJSON)),
    };
}

