<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/lose">Contourner la foule</router-link>
    <router-link class="button" to="/surf">Affronter les gilets jaune</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Mince on est samedi.. Il y a une manifestation à republique! Le metro ferme, tu es obligé de sortir:"
    };
  }
};
</script>
