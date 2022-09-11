<template>
  <Panel :header="tipoViolencia.titulo">
    <template #icons>
      <button class="p-panel-header-icon p-link" @click="$router.go(-1)">
        <span class="pi pi-angle-double-left"></span>
      </button>
    </template>
    <div>
      <img
        class="w-full img-tipo-violencia"
        :src="tipoViolencia.img"
        alt="error"
      />
      <!-- TODO: agregar descripcion y demas -->
    </div>
  </Panel>
</template>

<script>
export default {
  name: 'TipoViolencia'
};
</script>

<script setup>
import Panel from 'primevue/panel';

import { computed } from 'vue';
import tiposDeViolencia from '../json-data/tiposDeViolencia.json';
import { useRoute } from 'vue-router';

const route = useRoute();
const tipoViolencia = computed({
  get: () => {
    return tiposDeViolencia.find((tp) => tp.id == parseInt(route.params.id));
  }
});
</script>

<style scoped></style>
