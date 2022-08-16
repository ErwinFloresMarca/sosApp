<script setup lang="ts">
import ReloadToast from './components/ReloadToast.vue';
import Menubar from 'primevue/menubar';
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
    <Menubar :model="items"> </Menubar>
  </div>
  <ReloadToast id="reload-toast" />
</template>

<style scoped>
.content-div {
  height: calc(100vh - 58px);
}
body {
  color: var(--text-color);
  font-family: var(--font-family);
}

#reload-toast .p-toast-message .p-toast-message-content {
  justify-content: center !important;
}
</style>
