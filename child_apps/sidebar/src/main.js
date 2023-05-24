import "./public-path";
import Vue from "vue";
import { Menu, Submenu, MenuItem } from "element-ui";
import App from "./App.vue";
import "../../../main_app/common/style.css";
import * as lodash from "../../../main_app/common/lodash.js";
const num = lodash.add(1, 2);
console.log(num, 'num');

Vue.config.productionTip = false;
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

new Vue({
  render: (h) => h(App),
}).$mount("#sidebar-app");
