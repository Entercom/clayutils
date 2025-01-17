'use strict';

const isUriStringCheck = require('../strCheck');

/**
 * Remove the url-patterned prefix for the site's slug.
 *
 * @param  {String} uri
 * @param  {Object} site
 * @return {String}
 */
module.exports = function (uri, site) {
  var slug = site.slug,
    host = site.host,
    path = site.path,
    prefix = site.prefix,
    hasSlash = uri.indexOf('/_') !== -1;

  if (!prefix) {
    prefix = path && path.length > 1 ? `${host}${path}` : host;
  }

  isUriStringCheck.strCheck(uri);
  return uri.replace(`${prefix}${hasSlash ? '/' : ''}`, `${slug}${hasSlash ? '/' : ''}`);
};
