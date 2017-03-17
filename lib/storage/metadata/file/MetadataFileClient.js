'use strict'; // eslint-disable-line

const assert = require('assert');
const Logger = require('werelogs').Logger;
const constants = require('../../../constants');

const levelNet = require('../../../network/rpc/level-net');

class MetadataFileClient {

    /**
     * Construct a metadata client
     *
     * @param {Object} params the following parameters are used:
     * @param {String} params.host name or IP address of metadata
     *   server host
     * @param {Number} params.port TCP port to connect to the metadata
     *   server
     * @param {Object} [params.log] logging configuration
     */
    constructor(params) {
        assert.notStrictEqual(params.host, undefined);
        assert.notStrictEqual(params.port, undefined);
        this.host = params.host;
        this.port = params.port;
        this.callTimeoutMs = params.callTimeoutMs;
        this.setupLogging(params.log);
    }

    setupLogging(config) {
        let options = undefined;
        if (config !== undefined) {
            options = {
                level: config.logLevel,
                dump: config.dumpLevel,
            };
        }
        this.logger = new Logger('MetadataFileClient', options);
    }

    /**
     * Open the remote metadata database (backed by leveldb)
     *
     * @param {function} [done] called when done
     * @return {Object} handle to the remote database
     */
    openDB(done) {
        const url = `http://${this.host}:${this.port}` +
                  `${constants.metadataFileNamespace}/metadata`;
        this.logger.info(`connecting to RPC server at ${url}`);
        this.client = new levelNet.LevelDbClient({
            url,
            logger: this.logger,
            callTimeoutMs: this.callTimeoutMs,
        });
        this.client.connect(done);
        return this.client;
    }
}

module.exports = MetadataFileClient;
