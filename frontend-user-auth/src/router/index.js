import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import UserLogin from "../components/UserLogin.vue";
import UserSignUp from "../components/UserSignUp.vue";
import UserProfile from "../components/UserProfile.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: UserLogin },
  { path: "/signup", component: UserSignUp },
  { path: "/profile", component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
