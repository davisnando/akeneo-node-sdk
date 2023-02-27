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

/**
 * 
 * @export
 * @interface CurrencyList
 */
export interface CurrencyList {
    /**
     * 
     * @type {ProductListAllOfLinks}
     * @memberof CurrencyList
     */
    links?: ProductListAllOfLinks;
    /**
     * Currency code
     * @type {string}
     * @memberof CurrencyList
     */
    code: string;
    /**
     * Whether the currency is enabled
     * @type {boolean}
     * @memberof CurrencyList
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the CurrencyList interface.
 */
export function instanceOfCurrencyList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function CurrencyListFromJSON(json: any): CurrencyList {
    return CurrencyListFromJSONTyped(json, false);
}

export function CurrencyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductListAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function CurrencyListToJSON(value?: CurrencyList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductListAllOfLinksToJSON(value.links),
        'code': value.code,
        'enabled': value.enabled,
    };
}

