<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/republique">Métro News</router-link>
    <router-link class="button" to="/republique">Carte de Paris</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "L'été le métro c'est un vrai four! Prends un de ces deux accessoires pour te fabriquer un éventaille :"
    };
  }
};
</script>
