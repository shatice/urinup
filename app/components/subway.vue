<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/wagon">Direct</router-link>
    <router-link class="button" to="/chatelet">Avec hangement</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Tu es arrivé au métro pour rejoindre Chatelet tu as le choix"
    };
  }
};
</script>
