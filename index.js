module.exports = {
    storage: {
        metadata: {
            MetadataWrapper: require('./metadata/MetadataWrapper'),
            bucketclient: {
                BucketClientInterface:
                require('./metadata/bucketclient/' +
                    'BucketClientInterface'),
                LogConsumer:
                require('./metadata/bucketclient/LogConsumer'),
            },
            file: {
                BucketFileInterface:
                require('./metadata/file/BucketFileInterface'),
                MetadataFileServer:
                require('./metadata/file/MetadataFileServer'),
                MetadataFileClient:
                require('./metadata/file/MetadataFileClient'),
            },
            inMemory: {
                metastore:
                require('./metadata/in_memory/metastore'),
                metadata: require('./metadata/in_memory/metadata'),
                bucketUtilities:
                require('./metadata/in_memory/bucket_utilities'),
            },
            mongoclient: {
                MongoClientInterface:
                require('./metadata/mongoclient/' +
                    'MongoClientInterface'),
                LogConsumer:
                require('./metadata/mongoclient/LogConsumer'),
            },
            proxy: {
                Server: require('./metadata/proxy/Server'),
            },
        },
        data: {
            DataWrapper: require('./data/DataWrapper'),
            MultipleBackendGateway:
            require('./data/MultipleBackendGateway'),
            parseLC: require('./data/LocationConstraintParser'),
            file: {
                DataFileStore:
                require('./data/file/DataFileStore'),
                DataFileInterface:
                require('./data/file/DataFileInterface'),
            },
            external: {
                AwsClient: require('./data/external/AwsClient'),
                AzureClient: require('./data/external/AzureClient'),
                GcpClient: require('./data/external/GcpClient'),
                GCP: require('./data/external/GCP/GcpService'),
                GcpUtils: require('./data/external/GCP/GcpUtils'),
                GcpSigner: require('./data/external/GCP/GcpSigner'),
                PfsClient: require('./data/external/PfsClient'),
                backendUtils: require('./data/external/utils'),
            },
            inMemory: {
                datastore: require('./data/in_memory/datastore'),
            },
        },
        utils: require('./utils'),
    },
};
