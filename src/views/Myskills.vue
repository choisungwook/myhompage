<template>
  <v-container class="pt-10">
    <v-row justify="center">
      <div class="white--text display-3">나의 스킬</div>
    </v-row>
    <v-row justify="center" class="pt-10">
      <v-col>
        <v-card elevation="2" shaped>
          <v-card-title class="font-weight-bold display-2">
            데브옵스
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-list>
            <v-list-item v-for="item in devops_items" :key="item">
              <v-list-item-title class="display-1">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="2" shaped>
          <v-card-title class="font-weight-bold display-2"> 개발 </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-list>
            <v-list-item v-for="item in development_items" :key="item">
              <v-list-item-title class="display-1">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="2" shaped>
          <v-card-title class="font-weight-bold display-2"> 기타 </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-list>
            <v-list-item v-for="item in etc_items" :key="item">
              <v-list-item-title class="display-1">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="2" shaped>
          <v-card-title class="font-weight-bold display-2">
            현재 공부 중
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-list>
            <v-list-item v-for="item in studying" :key="item">
              <v-list-item-title class="display-1">
                {{ item }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Myskills",

  data: () => ({
    devops_items: [
      "Kubernetes",
      "Aws",
      "Jenkins",
      "Docker",
      "VirtualBox",
      "Vmware",
      "Ansible",
      "Vagrant",
      "가비아 관리",
      "Git",
      "Nginx",
    ],
    development_items: ["Springboot", "JPA", "Flask", "Fastapi", "Redis"],
    etc_items: [
      "자격증 - 정보처리기사, 정보보안기사, CKA",
      "인공지능 파이프라인",
    ],
    studying: [
      "Spring MVC",
      "Springsecurity",
      "Terraform",
      "Sql",
      "Java",
      "Kubernetes-SDK",
      "Kubernetes-metrics",
      "Kubernetes-logging",
      "Vuejs",
      "Github SDK",
    ],
  }),
};
</script>
