<script setup lang="ts">
import ReloadToast from './components/ReloadToast.vue';
import { ref } from 'vue';
const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'Lineas De Emergencia',
    icon: 'pi pi-home',
    to: '/lineas-de-emergencia'
  },
  {
    label: 'Lineas De Orientación',
    icon: 'pi pi-home',
    to: '/lineas-de-orientacion'
  }
]);
</script>

<template>
  <div class="w-full h-full">
    <div class="content-div">
      <router-view></router-view>
    </div>
    <div class="menu-container">
      <router-link
        v-for="item in items"
        :key="item.to"
        v-slot="{ navigate, isActive, isExactActive }"
        :to="item.to"
        custom
      >
        <div
          class="flex flex-wrap flex-column justify-content-center"
          :class="{
            'p-button': true,
            'p-button-secondary': isActive,
            'p-button-secondary': isExactActive
          }"
          style="height: 80px"
          @click="navigate"
        >
          <i :class="item.icon"></i>{{ item.label }}
        </div>
      </router-link>
    </div>
  </div>
  <ReloadToast id="reload-toast" />
</template>

<style scoped>
.content-div {
  height: calc(100vh - 80px);
}
.menu-container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  height: 80px;
  grid-gap: 2px;
}
body {
  color: var(--text-color);
  font-family: var(--font-family);
}

#reload-toast .p-toast-message .p-toast-message-content {
  justify-content: center !important;
}
</style>
