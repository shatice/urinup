<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/lose">Oui</router-link>
    <router-link class="button" to="/subway">Non</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "ecouteurs ?"
    };
  }
};
</script>
