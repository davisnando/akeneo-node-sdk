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
 * @interface GetSystemInformation200Response
 */
export interface GetSystemInformation200Response {
    /**
     * Version of the PIM
     * @type {string}
     * @memberof GetSystemInformation200Response
     */
    version?: string;
    /**
     * Edition of the PIM
     * @type {string}
     * @memberof GetSystemInformation200Response
     */
    edition?: string;
}

/**
 * Check if a given object implements the GetSystemInformation200Response interface.
 */
export function instanceOfGetSystemInformation200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetSystemInformation200ResponseFromJSON(json: any): GetSystemInformation200Response {
    return GetSystemInformation200ResponseFromJSONTyped(json, false);
}

export function GetSystemInformation200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSystemInformation200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'edition': !exists(json, 'edition') ? undefined : json['edition'],
    };
}

export function GetSystemInformation200ResponseToJSON(value?: GetSystemInformation200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'edition': value.edition,
    };
}

