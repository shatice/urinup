<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/page3">A gauche</router-link>
    <router-link class="button" to="/page4">A droite</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Où aller ?"
    };
  }
};
</script>
