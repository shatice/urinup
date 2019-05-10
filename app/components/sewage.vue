<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/catacombs">Je continue dans les catacombes</router-link>
    <router-link class="button" to="/start">Je grimpe par l'échelle, ça pu ici</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "OUTCH! Tu n'as pas fait attention et tu es tombé dans une bouche d'égout:"
    };
  }
};
</script>