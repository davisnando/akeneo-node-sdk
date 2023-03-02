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
import type { PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownload } from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownload';
import {
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownloadFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownloadFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownloadToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownload';

/**
 * Links to get and download the reference file
 * @export
 * @interface GetReferenceFilesLocaleCode200ResponseLink
 */
export interface GetReferenceFilesLocaleCode200ResponseLink {
    /**
     * 
     * @type {PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownload}
     * @memberof GetReferenceFilesLocaleCode200ResponseLink
     */
    download?: PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownload;
}

/**
 * Check if a given object implements the GetReferenceFilesLocaleCode200ResponseLink interface.
 */
export function instanceOfGetReferenceFilesLocaleCode200ResponseLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetReferenceFilesLocaleCode200ResponseLinkFromJSON(json: any): GetReferenceFilesLocaleCode200ResponseLink {
    return GetReferenceFilesLocaleCode200ResponseLinkFromJSONTyped(json, false);
}

export function GetReferenceFilesLocaleCode200ResponseLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReferenceFilesLocaleCode200ResponseLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'download': !exists(json, 'download') ? undefined : PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownloadFromJSON(json['download']),
    };
}

export function GetReferenceFilesLocaleCode200ResponseLinkToJSON(value?: GetReferenceFilesLocaleCode200ResponseLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'download': PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkDownloadToJSON(value.download),
    };
}

