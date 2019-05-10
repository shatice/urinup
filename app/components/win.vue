<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/home">Je veux battre mon record</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Tu as gagné ! Vas te soulager dans les toilettes et recommence !"
    };
  }
};
</script>
