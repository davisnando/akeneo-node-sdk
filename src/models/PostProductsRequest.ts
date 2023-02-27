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
import type { PostProductsRequestAssociations } from './PostProductsRequestAssociations';
import {
    PostProductsRequestAssociationsFromJSON,
    PostProductsRequestAssociationsFromJSONTyped,
    PostProductsRequestAssociationsToJSON,
} from './PostProductsRequestAssociations';
import type { PostProductsRequestCompletenessesInner } from './PostProductsRequestCompletenessesInner';
import {
    PostProductsRequestCompletenessesInnerFromJSON,
    PostProductsRequestCompletenessesInnerFromJSONTyped,
    PostProductsRequestCompletenessesInnerToJSON,
} from './PostProductsRequestCompletenessesInner';
import type { PostProductsRequestMetadata } from './PostProductsRequestMetadata';
import {
    PostProductsRequestMetadataFromJSON,
    PostProductsRequestMetadataFromJSONTyped,
    PostProductsRequestMetadataToJSON,
} from './PostProductsRequestMetadata';
import type { PostProductsRequestQuantifiedAssociations } from './PostProductsRequestQuantifiedAssociations';
import {
    PostProductsRequestQuantifiedAssociationsFromJSON,
    PostProductsRequestQuantifiedAssociationsFromJSONTyped,
    PostProductsRequestQuantifiedAssociationsToJSON,
} from './PostProductsRequestQuantifiedAssociations';
import type { PostProductsRequestValues } from './PostProductsRequestValues';
import {
    PostProductsRequestValuesFromJSON,
    PostProductsRequestValuesFromJSONTyped,
    PostProductsRequestValuesToJSON,
} from './PostProductsRequestValues';

/**
 * 
 * @export
 * @interface PostProductsRequest
 */
export interface PostProductsRequest {
    /**
     * Product UUID
     * @type {string}
     * @memberof PostProductsRequest
     */
    uuid?: string;
    /**
     * Product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
     * @type {string}
     * @memberof PostProductsRequest
     */
    identifier: string;
    /**
     * Whether the product is enabled
     * @type {boolean}
     * @memberof PostProductsRequest
     */
    enabled?: boolean;
    /**
     * <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements.
     * @type {string}
     * @memberof PostProductsRequest
     */
    family?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified
     * @type {Array<string>}
     * @memberof PostProductsRequest
     */
    categories?: Array<string>;
    /**
     * Codes of the groups to which the product belong
     * @type {Array<string>}
     * @memberof PostProductsRequest
     */
    groups?: Array<string>;
    /**
     * Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
     * @type {string}
     * @memberof PostProductsRequest
     */
    parent?: string;
    /**
     * 
     * @type {PostProductsRequestValues}
     * @memberof PostProductsRequest
     */
    values?: PostProductsRequestValues;
    /**
     * 
     * @type {PostProductsRequestAssociations}
     * @memberof PostProductsRequest
     */
    associations?: PostProductsRequestAssociations;
    /**
     * 
     * @type {PostProductsRequestQuantifiedAssociations}
     * @memberof PostProductsRequest
     */
    quantifiedAssociations?: PostProductsRequestQuantifiedAssociations;
    /**
     * Date of creation
     * @type {string}
     * @memberof PostProductsRequest
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof PostProductsRequest
     */
    updated?: string;
    /**
     * 
     * @type {PostProductsRequestMetadata}
     * @memberof PostProductsRequest
     */
    metadata?: PostProductsRequestMetadata;
    /**
     * Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true")
     * @type {object}
     * @memberof PostProductsRequest
     */
    qualityScores?: object;
    /**
     * Product completenesses for each channel/locale combination (only available on SaaS platforms, and when the "with_completenesses" query parameter is set to "true")
     * @type {Array<PostProductsRequestCompletenessesInner>}
     * @memberof PostProductsRequest
     */
    completenesses?: Array<PostProductsRequestCompletenessesInner>;
}

/**
 * Check if a given object implements the PostProductsRequest interface.
 */
export function instanceOfPostProductsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function PostProductsRequestFromJSON(json: any): PostProductsRequest {
    return PostProductsRequestFromJSONTyped(json, false);
}

export function PostProductsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProductsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'identifier': json['identifier'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'values': !exists(json, 'values') ? undefined : PostProductsRequestValuesFromJSON(json['values']),
        'associations': !exists(json, 'associations') ? undefined : PostProductsRequestAssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : PostProductsRequestQuantifiedAssociationsFromJSON(json['quantified_associations']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : PostProductsRequestMetadataFromJSON(json['metadata']),
        'qualityScores': !exists(json, 'quality_scores') ? undefined : json['quality_scores'],
        'completenesses': !exists(json, 'completenesses') ? undefined : ((json['completenesses'] as Array<any>).map(PostProductsRequestCompletenessesInnerFromJSON)),
    };
}

export function PostProductsRequestToJSON(value?: PostProductsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'identifier': value.identifier,
        'enabled': value.enabled,
        'family': value.family,
        'categories': value.categories,
        'groups': value.groups,
        'parent': value.parent,
        'values': PostProductsRequestValuesToJSON(value.values),
        'associations': PostProductsRequestAssociationsToJSON(value.associations),
        'quantified_associations': PostProductsRequestQuantifiedAssociationsToJSON(value.quantifiedAssociations),
        'created': value.created,
        'updated': value.updated,
        'metadata': PostProductsRequestMetadataToJSON(value.metadata),
        'quality_scores': value.qualityScores,
        'completenesses': value.completenesses === undefined ? undefined : ((value.completenesses as Array<any>).map(PostProductsRequestCompletenessesInnerToJSON)),
    };
}

