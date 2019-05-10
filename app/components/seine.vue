<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/station">Premier</router-link>
    <router-link class="button" to="/lose">Deuxième</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Catastrophe! Tu es tombé dans la seine! Le courant est très fort. Cette échelle est ta seule chance de t'en sortir, choisis le bon barreau pour t'appuyer !"
    };
  }
};
</script>
