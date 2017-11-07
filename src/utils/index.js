import _ from 'lodash';
import configs from '../configs';

function getHostAndPort() {
  return `${window.location.protocol}//${process.env.NODE_ENV === 'development'
    ? `${configs.host}:${configs.port}`
    : `${window.location.host}`}`;
}

export function formatUrl(path) {
  return `${getHostAndPort()}${configs.apiRoot}${path[0] !== '/'
    ? `/${path}`
    : path}`;
}
