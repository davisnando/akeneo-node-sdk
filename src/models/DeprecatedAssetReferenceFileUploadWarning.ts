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
import type { PostReferenceFilesLocaleCode201ResponseErrorsInner } from './PostReferenceFilesLocaleCode201ResponseErrorsInner';
import {
    PostReferenceFilesLocaleCode201ResponseErrorsInnerFromJSON,
    PostReferenceFilesLocaleCode201ResponseErrorsInnerFromJSONTyped,
    PostReferenceFilesLocaleCode201ResponseErrorsInnerToJSON,
} from './PostReferenceFilesLocaleCode201ResponseErrorsInner';

/**
 * 
 * @export
 * @interface DeprecatedAssetReferenceFileUploadWarning
 */
export interface DeprecatedAssetReferenceFileUploadWarning {
    /**
     * Message explaining the warning
     * @type {string}
     * @memberof DeprecatedAssetReferenceFileUploadWarning
     */
    message?: string;
    /**
     * 
     * @type {Array<PostReferenceFilesLocaleCode201ResponseErrorsInner>}
     * @memberof DeprecatedAssetReferenceFileUploadWarning
     */
    errors?: Array<PostReferenceFilesLocaleCode201ResponseErrorsInner>;
}

/**
 * Check if a given object implements the DeprecatedAssetReferenceFileUploadWarning interface.
 */
export function instanceOfDeprecatedAssetReferenceFileUploadWarning(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeprecatedAssetReferenceFileUploadWarningFromJSON(json: any): DeprecatedAssetReferenceFileUploadWarning {
    return DeprecatedAssetReferenceFileUploadWarningFromJSONTyped(json, false);
}

export function DeprecatedAssetReferenceFileUploadWarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeprecatedAssetReferenceFileUploadWarning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(PostReferenceFilesLocaleCode201ResponseErrorsInnerFromJSON)),
    };
}

export function DeprecatedAssetReferenceFileUploadWarningToJSON(value?: DeprecatedAssetReferenceFileUploadWarning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(PostReferenceFilesLocaleCode201ResponseErrorsInnerToJSON)),
    };
}

