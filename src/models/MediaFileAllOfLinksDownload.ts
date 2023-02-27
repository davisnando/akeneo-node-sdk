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
 * @interface MediaFileAllOfLinksDownload
 */
export interface MediaFileAllOfLinksDownload {
    /**
     * URI to download the binaries of the media file
     * @type {string}
     * @memberof MediaFileAllOfLinksDownload
     */
    href?: string;
}

/**
 * Check if a given object implements the MediaFileAllOfLinksDownload interface.
 */
export function instanceOfMediaFileAllOfLinksDownload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFileAllOfLinksDownloadFromJSON(json: any): MediaFileAllOfLinksDownload {
    return MediaFileAllOfLinksDownloadFromJSONTyped(json, false);
}

export function MediaFileAllOfLinksDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFileAllOfLinksDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
    };
}

export function MediaFileAllOfLinksDownloadToJSON(value?: MediaFileAllOfLinksDownload | null): any {
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

