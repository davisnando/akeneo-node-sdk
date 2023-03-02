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
import type { AttributesEmbeddedItemsInnerAllOfLabels } from './AttributesEmbeddedItemsInnerAllOfLabels';
import {
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSON,
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AttributesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AttributesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface GetAssetFamiliesCodeAttributes200ResponseInner
 */
export interface GetAssetFamiliesCodeAttributes200ResponseInner {
    /**
     * Attribute code
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    code: string;
    /**
     * 
     * @type {AttributesEmbeddedItemsInnerAllOfLabels}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    labels?: AttributesEmbeddedItemsInnerAllOfLabels;
    /**
     * Attribute type. See <a href='/concepts/asset-manager.html#asset-attribute'>type</a> section for more details.
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    type: GetAssetFamiliesCodeAttributes200ResponseInnerTypeEnum;
    /**
     * Whether the attribute is localizable, i.e. can have one value by locale
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    valuePerLocale?: boolean;
    /**
     * Whether the attribute is scopable, i.e. can have one value by channel
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    valuePerChannel?: boolean;
    /**
     * Whether the attribute should be part of the record's completeness calculation
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    isRequiredForCompleteness?: boolean;
    /**
     * Whether the attribute should be in read only mode only in the UI, but you can still update it with the API
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    isReadOnly?: boolean;
    /**
     * Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
     * @type {number}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    maxCharacters?: number;
    /**
     * Whether the UI should display a text area instead of a simple field when the attribute type is `text`
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    isTextarea?: boolean;
    /**
     * Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    isRichTextEditor?: boolean;
    /**
     * Validation rule type used to validate the attribute value when the attribute type is `text`
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    validationRule?: GetAssetFamiliesCodeAttributes200ResponseInnerValidationRuleEnum;
    /**
     * Regexp expression used to validate the attribute value when the attribute type is `text`
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    validationRegexp?: string;
    /**
     * Extensions allowed when the attribute type is `media_file`
     * @type {Array<string>}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    allowedExtensions?: Array<string>;
    /**
     * Max file size in MB when the attribute type is `media_file`
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    maxFileSize?: string;
    /**
     * Whether decimals are allowed when the attribute type is `number`
     * @type {boolean}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    decimalsAllowed?: boolean;
    /**
     * Minimum value allowed when the attribute type is `number`
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    minValue?: string;
    /**
     * Maximum value allowed when the attribute type is `number`
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    maxValue?: string;
    /**
     * For the `media_link` attribute type, it is the type of the media behind the url, to allow its preview in the PIM. For the `media_file` attribute type, it is the type of the file.
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    mediaType: GetAssetFamiliesCodeAttributes200ResponseInnerMediaTypeEnum;
    /**
     * Prefix of the `media_link` attribute type. The common url root that prefixes the link to the media
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    prefix?: string;
    /**
     * Suffix of the `media_link` attribute type. The common url suffix for the media
     * @type {string}
     * @memberof GetAssetFamiliesCodeAttributes200ResponseInner
     */
    suffix?: string;
}


/**
 * @export
 */
export const GetAssetFamiliesCodeAttributes200ResponseInnerTypeEnum = {
    Text: 'text',
    MediaLink: 'media_link',
    Number: 'number',
    MediaFile: 'media_file',
    SingleOption: 'single_option',
    MultipleOptions: 'multiple_options',
    ReferenceEntitySingleLink: 'reference_entity_single_link',
    ReferenceEntityMultipleLinks: 'reference_entity_multiple_links',
    Boolean: 'boolean'
} as const;
export type GetAssetFamiliesCodeAttributes200ResponseInnerTypeEnum = typeof GetAssetFamiliesCodeAttributes200ResponseInnerTypeEnum[keyof typeof GetAssetFamiliesCodeAttributes200ResponseInnerTypeEnum];

/**
 * @export
 */
export const GetAssetFamiliesCodeAttributes200ResponseInnerValidationRuleEnum = {
    Email: 'email',
    Url: 'url',
    Regexp: 'regexp',
    None: 'none'
} as const;
export type GetAssetFamiliesCodeAttributes200ResponseInnerValidationRuleEnum = typeof GetAssetFamiliesCodeAttributes200ResponseInnerValidationRuleEnum[keyof typeof GetAssetFamiliesCodeAttributes200ResponseInnerValidationRuleEnum];

/**
 * @export
 */
export const GetAssetFamiliesCodeAttributes200ResponseInnerMediaTypeEnum = {
    Image: 'image',
    Pdf: 'pdf',
    Youtube: 'youtube',
    Vimeo: 'vimeo',
    Other: 'other'
} as const;
export type GetAssetFamiliesCodeAttributes200ResponseInnerMediaTypeEnum = typeof GetAssetFamiliesCodeAttributes200ResponseInnerMediaTypeEnum[keyof typeof GetAssetFamiliesCodeAttributes200ResponseInnerMediaTypeEnum];


/**
 * Check if a given object implements the GetAssetFamiliesCodeAttributes200ResponseInner interface.
 */
export function instanceOfGetAssetFamiliesCodeAttributes200ResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mediaType" in value;

    return isInstance;
}

