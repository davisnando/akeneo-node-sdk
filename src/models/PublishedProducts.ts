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
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';
import type { PublishedProductsEmbedded } from './PublishedProductsEmbedded';
import {
    PublishedProductsEmbeddedFromJSON,
    PublishedProductsEmbeddedFromJSONTyped,
    PublishedProductsEmbeddedToJSON,
} from './PublishedProductsEmbedded';

/**
 * 
 * @export
 * @interface PublishedProducts
 */
export interface PublishedProducts {
    /**
     * 
     * @type {PublishedProductsEmbedded}
     * @memberof PublishedProducts
     */
    embedded?: PublishedProductsEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof PublishedProducts
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof PublishedProducts
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the PublishedProducts interface.
 */
export function instanceOfPublishedProducts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishedProductsFromJSON(json: any): PublishedProducts {
    return PublishedProductsFromJSONTyped(json, false);
}

export function PublishedProductsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedProducts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : PublishedProductsEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function PublishedProductsToJSON(value?: PublishedProducts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': PublishedProductsEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

