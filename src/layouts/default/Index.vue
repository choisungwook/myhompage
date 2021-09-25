<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-spacer />
      <v-toolbar-title class="font-weight-bold">포트폴리오</v-toolbar-title>

      <v-spacer />
      <v-spacer />

      <v-btn v-for="menu in menus" :key="menu" :to="menu.route" text>
        <div class="font-weight-bold">
          {{ menu.title }}
        </div>
      </v-btn>

      <v-spacer />
    </v-app-bar>

    <v-main class="grey darken-4">
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",

  data: () => ({
    menus: [
      { title: "나의 소개", route: "/portfolio/introduce" },
      { title: "나의 스킬", route: "/portfolio/myskills" },
      { title: "공부기록", route: "/portfolio/study" },
      // { title: "포트폴리오", route: "/portfolio" },
    ],
  }),

  computed: {
    ...mapState("menu", ["menus"]),
    drawer: {
      get() {
        return this.$store.getters["menu/getDrawer"];
      },
      set(value) {
        return this.$store.dispatch("menu/toggleDrawer", value);
      },
    },
  },
};
</script>
