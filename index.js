module.exports = {
    storage: {
        metadata: {
            MetadataFileServer:
            require('./metadata/file/MetadataFileServer'),
            MetadataFileClient:
            require('./metadata/file/MetadataFileClient'),
            LogConsumer:
            require('./metadata/bucketclient/LogConsumer'),
        },
        data: {
            file: {
                DataFileStore:
                require('./data/file/DataFileStore'),
            },
        },
        utils: require('./utils'),
    },
};
