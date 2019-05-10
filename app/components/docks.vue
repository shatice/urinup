<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/seine">Continuer en trotinette</router-link>
    <router-link class="button" to="/chatelet">S'arrêter et marcher</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Oulala! Tu passes par les quais, ca devient galère avec tous ces pavés..."
    };
  }
};
</script>
