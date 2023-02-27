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
import type { GetVariationFilesChannelCodeLocaleCode200ResponseLink } from './GetVariationFilesChannelCodeLocaleCode200ResponseLink';
import {
    GetVariationFilesChannelCodeLocaleCode200ResponseLinkFromJSON,
    GetVariationFilesChannelCodeLocaleCode200ResponseLinkFromJSONTyped,
    GetVariationFilesChannelCodeLocaleCode200ResponseLinkToJSON,
} from './GetVariationFilesChannelCodeLocaleCode200ResponseLink';

/**
 * 
 * @export
 * @interface DeprecatedAssetVariationFile
 */
export interface DeprecatedAssetVariationFile {
    /**
     * Code of the PAM asset variation file
     * @type {string}
     * @memberof DeprecatedAssetVariationFile
     */
    code?: string;
    /**
     * Locale of the PAM asset variation file, equal to `null` if the asset is not localizable
     * @type {string}
     * @memberof DeprecatedAssetVariationFile
     */
    locale?: string;
    /**
     * Channel of the PAM asset variation file
     * @type {string}
     * @memberof DeprecatedAssetVariationFile
     */
    scope?: string;
    /**
     * 
     * @type {GetVariationFilesChannelCodeLocaleCode200ResponseLink}
     * @memberof DeprecatedAssetVariationFile
     */
    link?: GetVariationFilesChannelCodeLocaleCode200ResponseLink;
}

/**
 * Check if a given object implements the DeprecatedAssetVariationFile interface.
 */
export function instanceOfDeprecatedAssetVariationFile(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeprecatedAssetVariationFileFromJSON(json: any): DeprecatedAssetVariationFile {
    return DeprecatedAssetVariationFileFromJSONTyped(json, false);
}

export function DeprecatedAssetVariationFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeprecatedAssetVariationFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'link': !exists(json, '_link') ? undefined : GetVariationFilesChannelCodeLocaleCode200ResponseLinkFromJSON(json['_link']),
    };
}

export function DeprecatedAssetVariationFileToJSON(value?: DeprecatedAssetVariationFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'locale': value.locale,
        'scope': value.scope,
        '_link': GetVariationFilesChannelCodeLocaleCode200ResponseLinkToJSON(value.link),
    };
}

