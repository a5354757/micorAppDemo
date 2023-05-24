/* eslint-disable no-undef */
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 用于设置webpack动态public-path，将子应用的静态资源补全为 http 开头的绝对地址。
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__  
}
