/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import * as VueRouter from 'vue-router';
import { createApp } from 'vue';
import './bootstrap';
import App from './App.vue';
import store from "./store";
import LoginComponent from "./components/LoginComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
import ClockComponent from "./components/ClockComponent.vue";
import EditClockComponent from "./components/EditClockComponent.vue";

const app = createApp(App)


const routes = [
    { path: '/', component: LoginComponent },
    { path: '/registration', component: RegisterComponent },
    { path: '/clock', component: ClockComponent },
    { path: '/edit-clock', component: EditClockComponent }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})


app.use(router);
app.use(store)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
