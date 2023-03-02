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
import type { AssociationTypesEmbeddedItemsInnerAllOfLabels } from './AssociationTypesEmbeddedItemsInnerAllOfLabels';
import {
    AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSON,
    AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AssociationTypesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AssociationTypesEmbeddedItemsInnerAllOfLabels';
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface AssociationTypesEmbeddedItemsInner
 */
export interface AssociationTypesEmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof AssociationTypesEmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Association type code
     * @type {string}
     * @memberof AssociationTypesEmbeddedItemsInner
     */
    code: string;
    /**
     * 
     * @type {AssociationTypesEmbeddedItemsInnerAllOfLabels}
     * @memberof AssociationTypesEmbeddedItemsInner
     */
    labels?: AssociationTypesEmbeddedItemsInnerAllOfLabels;
    /**
     * When true, the association is a quantified association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypesEmbeddedItemsInner
     */
    isQuantified?: boolean;
    /**
     * When true, the association is a two-way association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypesEmbeddedItemsInner
     */
    isTwoWay?: boolean;
}

/**
 * Check if a given object implements the AssociationTypesEmbeddedItemsInner interface.
 */
export function instanceOfAssociationTypesEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function AssociationTypesEmbeddedItemsInnerFromJSON(json: any): AssociationTypesEmbeddedItemsInner {
    return AssociationTypesEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function AssociationTypesEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociationTypesEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
        'isQuantified': !exists(json, 'is_quantified') ? undefined : json['is_quantified'],
        'isTwoWay': !exists(json, 'is_two_way') ? undefined : json['is_two_way'],
    };
}

export function AssociationTypesEmbeddedItemsInnerToJSON(value?: AssociationTypesEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'code': value.code,
        'labels': AssociationTypesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
        'is_quantified': value.isQuantified,
        'is_two_way': value.isTwoWay,
    };
}

