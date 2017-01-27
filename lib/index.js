'use strict';
/**
 * Node_module for using the bncl (BPMN natural creation language) parser in nodejs
 * @author pinussilvestrus (Niklas Kiefer)
 */

const request = require('request-promise');
const bnclApiUrl = 'https://bncl.de/api/convert';

class BNCL {
  static parseBncl(bnclString) {
    let config = {
      url: bnclApiUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'plain/text'
      },
      body: bnclString
    };

    return request(config);
  }

}

module.exports = BNCL;
