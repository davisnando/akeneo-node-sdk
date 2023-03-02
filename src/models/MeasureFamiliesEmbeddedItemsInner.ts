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
import type { MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInner } from './MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInner';
import {
    MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInnerFromJSON,
    MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInnerFromJSONTyped,
    MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInnerToJSON,
} from './MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInner';
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface MeasureFamiliesEmbeddedItemsInner
 */
export interface MeasureFamiliesEmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof MeasureFamiliesEmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Measure family code
     * @type {string}
     * @memberof MeasureFamiliesEmbeddedItemsInner
     */
    code: string;
    /**
     * Measure family standard
     * @type {string}
     * @memberof MeasureFamiliesEmbeddedItemsInner
     */
    standard?: string;
    /**
     * Family units
     * @type {Array<MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInner>}
     * @memberof MeasureFamiliesEmbeddedItemsInner
     */
    units?: Array<MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInner>;
}

/**
 * Check if a given object implements the MeasureFamiliesEmbeddedItemsInner interface.
 */
export function instanceOfMeasureFamiliesEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function MeasureFamiliesEmbeddedItemsInnerFromJSON(json: any): MeasureFamiliesEmbeddedItemsInner {
    return MeasureFamiliesEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function MeasureFamiliesEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasureFamiliesEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'standard': !exists(json, 'standard') ? undefined : json['standard'],
        'units': !exists(json, 'units') ? undefined : ((json['units'] as Array<any>).map(MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInnerFromJSON)),
    };
}

export function MeasureFamiliesEmbeddedItemsInnerToJSON(value?: MeasureFamiliesEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'code': value.code,
        'standard': value.standard,
        'units': value.units === undefined ? undefined : ((value.units as Array<any>).map(MeasureFamiliesEmbeddedItemsInnerAllOfUnitsInnerToJSON)),
    };
}

