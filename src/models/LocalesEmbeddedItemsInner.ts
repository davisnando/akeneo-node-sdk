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
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface LocalesEmbeddedItemsInner
 */
export interface LocalesEmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof LocalesEmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Locale code
     * @type {string}
     * @memberof LocalesEmbeddedItemsInner
     */
    code: string;
    /**
     * Whether the locale is enabled
     * @type {boolean}
     * @memberof LocalesEmbeddedItemsInner
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the LocalesEmbeddedItemsInner interface.
 */
export function instanceOfLocalesEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function LocalesEmbeddedItemsInnerFromJSON(json: any): LocalesEmbeddedItemsInner {
    return LocalesEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function LocalesEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalesEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function LocalesEmbeddedItemsInnerToJSON(value?: LocalesEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'code': value.code,
        'enabled': value.enabled,
    };
}

