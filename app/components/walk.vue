<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/page2">A gauche</router-link>
    <router-link class="button" to="/page6">A droite</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Chemin dangereux"
    };
  }
};
</script>
