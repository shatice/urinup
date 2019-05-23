<template>
  <div class="loseMain main">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Recommencer</router-link>
    <br />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'GAME OVER'
    }
  }
};
</script>