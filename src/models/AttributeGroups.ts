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
import type { AttributeGroupsEmbedded } from './AttributeGroupsEmbedded';
import {
    AttributeGroupsEmbeddedFromJSON,
    AttributeGroupsEmbeddedFromJSONTyped,
    AttributeGroupsEmbeddedToJSON,
} from './AttributeGroupsEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface AttributeGroups
 */
export interface AttributeGroups {
    /**
     * 
     * @type {AttributeGroupsEmbedded}
     * @memberof AttributeGroups
     */
    embedded?: AttributeGroupsEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof AttributeGroups
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof AttributeGroups
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the AttributeGroups interface.
 */
export function instanceOfAttributeGroups(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeGroupsFromJSON(json: any): AttributeGroups {
    return AttributeGroupsFromJSONTyped(json, false);
}

export function AttributeGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeGroups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : AttributeGroupsEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function AttributeGroupsToJSON(value?: AttributeGroups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': AttributeGroupsEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

