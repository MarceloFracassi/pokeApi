import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL ),  
  routes: [
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "404",
    //   component: () => import("../views/NotFound.vue"),
    // },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/PokeItems",
      name: "pokeItems",
      component: () => import("../views/PokeItems.vue"),
    },
    {
      path: "/Script",
      name: "script",
      component: () => import("../views/NewScript.vue"),
    },
  ],
});

export default router;
