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
import type { PostAttributesRequestGroupLabels } from './PostAttributesRequestGroupLabels';
import {
    PostAttributesRequestGroupLabelsFromJSON,
    PostAttributesRequestGroupLabelsFromJSONTyped,
    PostAttributesRequestGroupLabelsToJSON,
} from './PostAttributesRequestGroupLabels';
import type { PostAttributesRequestLabels } from './PostAttributesRequestLabels';
import {
    PostAttributesRequestLabelsFromJSON,
    PostAttributesRequestLabelsFromJSONTyped,
    PostAttributesRequestLabelsToJSON,
} from './PostAttributesRequestLabels';
import type { PostAttributesRequestTableConfigurationInner } from './PostAttributesRequestTableConfigurationInner';
import {
    PostAttributesRequestTableConfigurationInnerFromJSON,
    PostAttributesRequestTableConfigurationInnerFromJSONTyped,
    PostAttributesRequestTableConfigurationInnerToJSON,
} from './PostAttributesRequestTableConfigurationInner';

/**
 * 
 * @export
 * @interface PatchAttributesRequest
 */
export interface PatchAttributesRequest {
    /**
     * Attribute code
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    code: string;
    /**
     * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    type: PatchAttributesRequestTypeEnum;
    /**
     * 
     * @type {PostAttributesRequestLabels}
     * @memberof PatchAttributesRequest
     */
    labels?: PostAttributesRequestLabels;
    /**
     * Attribute group
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    group: string;
    /**
     * 
     * @type {PostAttributesRequestGroupLabels}
     * @memberof PatchAttributesRequest
     */
    groupLabels?: PostAttributesRequestGroupLabels;
    /**
     * Order of the attribute in its group
     * @type {number}
     * @memberof PatchAttributesRequest
     */
    sortOrder?: number;
    /**
     * Whether the attribute is localizable, i.e. can have one value by locale
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    localizable?: boolean;
    /**
     * Whether the attribute is scopable, i.e. can have one value by channel
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    scopable?: boolean;
    /**
     * To make the attribute locale specfic, specify here for which locales it is specific
     * @type {Array<string>}
     * @memberof PatchAttributesRequest
     */
    availableLocales?: Array<string>;
    /**
     * Whether two values for the attribute cannot be the same
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    unique?: boolean;
    /**
     * Whether the attribute can be used as a filter for the product grid in the PIM user interface
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    useableAsGridFilter?: boolean;
    /**
     * Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
     * @type {number}
     * @memberof PatchAttributesRequest
     */
    maxCharacters?: number;
    /**
     * Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    validationRule?: string;
    /**
     * Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    validationRegexp?: string;
    /**
     * Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    wysiwygEnabled?: boolean;
    /**
     * Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    numberMin?: string;
    /**
     * Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    numberMax?: string;
    /**
     * Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    decimalsAllowed?: boolean;
    /**
     * Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    negativeAllowed?: boolean;
    /**
     * Metric family when the attribute type is `pim_catalog_metric`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    metricFamily?: string;
    /**
     * Default metric unit when the attribute type is `pim_catalog_metric`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    defaultMetricUnit?: string;
    /**
     * Minimum date allowed when the attribute type is `pim_catalog_date`
     * @type {Date}
     * @memberof PatchAttributesRequest
     */
    dateMin?: Date;
    /**
     * Maximum date allowed when the attribute type is `pim_catalog_date`
     * @type {Date}
     * @memberof PatchAttributesRequest
     */
    dateMax?: Date;
    /**
     * Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
     * @type {Array<string>}
     * @memberof PatchAttributesRequest
     */
    allowedExtensions?: Array<string>;
    /**
     * Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    maxFileSize?: string;
    /**
     * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
     * @type {string}
     * @memberof PatchAttributesRequest
     */
    referenceDataName?: string;
    /**
     * Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0)
     * @type {boolean}
     * @memberof PatchAttributesRequest
     */
    defaultValue?: boolean;
    /**
     * Configuration of the Table attribute (columns)
     * @type {Array<PostAttributesRequestTableConfigurationInner>}
     * @memberof PatchAttributesRequest
     */
    tableConfiguration?: Array<PostAttributesRequestTableConfigurationInner>;
}


/**
 * @export
 */
export const PatchAttributesRequestTypeEnum = {
    PimCatalogIdentifier: 'pim_catalog_identifier',
    PimCatalogMetric: 'pim_catalog_metric',
    PimCatalogNumber: 'pim_catalog_number',
    PimCatalogReferenceDataMultiSelect: 'pim_catalog_reference_data_multi_select',
    PimCatalogReferenceDataSimpleSelect: 'pim_catalog_reference_data_simple_select',
    PimCatalogSimpleselect: 'pim_catalog_simpleselect',
    PimCatalogMultiselect: 'pim_catalog_multiselect',
    PimCatalogDate: 'pim_catalog_date',
    PimCatalogTextarea: 'pim_catalog_textarea',
    PimCatalogText: 'pim_catalog_text',
    PimCatalogFile: 'pim_catalog_file',
    PimCatalogImage: 'pim_catalog_image',
    PimCatalogPriceCollection: 'pim_catalog_price_collection',
    PimCatalogBoolean: 'pim_catalog_boolean',
    AkeneoReferenceEntity: 'akeneo_reference_entity',
    AkeneoReferenceEntityCollection: 'akeneo_reference_entity_collection',
    PimCatalogAssetCollection: 'pim_catalog_asset_collection'
} as const;
export type PatchAttributesRequestTypeEnum = typeof PatchAttributesRequestTypeEnum[keyof typeof PatchAttributesRequestTypeEnum];


