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
import type { ProductModelsEmbedded } from './ProductModelsEmbedded';
import {
    ProductModelsEmbeddedFromJSON,
    ProductModelsEmbeddedFromJSONTyped,
    ProductModelsEmbeddedToJSON,
} from './ProductModelsEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface ProductModels
 */
export interface ProductModels {
    /**
     * 
     * @type {ProductModelsEmbedded}
     * @memberof ProductModels
     */
    embedded?: ProductModelsEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof ProductModels
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof ProductModels
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the ProductModels interface.
 */
export function instanceOfProductModels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsFromJSON(json: any): ProductModels {
    return ProductModelsFromJSONTyped(json, false);
}

export function ProductModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : ProductModelsEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function ProductModelsToJSON(value?: ProductModels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': ProductModelsEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

