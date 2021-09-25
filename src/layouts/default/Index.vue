<template>
  <v-app>
    <v-app-bar app color="white" primary>
      <v-toolbar-title>포트폴리오</v-toolbar-title>

      <v-spacer />

      <v-list class="d-flex align-center">
        <v-list-item
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.route"
          link
        >
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>

    <v-main>
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
      { title: "나의 소개", route: "/test" },
      { title: "나의 스킬", route: "#" },
      { title: "공부기록", route: "#" },
      { title: "포트폴리오", route: "#" },
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
