<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/Home">Recommencer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Tu as perdu tu t'es fait pipi dessus"
    };
  }
};
</script>
