import moment from 'moment';
import configs from '../configs';

const baseStorage = window.Storage;
const stringify = JSON.stringify;
const parse = JSON.parse;

baseStorage.prototype.set = function(key, value, expired) {
  const wrapped = {
    data: value
  };
  if (expired) {
    wrapped.expired = moment()
      .add(expired, 'm')
      .valueOf();
  }
  this.setItem(`${this.namespace}_${key}`, stringify(wrapped));
};

baseStorage.prototype.get = function(key) {
  // fix IE issue: don't read the latest data
  if (!!window.ActiveXObject || 'ActiveXObject' in window) {
    // if IE
    this.setItem('unused_key', null);
  }
  const string = this.getItem(`${this.namespace}_${key}`);
  const wrapped = parse(string);
  let result = null;
  if (wrapped) {
    if (this.isExpired(wrapped)) {
      // remove expired item
      this.removeItem(`${this.namespace}_${key}`);
    } else {
      result = wrapped.data;
    }
  }
  return result;
};

baseStorage.prototype.remove = function(key) {
  this.removeItem(`${this.namespace}_${key}`);
};

baseStorage.prototype.retrieve = function(key, expired, success, fail) {
  const self = this;
  const data = this.get(key);
  const saveOpts = {
    key,
    expired
  };
  if (data) {
    success(data, saveOpts); // true means isCache
  } else {
    fail(res => {
      if (res) {
        self.set(key, res, expired);
      }
    }, saveOpts);
  }
};

baseStorage.prototype.isExpired = function(wrapped) {
  const currentTime = moment().valueOf();

  if (wrapped.expired) {
    if (currentTime > wrapped.expired) {
      return true;
    }
  }
  return false;
};

baseStorage.prototype.setNamespace = function(namespace) {
  baseStorage.prototype.namespace = namespace || configs.storageNameSpace;
};

baseStorage.getStorage = function(name) {
  if (name === 'session') {
    return sessionStorage;
  }
  return localStorage;
};

export default baseStorage.getStorage(configs.storage);
