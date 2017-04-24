/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ResultSetContextBuckets = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResultSetContextBuckets model module.
   * @module model/ResultSetContextBuckets
   * @version 1
   */

  /**
   * Constructs a new <code>ResultSetContextBuckets</code>.
   * @alias module:model/ResultSetContextBuckets
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResultSetContextBuckets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultSetContextBuckets} obj Optional instance to populate.
   * @return {module:model/ResultSetContextBuckets} The populated <code>ResultSetContextBuckets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], Object);
      }
    }
    return obj;
  }

  /**
   * The bucket label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The count for the bucket
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * An optional field for additional display information
   * @member {Object} display
   */
  exports.prototype['display'] = undefined;



  return exports;
}));

