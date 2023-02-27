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
import type { ProductListAllOf1Associations } from './ProductListAllOf1Associations';
import {
    ProductListAllOf1AssociationsFromJSON,
    ProductListAllOf1AssociationsFromJSONTyped,
    ProductListAllOf1AssociationsToJSON,
} from './ProductListAllOf1Associations';
import type { ProductListAllOf1Completenesses } from './ProductListAllOf1Completenesses';
import {
    ProductListAllOf1CompletenessesFromJSON,
    ProductListAllOf1CompletenessesFromJSONTyped,
    ProductListAllOf1CompletenessesToJSON,
} from './ProductListAllOf1Completenesses';
import type { ProductListAllOf1Metadata } from './ProductListAllOf1Metadata';
import {
    ProductListAllOf1MetadataFromJSON,
    ProductListAllOf1MetadataFromJSONTyped,
    ProductListAllOf1MetadataToJSON,
} from './ProductListAllOf1Metadata';
import type { ProductListAllOf1QuantifiedAssociations } from './ProductListAllOf1QuantifiedAssociations';
import {
    ProductListAllOf1QuantifiedAssociationsFromJSON,
    ProductListAllOf1QuantifiedAssociationsFromJSONTyped,
    ProductListAllOf1QuantifiedAssociationsToJSON,
} from './ProductListAllOf1QuantifiedAssociations';
import type { ProductListAllOf1Values } from './ProductListAllOf1Values';
import {
    ProductListAllOf1ValuesFromJSON,
    ProductListAllOf1ValuesFromJSONTyped,
    ProductListAllOf1ValuesToJSON,
} from './ProductListAllOf1Values';

/**
 * 
 * @export
 * @interface ProductListAllOf1
 */
export interface ProductListAllOf1 {
    /**
     * Product UUID
     * @type {string}
     * @memberof ProductListAllOf1
     */
    uuid?: string;
    /**
     * Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
     * @type {string}
     * @memberof ProductListAllOf1
     */
    identifier: string;
    /**
     * Whether the product is enabled
     * @type {boolean}
     * @memberof ProductListAllOf1
     */
    enabled?: boolean;
    /**
     * <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements.
     * @type {string}
     * @memberof ProductListAllOf1
     */
    family?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified
     * @type {Array<string>}
     * @memberof ProductListAllOf1
     */
    categories?: Array<string>;
    /**
     * Codes of the groups to which the product belong
     * @type {Array<string>}
     * @memberof ProductListAllOf1
     */
    groups?: Array<string>;
    /**
     * Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
     * @type {string}
     * @memberof ProductListAllOf1
     */
    parent?: string;
    /**
     * 
     * @type {ProductListAllOf1Values}
     * @memberof ProductListAllOf1
     */
    values?: ProductListAllOf1Values;
    /**
     * 
     * @type {ProductListAllOf1Associations}
     * @memberof ProductListAllOf1
     */
    associations?: ProductListAllOf1Associations;
    /**
     * 
     * @type {ProductListAllOf1QuantifiedAssociations}
     * @memberof ProductListAllOf1
     */
    quantifiedAssociations?: ProductListAllOf1QuantifiedAssociations;
    /**
     * Date of creation
     * @type {string}
     * @memberof ProductListAllOf1
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof ProductListAllOf1
     */
    updated?: string;
    /**
     * 
     * @type {ProductListAllOf1Metadata}
     * @memberof ProductListAllOf1
     */
    metadata?: ProductListAllOf1Metadata;
    /**
     * Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true")
     * @type {object}
     * @memberof ProductListAllOf1
     */
    qualityScores?: object;
    /**
     * Product completenesses for each channel/locale combination (only available on SaaS platforms, and when the "with_completenesses" query parameter is set to "true")
     * @type {Array<ProductListAllOf1Completenesses>}
     * @memberof ProductListAllOf1
     */
    completenesses?: Array<ProductListAllOf1Completenesses>;
}

/**
 * Check if a given object implements the ProductListAllOf1 interface.
 */
export function instanceOfProductListAllOf1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function ProductListAllOf1FromJSON(json: any): ProductListAllOf1 {
    return ProductListAllOf1FromJSONTyped(json, false);
}

export function ProductListAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductListAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'identifier': json['identifier'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'values': !exists(json, 'values') ? undefined : ProductListAllOf1ValuesFromJSON(json['values']),
        'associations': !exists(json, 'associations') ? undefined : ProductListAllOf1AssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : ProductListAllOf1QuantifiedAssociationsFromJSON(json['quantified_associations']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : ProductListAllOf1MetadataFromJSON(json['metadata']),
        'qualityScores': !exists(json, 'quality_scores') ? undefined : json['quality_scores'],
        'completenesses': !exists(json, 'completenesses') ? undefined : ((json['completenesses'] as Array<any>).map(ProductListAllOf1CompletenessesFromJSON)),
    };
}

export function ProductListAllOf1ToJSON(value?: ProductListAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'identifier': value.identifier,
        'enabled': value.enabled,
        'family': value.family,
        'categories': value.categories,
        'groups': value.groups,
        'parent': value.parent,
        'values': ProductListAllOf1ValuesToJSON(value.values),
        'associations': ProductListAllOf1AssociationsToJSON(value.associations),
        'quantified_associations': ProductListAllOf1QuantifiedAssociationsToJSON(value.quantifiedAssociations),
        'created': value.created,
        'updated': value.updated,
        'metadata': ProductListAllOf1MetadataToJSON(value.metadata),
        'quality_scores': value.qualityScores,
        'completenesses': value.completenesses === undefined ? undefined : ((value.completenesses as Array<any>).map(ProductListAllOf1CompletenessesToJSON)),
    };
}

