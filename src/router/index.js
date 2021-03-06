import Vue from 'vue';
import VueRouter from 'vue-router';

import Editor from '../views/EditorView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Editor,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
