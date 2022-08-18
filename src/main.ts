import { createApp } from 'vue';

import PrimeVue from 'primevue/config';

import ToastService from 'primevue/toastservice';

import 'primevue/resources/primevue.min.css';

import 'primevue/resources/themes/lara-light-indigo/theme.css';

import 'primeflex/primeflex.css';

import 'primeicons/primeicons.css';

import Tooltip from 'primevue/tooltip';

import App from './App.vue';

import router from './router';

const app = createApp(App);

app.directive('tooltip', Tooltip);

app.use(router).use(PrimeVue).use(ToastService).mount('#app');
