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
import type { ProductListAllOfLinks } from './ProductListAllOfLinks';
import {
    ProductListAllOfLinksFromJSON,
    ProductListAllOfLinksFromJSONTyped,
    ProductListAllOfLinksToJSON,
} from './ProductListAllOfLinks';
import type { ProductModelListAllOfAssociations } from './ProductModelListAllOfAssociations';
import {
    ProductModelListAllOfAssociationsFromJSON,
    ProductModelListAllOfAssociationsFromJSONTyped,
    ProductModelListAllOfAssociationsToJSON,
} from './ProductModelListAllOfAssociations';
import type { ProductModelListAllOfMetadata } from './ProductModelListAllOfMetadata';
import {
    ProductModelListAllOfMetadataFromJSON,
    ProductModelListAllOfMetadataFromJSONTyped,
    ProductModelListAllOfMetadataToJSON,
} from './ProductModelListAllOfMetadata';
import type { ProductModelListAllOfQuantifiedAssociations } from './ProductModelListAllOfQuantifiedAssociations';
import {
    ProductModelListAllOfQuantifiedAssociationsFromJSON,
    ProductModelListAllOfQuantifiedAssociationsFromJSONTyped,
    ProductModelListAllOfQuantifiedAssociationsToJSON,
} from './ProductModelListAllOfQuantifiedAssociations';

/**
 * 
 * @export
 * @interface ProductModelList
 */
export interface ProductModelList {
    /**
     * 
     * @type {ProductListAllOfLinks}
     * @memberof ProductModelList
     */
    links?: ProductListAllOfLinks;
    /**
     * Product model code
     * @type {string}
     * @memberof ProductModelList
     */
    code: string;
    /**
     * <a href='api-reference.html#Family'>Family</a> code  from which the product inherits its attributes and attributes requirements (since the 3.2)
     * @type {string}
     * @memberof ProductModelList
     */
    family?: string;
    /**
     * Family variant code from which the product model inherits its attributes and variant attributes
     * @type {string}
     * @memberof ProductModelList
     */
    familyVariant: string;
    /**
     * Code of the parent <a href='api-reference.html#Productmodel'>product model</a>. This parent can be modified since the 2.3.
     * @type {string}
     * @memberof ProductModelList
     */
    parent?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product model is categorized
     * @type {Array<string>}
     * @memberof ProductModelList
     */
    categories?: Array<string>;
    /**
     * Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
     * @type {{ [key: string]: Array<object>; }}
     * @memberof ProductModelList
     */
    values?: { [key: string]: Array<object>; };
    /**
     * 
     * @type {ProductModelListAllOfAssociations}
     * @memberof ProductModelList
     */
    associations?: ProductModelListAllOfAssociations;
    /**
     * 
     * @type {ProductModelListAllOfQuantifiedAssociations}
     * @memberof ProductModelList
     */
    quantifiedAssociations?: ProductModelListAllOfQuantifiedAssociations;
    /**
     * Date of creation
     * @type {string}
     * @memberof ProductModelList
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof ProductModelList
     */
    updated?: string;
    /**
     * 
     * @type {ProductModelListAllOfMetadata}
     * @memberof ProductModelList
     */
    metadata?: ProductModelListAllOfMetadata;
    /**
     * Product model quality scores for each channel/locale combination (<strong>only available since the 7.0 version</strong> and when the "with_quality_scores" query parameter is set to "true")
     * @type {object}
     * @memberof ProductModelList
     */
    qualityScores?: object;
}

/**
 * Check if a given object implements the ProductModelList interface.
 */
export function instanceOfProductModelList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "familyVariant" in value;

    return isInstance;
}

export function ProductModelListFromJSON(json: any): ProductModelList {
    return ProductModelListFromJSONTyped(json, false);
}

export function ProductModelListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductListAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'familyVariant': json['family_variant'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'associations': !exists(json, 'associations') ? undefined : ProductModelListAllOfAssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : ProductModelListAllOfQuantifiedAssociationsFromJSON(json['quantified_associations']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : ProductModelListAllOfMetadataFromJSON(json['metadata']),
        'qualityScores': !exists(json, 'quality_scores') ? undefined : json['quality_scores'],
    };
}

export function ProductModelListToJSON(value?: ProductModelList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductListAllOfLinksToJSON(value.links),
        'code': value.code,
        'family': value.family,
        'family_variant': value.familyVariant,
        'parent': value.parent,
        'categories': value.categories,
        'values': value.values,
        'associations': ProductModelListAllOfAssociationsToJSON(value.associations),
        'quantified_associations': ProductModelListAllOfQuantifiedAssociationsToJSON(value.quantifiedAssociations),
        'created': value.created,
        'updated': value.updated,
        'metadata': ProductModelListAllOfMetadataToJSON(value.metadata),
        'quality_scores': value.qualityScores,
    };
}

