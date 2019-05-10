<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/start">Smartphone</router-link>
    <router-link class="button" to="/start">Carte en papier</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Choisis ton accessoire"
    };
  }
};
</script>
