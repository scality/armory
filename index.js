module.exports = {
    storage: {
        metadata: {
            MetadataFileServer:
            require('./lib/storage/metadata/file/MetadataFileServer'),
            MetadataFileClient:
            require('./lib/storage/metadata/file/MetadataFileClient'),
            LogConsumer:
            require('./lib/storage/metadata/bucketclient/LogConsumer'),
        },
        data: {
            file: {
                DataFileStore:
                require('./lib/storage/data/file/DataFileStore'),
            },
        },
        utils: require('./lib/storage/utils'),
    },
};
