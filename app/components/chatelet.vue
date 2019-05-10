<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/change">Gauche</router-link>
    <router-link class="button" to="/right">Droite</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Châtelet c'est un vrai labyrinthe ! Tu n'as plus qu'à suivre ton instinct ..."
    };
  }
};
</script>
