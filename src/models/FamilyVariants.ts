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

/**
 * 
 * @export
 * @interface FamilyVariants
 */
export interface FamilyVariants {
    /**
     * 
     * @type {ProductsLinks}
     * @memberof FamilyVariants
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof FamilyVariants
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the FamilyVariants interface.
 */
export function instanceOfFamilyVariants(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FamilyVariantsFromJSON(json: any): FamilyVariants {
    return FamilyVariantsFromJSONTyped(json, false);
}

export function FamilyVariantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FamilyVariants {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function FamilyVariantsToJSON(value?: FamilyVariants | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

