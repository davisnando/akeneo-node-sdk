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
import type { PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownload } from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownload';
import {
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownloadFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownloadFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownloadToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownload';
import type { PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelf } from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelf';
import {
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelfFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelfFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelfToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelf';

/**
 * Links to get and download the variation file
 * @export
 * @interface PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink
 */
export interface PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink {
    /**
     * 
     * @type {PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelf}
     * @memberof PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink
     */
    self?: PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelf;
    /**
     * 
     * @type {PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownload}
     * @memberof PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink
     */
    download?: PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownload;
}

/**
 * Check if a given object implements the PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink interface.
 */
export function instanceOfPAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkFromJSON(json: any): PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink {
    return PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkFromJSONTyped(json, false);
}

export function PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelfFromJSON(json['self']),
        'download': !exists(json, 'download') ? undefined : PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownloadFromJSON(json['download']),
    };
}

export function PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkToJSON(value?: PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkSelfToJSON(value.self),
        'download': PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerLinkDownloadToJSON(value.download),
    };
}

