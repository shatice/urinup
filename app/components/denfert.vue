<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/chatelet">Je fonce !!!</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Tu sors à denfert où tu prends le métro jusqu'à chatelet, quel raccourci !"
    };
  }
};
</script>
