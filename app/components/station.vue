<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/chatelet">Fonce !</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Bravo! Le courant t'as fait gagner du temps, tu es bien arrivé au métro et tu as même gagné des stations"
    };
  }
};
</script>
