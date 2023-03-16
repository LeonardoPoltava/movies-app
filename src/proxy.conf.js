const target = 'https://api.themoviedb.org/3';

const PROXY_CONFIG = {
  '/api' : {
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    logLevel: 'debug',
    secure: false
  }
}

module.exports = PROXY_CONFIG;
