<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/denfert">Gauche, j'ai une bonne intuition</router-link>
    <router-link class="button" to="/lose">Droite, je suis droitié</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Il paraît que des gens s'y perdent.."
    };
  }
};
</script>