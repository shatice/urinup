
<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/win">carte</router-link>
    <router-link class="button" to="/lose">Pas carte</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Génial! Tu es un génie et rien ne te fais peur! Tu arrives enfin à destination."
    };
  }
};
</script>
