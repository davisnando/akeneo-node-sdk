fetch:
	wget https://raw.githubusercontent.com/akeneo/pim-api-docs/master/content/swagger/akeneo-web-api.json

generate:
	openapi-generator generate \
		-i ./akeneo-web-api.json \
		-g typescript-fetch \
		--additional-properties=supportsES6=true,npmName=@labdigital/akeneo-node-sdk
