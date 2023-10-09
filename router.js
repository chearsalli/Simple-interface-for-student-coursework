// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './components/Header.vue'; 
import Login from './pages/login.vue';    

Vue.use(VueRouter);

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/dashboard', component: Dashboard },
    { path: '/login', component: Login }
  ],
  beforeEach(to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // This route requires auth, check if logged in
      if (!isLoggedIn()) {
        // User is not logged in, redirect to login page
        next({ name: 'login' });
      } else {
        // User is logged in, proceed to route
        next();
      }
    } else {
      // This route does not require auth, proceed to route
      // Redirect logged-in users to their dashboard
      if (isLoggedIn()) {
        next({ name: 'dashboard' });
      } else {
        next();
      }
    }
  }
});

export default router;