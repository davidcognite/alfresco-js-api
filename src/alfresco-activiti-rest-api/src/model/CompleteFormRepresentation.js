(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.CompleteFormRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompleteFormRepresentation model module.
   * @module model/CompleteFormRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CompleteFormRepresentation</code>.
   * @alias module:model/CompleteFormRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CompleteFormRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompleteFormRepresentation} obj Optional instance to populate.
   * @return {module:model/CompleteFormRepresentation} The populated <code>CompleteFormRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('outcome')) {
        obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} outcome
   */
  exports.prototype['outcome'] = undefined;
  /**
   * @member {Object} values
   */
  exports.prototype['values'] = undefined;




  return exports;
}));


