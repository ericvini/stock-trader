import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/axios';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import axiosPlugin from './plugins/axios';

const vuetify = createVuetify({
    components,
    directives,
})


createApp(App).use(vuetify).use(router).use(store).use(axiosPlugin).mount('#app');
