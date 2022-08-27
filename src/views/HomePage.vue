<template>
  <div class="home-content">
    <h2>LA VIOLENCIA</h2>
    <img class="w-9" src="/SOS.jpg" />
    <H4>TIPOS DE VIOLENCIA</H4>
    <Carousel :value="tiposDeViolencia">
      <template #item="{ data }">
        <div class="flex flex-wrap flex-column">
          <img class="w-full" :src="data.img" alt="error" />
          <strong>{{ data.titulo }}</strong>
          <Button
            class="p-button-warning w-full"
            icon="pi pi-plus"
            label="VER MAS"
            @click="onClickTipoViolencia(data.id)"
          />
        </div>
      </template>
    </Carousel>
    <spam>LA VIOLENCIA CREA MÁS PROBLEMAS SOCIALES QUE LOS QUE RESUELVE</spam>
  </div>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import tiposDeViolencia from '../json-data/tiposDeViolencia.json';
import { useRouter } from 'vue-router';
const router = useRouter();
const onClickTipoViolencia = (id) => {
  router.push({
    name: 'TipoViolencia',
    params: {
      id: id
    }
  });
};
</script>

<style scoped>
.home-content {
  height: calc(100vh - 120px);
  text-align: center;
  width: 100%;
  padding: 10px;
  margin: 0px;
}
</style>
