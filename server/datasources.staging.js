// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var config = require('./config.local')

module.exports = {
	db: config.db,
	emailDs: config.emailDs
};