export function GetAssetFamiliesCodeAttributes200ResponseInnerFromJSON(json: any): GetAssetFamiliesCodeAttributes200ResponseInner {
    return GetAssetFamiliesCodeAttributes200ResponseInnerFromJSONTyped(json, false);
}

export function GetAssetFamiliesCodeAttributes200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAssetFamiliesCodeAttributes200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AttributesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
        'type': json['type'],
        'valuePerLocale': !exists(json, 'value_per_locale') ? undefined : json['value_per_locale'],
        'valuePerChannel': !exists(json, 'value_per_channel') ? undefined : json['value_per_channel'],
        'isRequiredForCompleteness': !exists(json, 'is_required_for_completeness') ? undefined : json['is_required_for_completeness'],
        'isReadOnly': !exists(json, 'is_read_only') ? undefined : json['is_read_only'],
        'maxCharacters': !exists(json, 'max_characters') ? undefined : json['max_characters'],
        'isTextarea': !exists(json, 'is_textarea') ? undefined : json['is_textarea'],
        'isRichTextEditor': !exists(json, 'is_rich_text_editor') ? undefined : json['is_rich_text_editor'],
        'validationRule': !exists(json, 'validation_rule') ? undefined : json['validation_rule'],
        'validationRegexp': !exists(json, 'validation_regexp') ? undefined : json['validation_regexp'],
        'allowedExtensions': !exists(json, 'allowed_extensions') ? undefined : json['allowed_extensions'],
        'maxFileSize': !exists(json, 'max_file_size') ? undefined : json['max_file_size'],
        'decimalsAllowed': !exists(json, 'decimals_allowed') ? undefined : json['decimals_allowed'],
        'minValue': !exists(json, 'min_value') ? undefined : json['min_value'],
        'maxValue': !exists(json, 'max_value') ? undefined : json['max_value'],
        'mediaType': json['media_type'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'suffix': !exists(json, 'suffix') ? undefined : json['suffix'],
    };
}

export function GetAssetFamiliesCodeAttributes200ResponseInnerToJSON(value?: GetAssetFamiliesCodeAttributes200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AttributesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
        'type': value.type,
        'value_per_locale': value.valuePerLocale,
        'value_per_channel': value.valuePerChannel,
        'is_required_for_completeness': value.isRequiredForCompleteness,
        'is_read_only': value.isReadOnly,
        'max_characters': value.maxCharacters,
        'is_textarea': value.isTextarea,
        'is_rich_text_editor': value.isRichTextEditor,
        'validation_rule': value.validationRule,
        'validation_regexp': value.validationRegexp,
        'allowed_extensions': value.allowedExtensions,
        'max_file_size': value.maxFileSize,
        'decimals_allowed': value.decimalsAllowed,
        'min_value': value.minValue,
        'max_value': value.maxValue,
        'media_type': value.mediaType,
        'prefix': value.prefix,
        'suffix': value.suffix,
    };
}

