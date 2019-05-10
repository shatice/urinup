<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/lose">Mon overboard !</router-link>
    <router-link class="button" to="/walk">J'y vais à pied</router-link>
    <router-link class="button" to="/scooter">Je prends une trotinette éléctique</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Tu n'as pas le temps de réflechir, chaque seconde compte! À toi de jouer :"
    };
  }
};
</script>
