const PROXY_CONFIG = [
    {
      context: '/my-endpoint',
      target: 'http://localhost',
      changeOrigin: true,
      logLevel: 'debug',
      cookieDomainRewrite: 'localhost',
      followRedirects: true
    }
  ];
  module.exports = PROXY_CONFIG;
  