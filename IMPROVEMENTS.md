# Improvements

As the Swagger documentation of Akeneo is not 100% correct, some (manual) improvements
are listed here.

## Fetching

This repo contains the updated `akeneo-web-api.json`, which includes the manual changes
listed below. In case you want to retrieve the latest version of the Swagger
documentation, run the following:

```
make fetch
```

## Manual adjustments 

Note that there are currently some typos/bugs in the OpenAPI documentation. Replace all
occurrences of the following before generating and publishing.


### content type

```json
"Content-type" --> "Content-Type"
```

### _embedded properties

```json
"properties": {
    "_embedded": {
        ...
    }
}

// should be

"type": "object", 
"properties": {
    "_embedded": {
        ...
    }
}
```

### additionalProperties

Dynamic key-value pairs where the key can be anything should be marked with
`additionalProperties`. 

```json
"attributeCode" --> "additionalProperties"
```

Also, these `additionalProperties` should not be within a `properties`.

```json
"properties": {
    "additionalProperties": {
        ...
    }
}

// should be

"additionalProperties": {
    ...
}
```

## Building

To build and compile the typescript sources to javascript use:
```
make generate
```