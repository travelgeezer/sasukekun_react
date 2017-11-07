const S_CONFIG = SASUKEKUN_CONFIG;

const configs = {
  secureHttps: false,
  host: S_CONFIG.host,
  port: S_CONFIG.port,
  apiRoot: S_CONFIG.apiRoot,
  virtualPath: S_CONFIG.virtualPath,
  authToken: S_CONFIG.authToken,
  storage: S_CONFIG.storage,
  staticPrefix: S_CONFIG.staticPrefix,
  storageNameSpace: S_CONFIG.storageNameSpace
};

export default configs;
