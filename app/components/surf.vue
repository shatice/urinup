<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/taxi">Taxi</router-link>
    <router-link class="button" to="/uber">Uber</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Trop fort! À l'aide de ta planche tu as réussi à surfer sur toute la foule! Il ne te reste plus beaucoup de temps, à toi de choisir:"
    };
  }
};
</script>