/**
 * Check if a given object implements the PatchAttributesRequest interface.
 */
export function instanceOfPatchAttributesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "group" in value;

    return isInstance;
}

export function PatchAttributesRequestFromJSON(json: any): PatchAttributesRequest {
    return PatchAttributesRequestFromJSONTyped(json, false);
}

export function PatchAttributesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchAttributesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'type': json['type'],
        'labels': !exists(json, 'labels') ? undefined : PostAttributesRequestLabelsFromJSON(json['labels']),
        'group': json['group'],
        'groupLabels': !exists(json, 'group_labels') ? undefined : PostAttributesRequestGroupLabelsFromJSON(json['group_labels']),
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'localizable': !exists(json, 'localizable') ? undefined : json['localizable'],
        'scopable': !exists(json, 'scopable') ? undefined : json['scopable'],
        'availableLocales': !exists(json, 'available_locales') ? undefined : json['available_locales'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'useableAsGridFilter': !exists(json, 'useable_as_grid_filter') ? undefined : json['useable_as_grid_filter'],
        'maxCharacters': !exists(json, 'max_characters') ? undefined : json['max_characters'],
        'validationRule': !exists(json, 'validation_rule') ? undefined : json['validation_rule'],
        'validationRegexp': !exists(json, 'validation_regexp') ? undefined : json['validation_regexp'],
        'wysiwygEnabled': !exists(json, 'wysiwyg_enabled') ? undefined : json['wysiwyg_enabled'],
        'numberMin': !exists(json, 'number_min') ? undefined : json['number_min'],
        'numberMax': !exists(json, 'number_max') ? undefined : json['number_max'],
        'decimalsAllowed': !exists(json, 'decimals_allowed') ? undefined : json['decimals_allowed'],
        'negativeAllowed': !exists(json, 'negative_allowed') ? undefined : json['negative_allowed'],
        'metricFamily': !exists(json, 'metric_family') ? undefined : json['metric_family'],
        'defaultMetricUnit': !exists(json, 'default_metric_unit') ? undefined : json['default_metric_unit'],
        'dateMin': !exists(json, 'date_min') ? undefined : (new Date(json['date_min'])),
        'dateMax': !exists(json, 'date_max') ? undefined : (new Date(json['date_max'])),
        'allowedExtensions': !exists(json, 'allowed_extensions') ? undefined : json['allowed_extensions'],
        'maxFileSize': !exists(json, 'max_file_size') ? undefined : json['max_file_size'],
        'referenceDataName': !exists(json, 'reference_data_name') ? undefined : json['reference_data_name'],
        'defaultValue': !exists(json, 'default_value') ? undefined : json['default_value'],
        'tableConfiguration': !exists(json, 'table_configuration') ? undefined : ((json['table_configuration'] as Array<any>).map(PostAttributesRequestTableConfigurationInnerFromJSON)),
    };
}

export function PatchAttributesRequestToJSON(value?: PatchAttributesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'type': value.type,
        'labels': PostAttributesRequestLabelsToJSON(value.labels),
        'group': value.group,
        'group_labels': PostAttributesRequestGroupLabelsToJSON(value.groupLabels),
        'sort_order': value.sortOrder,
        'localizable': value.localizable,
        'scopable': value.scopable,
        'available_locales': value.availableLocales,
        'unique': value.unique,
        'useable_as_grid_filter': value.useableAsGridFilter,
        'max_characters': value.maxCharacters,
        'validation_rule': value.validationRule,
        'validation_regexp': value.validationRegexp,
        'wysiwyg_enabled': value.wysiwygEnabled,
        'number_min': value.numberMin,
        'number_max': value.numberMax,
        'decimals_allowed': value.decimalsAllowed,
        'negative_allowed': value.negativeAllowed,
        'metric_family': value.metricFamily,
        'default_metric_unit': value.defaultMetricUnit,
        'date_min': value.dateMin === undefined ? undefined : (value.dateMin.toISOString()),
        'date_max': value.dateMax === undefined ? undefined : (value.dateMax.toISOString()),
        'allowed_extensions': value.allowedExtensions,
        'max_file_size': value.maxFileSize,
        'reference_data_name': value.referenceDataName,
        'default_value': value.defaultValue,
        'table_configuration': value.tableConfiguration === undefined ? undefined : ((value.tableConfiguration as Array<any>).map(PostAttributesRequestTableConfigurationInnerToJSON)),
    };
}

