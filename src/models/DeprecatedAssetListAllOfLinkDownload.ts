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
/**
 * 
 * @export
 * @interface DeprecatedAssetListAllOfLinkDownload
 */
export interface DeprecatedAssetListAllOfLinkDownload {
    /**
     * URI to download the variation file
     * @type {string}
     * @memberof DeprecatedAssetListAllOfLinkDownload
     */
    href?: string;
}

/**
 * Check if a given object implements the DeprecatedAssetListAllOfLinkDownload interface.
 */
export function instanceOfDeprecatedAssetListAllOfLinkDownload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeprecatedAssetListAllOfLinkDownloadFromJSON(json: any): DeprecatedAssetListAllOfLinkDownload {
    return DeprecatedAssetListAllOfLinkDownloadFromJSONTyped(json, false);
}

export function DeprecatedAssetListAllOfLinkDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeprecatedAssetListAllOfLinkDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
    };
}

export function DeprecatedAssetListAllOfLinkDownloadToJSON(value?: DeprecatedAssetListAllOfLinkDownload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
    };
}

