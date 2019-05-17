<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/characters">Jouer</router-link>
    <br />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'INTRO + RÈGLES DU JEU'
    }
  }
};
</script>
