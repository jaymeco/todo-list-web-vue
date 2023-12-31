/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { createApp } from 'vue';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import App from './App.vue';
import router from './router';
import store from './store';
import darkTheme from './theme/dark';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      darkTheme,
    },
  },
});

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
