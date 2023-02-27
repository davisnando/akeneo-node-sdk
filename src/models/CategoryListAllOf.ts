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
import type { CategoryListAllOfLabels } from './CategoryListAllOfLabels';
import {
    CategoryListAllOfLabelsFromJSON,
    CategoryListAllOfLabelsFromJSONTyped,
    CategoryListAllOfLabelsToJSON,
} from './CategoryListAllOfLabels';
import type { CategoryListAllOfValues } from './CategoryListAllOfValues';
import {
    CategoryListAllOfValuesFromJSON,
    CategoryListAllOfValuesFromJSONTyped,
    CategoryListAllOfValuesToJSON,
} from './CategoryListAllOfValues';

/**
 * 
 * @export
 * @interface CategoryListAllOf
 */
export interface CategoryListAllOf {
    /**
     * Category code
     * @type {string}
     * @memberof CategoryListAllOf
     */
    code: string;
    /**
     * Category code of the parent's category
     * @type {string}
     * @memberof CategoryListAllOf
     */
    parent?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof CategoryListAllOf
     */
    updated?: string;
    /**
     * Position of the category in its level, start from 1 (only available on SaaS platforms and when query parameter "with_position" is set to "true")
     * @type {number}
     * @memberof CategoryListAllOf
     */
    position?: number;
    /**
     * 
     * @type {CategoryListAllOfLabels}
     * @memberof CategoryListAllOf
     */
    labels?: CategoryListAllOfLabels;
    /**
     * 
     * @type {CategoryListAllOfValues}
     * @memberof CategoryListAllOf
     */
    values?: CategoryListAllOfValues;
}

/**
 * Check if a given object implements the CategoryListAllOf interface.
 */
export function instanceOfCategoryListAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function CategoryListAllOfFromJSON(json: any): CategoryListAllOf {
    return CategoryListAllOfFromJSONTyped(json, false);
}

export function CategoryListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'labels': !exists(json, 'labels') ? undefined : CategoryListAllOfLabelsFromJSON(json['labels']),
        'values': !exists(json, 'values') ? undefined : CategoryListAllOfValuesFromJSON(json['values']),
    };
}

export function CategoryListAllOfToJSON(value?: CategoryListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'parent': value.parent,
        'updated': value.updated,
        'position': value.position,
        'labels': CategoryListAllOfLabelsToJSON(value.labels),
        'values': CategoryListAllOfValuesToJSON(value.values),
    };
}

