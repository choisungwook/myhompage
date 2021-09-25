import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/default/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/portfolio",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "/portfolio/myskills",
        name: "myskills",
        component: () => import("@/views/Myskills.vue"),
      },
      {
        path: "/portfolio/introduce",
        name: "introduce",
        component: () => import("@/views/Introduce.vue"),
      },
      {
        path: "/portfolio/study",
        name: "study",
        component: () => import("@/views/Study.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
