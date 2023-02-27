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
 * @interface PostToken200Response
 */
export interface PostToken200Response {
    /**
     * Authentication token that should be given in every authenticated request to the API
     * @type {string}
     * @memberof PostToken200Response
     */
    accessToken?: string;
    /**
     * Validity of the token given in seconds, 3600s = 1h by default
     * @type {number}
     * @memberof PostToken200Response
     */
    expiresIn?: number;
    /**
     * Token type, always equal to "bearer"
     * @type {string}
     * @memberof PostToken200Response
     */
    tokenType?: string;
    /**
     * Unused, always equal to "null"
     * @type {string}
     * @memberof PostToken200Response
     */
    scope?: string;
    /**
     * Use this token when your access token has expired. See <a href="/documentation/authentication.html#refresh-an-expired-token">Refresh an expired token</a> section for more details.
     * @type {string}
     * @memberof PostToken200Response
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the PostToken200Response interface.
 */
export function instanceOfPostToken200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostToken200ResponseFromJSON(json: any): PostToken200Response {
    return PostToken200ResponseFromJSONTyped(json, false);
}

export function PostToken200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostToken200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
        'expiresIn': !exists(json, 'expires_in') ? undefined : json['expires_in'],
        'tokenType': !exists(json, 'token_type') ? undefined : json['token_type'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'refreshToken': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
    };
}

export function PostToken200ResponseToJSON(value?: PostToken200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
        'expires_in': value.expiresIn,
        'token_type': value.tokenType,
        'scope': value.scope,
        'refresh_token': value.refreshToken,
    };
}

