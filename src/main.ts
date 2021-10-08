import Vue from "vue";
import vueCustomElement from "vue-custom-element";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(vueCustomElement);

Vue.customElement("weather-widget", new App().$options);
