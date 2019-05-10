<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/republique">Ecouter</router-link>
    <router-link class="button" to="/republique">Piquer le skate du gamin à côté</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Association"
    };
  }
};
</script>
