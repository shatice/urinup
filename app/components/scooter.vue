<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/docks">Route</router-link>
    <router-link class="button" to="/sewage">Trottoir</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "La trotinette c'est dangeureux! Où veux-tu rouler ?"
    };
  }
};
</script>