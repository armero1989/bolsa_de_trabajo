// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$verify
             * @methodOf lbServices.User
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#changePassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#setPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Usuario
 * @header lbServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Usuario",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Usuarios/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__findById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__updateById__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.Empresas() instead.
            "prototype$__get__Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.Empresas.create() instead.
            "prototype$__create__Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.Empresas.update() instead.
            "prototype$__update__Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.Empresas.destroy() instead.
            "prototype$__destroy__Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.findById() instead.
            "prototype$__findById__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas.destroyById() instead.
            "prototype$__destroyById__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.updateById() instead.
            "prototype$__updateById__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.ofertas.link() instead.
            "prototype$__link__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.ofertas.unlink() instead.
            "prototype$__unlink__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.exists() instead.
            "prototype$__exists__ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Usuario.demandantes() instead.
            "prototype$__get__demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "GET",
            },

            // INTERNAL. Use Usuario.demandantes.create() instead.
            "prototype$__create__demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "POST",
            },

            // INTERNAL. Use Usuario.demandantes.update() instead.
            "prototype$__update__demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.demandantes.destroy() instead.
            "prototype$__destroy__demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__get__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries accessTokens of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__create__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__delete__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$__count__accessTokens
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Counts accessTokens of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Usuarios/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas() instead.
            "prototype$__get__ofertas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas.create() instead.
            "prototype$__create__ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.ofertas.destroyAll() instead.
            "prototype$__delete__ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.count() instead.
            "prototype$__count__ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#create
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Usuarios",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#createMany
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Usuarios",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#patchOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Usuarios",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#replaceOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Usuarios/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#upsertWithWhere
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Usuarios/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#exists
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Usuarios/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#findById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Usuarios/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#replaceById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Usuarios/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#find
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Usuarios",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#findOne
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Usuarios/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#updateAll
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Usuarios/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#deleteById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Usuarios/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#count
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Usuarios/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$patchAttributes
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Usuarios/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#createChangeStream
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Usuarios/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#login
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Usuarios/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#logout
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Usuarios/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#prototype$verify
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/Usuarios/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#confirm
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Confirm a user registration with identity verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Usuarios/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#resetPassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Usuarios/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#changePassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/Usuarios/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#setPassword
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/Usuarios/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#request_password_reset
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Solicita el reseteo de la contraseña.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `email` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "request_password_reset": {
              url: urlBase + "/Usuarios/request_password_reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#reset_password_post
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Permite generar una nueva contraseña para un usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `email` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `msg` – `{string=}` -
             */
            "reset_password_post": {
              url: urlBase + "/Usuarios/reset_password",
              method: "POST",
            },

            // INTERNAL. Use Empresa.usuarios() instead.
            "::get::Empresa::usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "GET",
            },

            // INTERNAL. Use Empresa.usuarios.create() instead.
            "::create::Empresa::usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Empresa.usuarios.createMany() instead.
            "::createMany::Empresa::usuarios": {
              isArray: true,
              url: urlBase + "/Empresas/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Empresa.usuarios.update() instead.
            "::update::Empresa::usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "PUT",
            },

            // INTERNAL. Use Empresa.usuarios.destroy() instead.
            "::destroy::Empresa::usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.findById() instead.
            "::findById::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito.destroyById() instead.
            "::destroyById::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.updateById() instead.
            "::updateById::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Oferta.inscrito.link() instead.
            "::link::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Oferta.inscrito.unlink() instead.
            "::unlink::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.exists() instead.
            "::exists::Oferta::inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Oferta.inscrito() instead.
            "::get::Oferta::inscrito": {
              isArray: true,
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito.create() instead.
            "::create::Oferta::inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "POST",
            },

            // INTERNAL. Use Oferta.inscrito.createMany() instead.
            "::createMany::Oferta::inscrito": {
              isArray: true,
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "POST",
            },

            // INTERNAL. Use Oferta.inscrito.destroyAll() instead.
            "::delete::Oferta::inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.count() instead.
            "::count::Oferta::inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito/count",
              method: "GET",
            },

            // INTERNAL. Use Inscrito.usuario() instead.
            "::get::Inscrito::usuario": {
              url: urlBase + "/Inscritos/:id/usuario",
              method: "GET",
            },

            // INTERNAL. Use Demandante.usuarios() instead.
            "::get::Demandante::usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "GET",
            },

            // INTERNAL. Use Demandante.usuarios.create() instead.
            "::create::Demandante::usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Demandante.usuarios.createMany() instead.
            "::createMany::Demandante::usuarios": {
              isArray: true,
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Demandante.usuarios.update() instead.
            "::update::Demandante::usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "PUT",
            },

            // INTERNAL. Use Demandante.usuarios.destroy() instead.
            "::destroy::Demandante::usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Usuario#getCurrent
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Usuarios" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Usuario#upsert
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#updateOrCreate
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#patchOrCreateWithWhere
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#update
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#destroyById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#removeById
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Usuario#updateAttributes
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCachedCurrent
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Usuario#login} or
         * {@link lbServices.Usuario#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Usuario instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#isAuthenticated
         * @methodOf lbServices.Usuario
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#getCurrentId
         * @methodOf lbServices.Usuario
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Usuario#modelName
        * @propertyOf lbServices.Usuario
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Usuario`.
        */
        R.modelName = "Usuario";

    /**
     * @ngdoc object
     * @name lbServices.Usuario.Empresas
     * @header lbServices.Usuario.Empresas
     * @object
     * @description
     *
     * The object `Usuario.Empresas` groups methods
     * manipulating `Empresa` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#Empresas Usuario.Empresas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#Empresas
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Fetches hasOne relation Empresas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R.Empresas = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::get::Usuario::Empresas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.Empresas#create
             * @methodOf lbServices.Usuario.Empresas
             *
             * @description
             *
             * Creates a new instance in Empresas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R.Empresas.create = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::create::Usuario::Empresas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.Empresas#createMany
             * @methodOf lbServices.Usuario.Empresas
             *
             * @description
             *
             * Creates a new instance in Empresas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R.Empresas.createMany = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::createMany::Usuario::Empresas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.Empresas#destroy
             * @methodOf lbServices.Usuario.Empresas
             *
             * @description
             *
             * Deletes Empresas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.Empresas.destroy = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::destroy::Usuario::Empresas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.Empresas#update
             * @methodOf lbServices.Usuario.Empresas
             *
             * @description
             *
             * Update Empresas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R.Empresas.update = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::update::Usuario::Empresas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.ofertas
     * @header lbServices.Usuario.ofertas
     * @object
     * @description
     *
     * The object `Usuario.ofertas` groups methods
     * manipulating `Oferta` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#ofertas Usuario.ofertas()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#ofertas
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Queries ofertas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::get::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#count
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Counts ofertas of Usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.ofertas.count = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::count::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#create
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Creates a new instance in ofertas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.create = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::create::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#createMany
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Creates a new instance in ofertas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.createMany = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::createMany::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#destroyAll
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Deletes all ofertas of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ofertas.destroyAll = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::delete::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#destroyById
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Delete a related item by id for ofertas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ofertas.destroyById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::destroyById::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#exists
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Check the existence of ofertas relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.exists = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::exists::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#findById
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Find a related item by id for ofertas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.findById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::findById::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#link
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Add a related item by id for ofertas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.link = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::link::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#unlink
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Remove the ofertas relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.ofertas.unlink = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::unlink::Usuario::ofertas"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.ofertas#updateById
             * @methodOf lbServices.Usuario.ofertas
             *
             * @description
             *
             * Update a related item by id for ofertas.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `fk` – `{*}` - Foreign key for ofertas
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.ofertas.updateById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::updateById::Usuario::ofertas"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Usuario.demandantes
     * @header lbServices.Usuario.demandantes
     * @object
     * @description
     *
     * The object `Usuario.demandantes` groups methods
     * manipulating `Demandante` instances related to `Usuario`.
     *
     * Call {@link lbServices.Usuario#demandantes Usuario.demandantes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Usuario#demandantes
             * @methodOf lbServices.Usuario
             *
             * @description
             *
             * Fetches hasOne relation demandantes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R.demandantes = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::get::Usuario::demandantes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.demandantes#create
             * @methodOf lbServices.Usuario.demandantes
             *
             * @description
             *
             * Creates a new instance in demandantes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R.demandantes.create = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::create::Usuario::demandantes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.demandantes#createMany
             * @methodOf lbServices.Usuario.demandantes
             *
             * @description
             *
             * Creates a new instance in demandantes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R.demandantes.createMany = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::createMany::Usuario::demandantes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.demandantes#destroy
             * @methodOf lbServices.Usuario.demandantes
             *
             * @description
             *
             * Deletes demandantes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.demandantes.destroy = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::destroy::Usuario::demandantes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Usuario.demandantes#update
             * @methodOf lbServices.Usuario.demandantes
             *
             * @description
             *
             * Update demandantes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Usuario id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R.demandantes.update = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::update::Usuario::demandantes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Empresa
 * @header lbServices.Empresa
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Empresa` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Empresa",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Empresas/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Empresa.usuarios() instead.
            "prototype$__get__usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "GET",
            },

            // INTERNAL. Use Empresa.usuarios.create() instead.
            "prototype$__create__usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Empresa.usuarios.update() instead.
            "prototype$__update__usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "PUT",
            },

            // INTERNAL. Use Empresa.usuarios.destroy() instead.
            "prototype$__destroy__usuarios": {
              url: urlBase + "/Empresas/:id/usuarios",
              method: "DELETE",
            },

            // INTERNAL. Use Empresa.oferta.findById() instead.
            "prototype$__findById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "GET",
            },

            // INTERNAL. Use Empresa.oferta.destroyById() instead.
            "prototype$__destroyById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Empresa.oferta.updateById() instead.
            "prototype$__updateById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Empresa.oferta() instead.
            "prototype$__get__oferta": {
              isArray: true,
              url: urlBase + "/Empresas/:id/oferta",
              method: "GET",
            },

            // INTERNAL. Use Empresa.oferta.create() instead.
            "prototype$__create__oferta": {
              url: urlBase + "/Empresas/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Empresa.oferta.destroyAll() instead.
            "prototype$__delete__oferta": {
              url: urlBase + "/Empresas/:id/oferta",
              method: "DELETE",
            },

            // INTERNAL. Use Empresa.oferta.count() instead.
            "prototype$__count__oferta": {
              url: urlBase + "/Empresas/:id/oferta/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#create
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Empresas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#createMany
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Empresas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#patchOrCreate
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Empresas",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#replaceOrCreate
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Empresas/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#upsertWithWhere
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Empresas/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#exists
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Empresas/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#findById
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Empresas/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#replaceById
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Empresas/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#find
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Empresas",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#findOne
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Empresas/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#updateAll
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Empresas/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#deleteById
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Empresas/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#count
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Empresas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#prototype$patchAttributes
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Empresas/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Empresa#createChangeStream
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Empresas/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Usuario.Empresas() instead.
            "::get::Usuario::Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.Empresas.create() instead.
            "::create::Usuario::Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.Empresas.createMany() instead.
            "::createMany::Usuario::Empresas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.Empresas.update() instead.
            "::update::Usuario::Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.Empresas.destroy() instead.
            "::destroy::Usuario::Empresas": {
              url: urlBase + "/Usuarios/:id/Empresas",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.empresa() instead.
            "::get::Oferta::empresa": {
              url: urlBase + "/Ofertas/:id/empresa",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Empresa#upsert
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#updateOrCreate
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#patchOrCreateWithWhere
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#update
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#destroyById
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#removeById
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Empresa#updateAttributes
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Empresa#modelName
        * @propertyOf lbServices.Empresa
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Empresa`.
        */
        R.modelName = "Empresa";

    /**
     * @ngdoc object
     * @name lbServices.Empresa.usuarios
     * @header lbServices.Empresa.usuarios
     * @object
     * @description
     *
     * The object `Empresa.usuarios` groups methods
     * manipulating `Usuario` instances related to `Empresa`.
     *
     * Call {@link lbServices.Empresa#usuarios Empresa.usuarios()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Empresa#usuarios
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Fetches hasOne relation usuarios.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Empresa::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.usuarios#create
             * @methodOf lbServices.Empresa.usuarios
             *
             * @description
             *
             * Creates a new instance in usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::Empresa::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.usuarios#createMany
             * @methodOf lbServices.Empresa.usuarios
             *
             * @description
             *
             * Creates a new instance in usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::Empresa::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.usuarios#destroy
             * @methodOf lbServices.Empresa.usuarios
             *
             * @description
             *
             * Deletes usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.usuarios.destroy = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroy::Empresa::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.usuarios#update
             * @methodOf lbServices.Empresa.usuarios
             *
             * @description
             *
             * Update usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.update = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::update::Empresa::usuarios"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Empresa.oferta
     * @header lbServices.Empresa.oferta
     * @object
     * @description
     *
     * The object `Empresa.oferta` groups methods
     * manipulating `Oferta` instances related to `Empresa`.
     *
     * Call {@link lbServices.Empresa#oferta Empresa.oferta()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Empresa#oferta
             * @methodOf lbServices.Empresa
             *
             * @description
             *
             * Queries oferta of Empresa.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::get::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#count
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Counts oferta of Empresa.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.oferta.count = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::count::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#create
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Creates a new instance in oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.create = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::create::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#createMany
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Creates a new instance in oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.createMany = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::createMany::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#destroyAll
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Deletes all oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.oferta.destroyAll = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::delete::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#destroyById
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Delete a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.oferta.destroyById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::destroyById::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#findById
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Find a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.findById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::findById::Empresa::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Empresa.oferta#updateById
             * @methodOf lbServices.Empresa.oferta
             *
             * @description
             *
             * Update a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Empresa id
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.updateById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::updateById::Empresa::oferta"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Oferta
 * @header lbServices.Oferta
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Oferta` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Oferta",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Ofertas/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Oferta.empresa() instead.
            "prototype$__get__empresa": {
              url: urlBase + "/Ofertas/:id/empresa",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito.findById() instead.
            "prototype$__findById__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito.destroyById() instead.
            "prototype$__destroyById__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.updateById() instead.
            "prototype$__updateById__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Oferta.inscrito.link() instead.
            "prototype$__link__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Oferta.inscrito.unlink() instead.
            "prototype$__unlink__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.exists() instead.
            "prototype$__exists__inscrito": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Ofertas/:id/inscrito/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Oferta.demandante() instead.
            "prototype$__get__demandante": {
              url: urlBase + "/Ofertas/:id/demandante",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito() instead.
            "prototype$__get__inscrito": {
              isArray: true,
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "GET",
            },

            // INTERNAL. Use Oferta.inscrito.create() instead.
            "prototype$__create__inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "POST",
            },

            // INTERNAL. Use Oferta.inscrito.destroyAll() instead.
            "prototype$__delete__inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.inscrito.count() instead.
            "prototype$__count__inscrito": {
              url: urlBase + "/Ofertas/:id/inscrito/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#create
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Ofertas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#createMany
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Ofertas",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#patchOrCreate
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Ofertas",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#replaceOrCreate
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Ofertas/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#upsertWithWhere
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Ofertas/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#exists
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Ofertas/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#findById
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Ofertas/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#replaceById
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Ofertas/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#find
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Ofertas",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#findOne
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Ofertas/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#updateAll
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Ofertas/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#deleteById
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Ofertas/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#count
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Ofertas/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#prototype$patchAttributes
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Ofertas/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#createChangeStream
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Ofertas/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#usuariosInscritos
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Devuelve el número de demandantes inscritos en la oferta
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{integer}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `Demandantes` – `{number=}` -
             */
            "usuariosInscritos": {
              url: urlBase + "/Ofertas/:id/usuariosInscritos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Oferta#usuariosInscritosDetalle
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Devuelve el número de demandantes inscritos en la oferta
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{integer}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `inscrito` – `{json=}` -
             */
            "usuariosInscritosDetalle": {
              url: urlBase + "/Ofertas/:id/usuariosInscritosDetalle",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas.findById() instead.
            "::findById::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas.destroyById() instead.
            "::destroyById::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.updateById() instead.
            "::updateById::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.ofertas.link() instead.
            "::link::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.ofertas.unlink() instead.
            "::unlink::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.exists() instead.
            "::exists::Usuario::ofertas": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Usuarios/:id/ofertas/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Usuario.ofertas() instead.
            "::get::Usuario::ofertas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "GET",
            },

            // INTERNAL. Use Usuario.ofertas.create() instead.
            "::create::Usuario::ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.ofertas.createMany() instead.
            "::createMany::Usuario::ofertas": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "POST",
            },

            // INTERNAL. Use Usuario.ofertas.destroyAll() instead.
            "::delete::Usuario::ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas",
              method: "DELETE",
            },

            // INTERNAL. Use Usuario.ofertas.count() instead.
            "::count::Usuario::ofertas": {
              url: urlBase + "/Usuarios/:id/ofertas/count",
              method: "GET",
            },

            // INTERNAL. Use Empresa.oferta.findById() instead.
            "::findById::Empresa::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "GET",
            },

            // INTERNAL. Use Empresa.oferta.destroyById() instead.
            "::destroyById::Empresa::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Empresa.oferta.updateById() instead.
            "::updateById::Empresa::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Empresas/:id/oferta/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Empresa.oferta() instead.
            "::get::Empresa::oferta": {
              isArray: true,
              url: urlBase + "/Empresas/:id/oferta",
              method: "GET",
            },

            // INTERNAL. Use Empresa.oferta.create() instead.
            "::create::Empresa::oferta": {
              url: urlBase + "/Empresas/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Empresa.oferta.createMany() instead.
            "::createMany::Empresa::oferta": {
              isArray: true,
              url: urlBase + "/Empresas/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Empresa.oferta.destroyAll() instead.
            "::delete::Empresa::oferta": {
              url: urlBase + "/Empresas/:id/oferta",
              method: "DELETE",
            },

            // INTERNAL. Use Empresa.oferta.count() instead.
            "::count::Empresa::oferta": {
              url: urlBase + "/Empresas/:id/oferta/count",
              method: "GET",
            },

            // INTERNAL. Use Inscrito.oferta() instead.
            "::get::Inscrito::oferta": {
              url: urlBase + "/Inscritos/:id/oferta",
              method: "GET",
            },

            // INTERNAL. Use Demandante.oferta.findById() instead.
            "::findById::Demandante::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "GET",
            },

            // INTERNAL. Use Demandante.oferta.destroyById() instead.
            "::destroyById::Demandante::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Demandante.oferta.updateById() instead.
            "::updateById::Demandante::oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Demandante.oferta() instead.
            "::get::Demandante::oferta": {
              isArray: true,
              url: urlBase + "/Demandantes/:id/oferta",
              method: "GET",
            },

            // INTERNAL. Use Demandante.oferta.create() instead.
            "::create::Demandante::oferta": {
              url: urlBase + "/Demandantes/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Demandante.oferta.createMany() instead.
            "::createMany::Demandante::oferta": {
              isArray: true,
              url: urlBase + "/Demandantes/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Demandante.oferta.destroyAll() instead.
            "::delete::Demandante::oferta": {
              url: urlBase + "/Demandantes/:id/oferta",
              method: "DELETE",
            },

            // INTERNAL. Use Demandante.oferta.count() instead.
            "::count::Demandante::oferta": {
              url: urlBase + "/Demandantes/:id/oferta/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Oferta#upsert
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#updateOrCreate
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#patchOrCreateWithWhere
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#update
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#destroyById
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#removeById
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Oferta#updateAttributes
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Oferta#modelName
        * @propertyOf lbServices.Oferta
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Oferta`.
        */
        R.modelName = "Oferta";


            /**
             * @ngdoc method
             * @name lbServices.Oferta#empresa
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Fetches belongsTo relation empresa.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Empresa` object.)
             * </em>
             */
        R.empresa = function() {
          var TargetResource = $injector.get("Empresa");
          var action = TargetResource["::get::Oferta::empresa"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Oferta.inscrito
     * @header lbServices.Oferta.inscrito
     * @object
     * @description
     *
     * The object `Oferta.inscrito` groups methods
     * manipulating `Usuario` instances related to `Oferta`.
     *
     * Call {@link lbServices.Oferta#inscrito Oferta.inscrito()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Oferta#inscrito
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Queries inscrito of Oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#count
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Counts inscrito of Oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.inscrito.count = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::count::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#create
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Creates a new instance in inscrito of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#createMany
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Creates a new instance in inscrito of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#destroyAll
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Deletes all inscrito of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.inscrito.destroyAll = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::delete::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#destroyById
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Delete a related item by id for inscrito.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.inscrito.destroyById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroyById::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#exists
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Check the existence of inscrito relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.exists = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::exists::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#findById
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Find a related item by id for inscrito.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.findById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::findById::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#link
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Add a related item by id for inscrito.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.link = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::link::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#unlink
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Remove the inscrito relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.inscrito.unlink = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::unlink::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta.inscrito#updateById
             * @methodOf lbServices.Oferta.inscrito
             *
             * @description
             *
             * Update a related item by id for inscrito.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `fk` – `{*}` - Foreign key for inscrito
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.inscrito.updateById = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::updateById::Oferta::inscrito"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Oferta#demandante
             * @methodOf lbServices.Oferta
             *
             * @description
             *
             * Fetches belongsTo relation demandante.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Oferta id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R.demandante = function() {
          var TargetResource = $injector.get("Demandante");
          var action = TargetResource["::get::Oferta::demandante"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Inscrito
 * @header lbServices.Inscrito
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Inscrito` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Inscrito",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Inscritos/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Inscrito.usuario() instead.
            "prototype$__get__usuario": {
              url: urlBase + "/Inscritos/:id/usuario",
              method: "GET",
            },

            // INTERNAL. Use Inscrito.oferta() instead.
            "prototype$__get__oferta": {
              url: urlBase + "/Inscritos/:id/oferta",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#create
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Inscritos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#createMany
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Inscritos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#patchOrCreate
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Inscritos",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#replaceOrCreate
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Inscritos/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#upsertWithWhere
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Inscritos/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#exists
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Inscritos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#findById
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Inscritos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#replaceById
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Inscritos/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#find
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Inscritos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#findOne
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Inscritos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#updateAll
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Inscritos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#deleteById
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Inscritos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#count
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Inscritos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#prototype$patchAttributes
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Inscrito id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Inscritos/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#createChangeStream
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Inscritos/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Inscrito#upsert
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#updateOrCreate
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#patchOrCreateWithWhere
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#update
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#destroyById
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#removeById
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#updateAttributes
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Inscrito id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Inscrito` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Inscrito#modelName
        * @propertyOf lbServices.Inscrito
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Inscrito`.
        */
        R.modelName = "Inscrito";


            /**
             * @ngdoc method
             * @name lbServices.Inscrito#usuario
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Fetches belongsTo relation usuario.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Inscrito id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuario = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Inscrito::usuario"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Inscrito#oferta
             * @methodOf lbServices.Inscrito
             *
             * @description
             *
             * Fetches belongsTo relation oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Inscrito id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::get::Inscrito::oferta"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Demandante
 * @header lbServices.Demandante
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Demandante` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Demandante",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Demandantes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Demandante.oferta.findById() instead.
            "prototype$__findById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "GET",
            },

            // INTERNAL. Use Demandante.oferta.destroyById() instead.
            "prototype$__destroyById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Demandante.oferta.updateById() instead.
            "prototype$__updateById__oferta": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Demandantes/:id/oferta/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Demandante.usuarios() instead.
            "prototype$__get__usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "GET",
            },

            // INTERNAL. Use Demandante.usuarios.create() instead.
            "prototype$__create__usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "POST",
            },

            // INTERNAL. Use Demandante.usuarios.update() instead.
            "prototype$__update__usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "PUT",
            },

            // INTERNAL. Use Demandante.usuarios.destroy() instead.
            "prototype$__destroy__usuarios": {
              url: urlBase + "/Demandantes/:id/usuarios",
              method: "DELETE",
            },

            // INTERNAL. Use Demandante.oferta() instead.
            "prototype$__get__oferta": {
              isArray: true,
              url: urlBase + "/Demandantes/:id/oferta",
              method: "GET",
            },

            // INTERNAL. Use Demandante.oferta.create() instead.
            "prototype$__create__oferta": {
              url: urlBase + "/Demandantes/:id/oferta",
              method: "POST",
            },

            // INTERNAL. Use Demandante.oferta.destroyAll() instead.
            "prototype$__delete__oferta": {
              url: urlBase + "/Demandantes/:id/oferta",
              method: "DELETE",
            },

            // INTERNAL. Use Demandante.oferta.count() instead.
            "prototype$__count__oferta": {
              url: urlBase + "/Demandantes/:id/oferta/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#create
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Demandantes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#createMany
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Demandantes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#patchOrCreate
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/Demandantes",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#replaceOrCreate
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Demandantes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#upsertWithWhere
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Demandantes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#exists
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Demandantes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#findById
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Demandantes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#replaceById
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Demandantes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#find
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Demandantes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#findOne
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Demandantes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#updateAll
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Demandantes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#deleteById
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Demandantes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#count
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Demandantes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#prototype$patchAttributes
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/Demandantes/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Demandante#createChangeStream
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Demandantes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Usuario.demandantes() instead.
            "::get::Usuario::demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "GET",
            },

            // INTERNAL. Use Usuario.demandantes.create() instead.
            "::create::Usuario::demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "POST",
            },

            // INTERNAL. Use Usuario.demandantes.createMany() instead.
            "::createMany::Usuario::demandantes": {
              isArray: true,
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "POST",
            },

            // INTERNAL. Use Usuario.demandantes.update() instead.
            "::update::Usuario::demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "PUT",
            },

            // INTERNAL. Use Usuario.demandantes.destroy() instead.
            "::destroy::Usuario::demandantes": {
              url: urlBase + "/Usuarios/:id/demandantes",
              method: "DELETE",
            },

            // INTERNAL. Use Oferta.demandante() instead.
            "::get::Oferta::demandante": {
              url: urlBase + "/Ofertas/:id/demandante",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Demandante#upsert
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#updateOrCreate
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#patchOrCreateWithWhere
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#update
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#destroyById
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#removeById
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Demandante#updateAttributes
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Demandante` object.)
             * </em>
             */
        R["updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Demandante#modelName
        * @propertyOf lbServices.Demandante
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Demandante`.
        */
        R.modelName = "Demandante";

    /**
     * @ngdoc object
     * @name lbServices.Demandante.oferta
     * @header lbServices.Demandante.oferta
     * @object
     * @description
     *
     * The object `Demandante.oferta` groups methods
     * manipulating `Oferta` instances related to `Demandante`.
     *
     * Call {@link lbServices.Demandante#oferta Demandante.oferta()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Demandante#oferta
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Queries oferta of Demandante.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::get::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#count
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Counts oferta of Demandante.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.oferta.count = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::count::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#create
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Creates a new instance in oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.create = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::create::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#createMany
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Creates a new instance in oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.createMany = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::createMany::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#destroyAll
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Deletes all oferta of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.oferta.destroyAll = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::delete::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#destroyById
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Delete a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.oferta.destroyById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::destroyById::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#findById
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Find a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.findById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::findById::Demandante::oferta"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.oferta#updateById
             * @methodOf lbServices.Demandante.oferta
             *
             * @description
             *
             * Update a related item by id for oferta.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `fk` – `{*}` - Foreign key for oferta
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Oferta` object.)
             * </em>
             */
        R.oferta.updateById = function() {
          var TargetResource = $injector.get("Oferta");
          var action = TargetResource["::updateById::Demandante::oferta"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Demandante.usuarios
     * @header lbServices.Demandante.usuarios
     * @object
     * @description
     *
     * The object `Demandante.usuarios` groups methods
     * manipulating `Usuario` instances related to `Demandante`.
     *
     * Call {@link lbServices.Demandante#usuarios Demandante.usuarios()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Demandante#usuarios
             * @methodOf lbServices.Demandante
             *
             * @description
             *
             * Fetches hasOne relation usuarios.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Demandante::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.usuarios#create
             * @methodOf lbServices.Demandante.usuarios
             *
             * @description
             *
             * Creates a new instance in usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.create = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::create::Demandante::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.usuarios#createMany
             * @methodOf lbServices.Demandante.usuarios
             *
             * @description
             *
             * Creates a new instance in usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.createMany = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::createMany::Demandante::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.usuarios#destroy
             * @methodOf lbServices.Demandante.usuarios
             *
             * @description
             *
             * Deletes usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             *  - `options` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.usuarios.destroy = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::destroy::Demandante::usuarios"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Demandante.usuarios#update
             * @methodOf lbServices.Demandante.usuarios
             *
             * @description
             *
             * Update usuarios of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Demandante id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Usuario` object.)
             * </em>
             */
        R.usuarios.update = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::update::Demandante::usuarios"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
