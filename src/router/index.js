import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/default/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "/myskills",
        name: "myskills",
        component: () => import("@/views/Myskills.vue"),
      },
      {
        path: "/introduce",
        name: "introduce",
        component: () => import("@/views/Introduce.vue"),
      },
      {
        path: "/study",
        name: "study",
        component: () => import("@/views/Study.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/portfolio",
  routes,
});

export default router;
