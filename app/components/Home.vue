<template>
  <div class="homeMain">
    <div class="loaderContainer">    
      <svg class="loader" aria-hidden="true"><use xlink:href="#loader"></use></svg>
    </div>
    <div class="homeContent">
      <div class="logoContainer">    
        <svg class="logo" aria-hidden="true"><use xlink:href="#logo"></use></svg>
      </div>
      <h1 class="playContent">{{ message }}</h1>
      <router-link class="buttonHome" to="/characters">Jouer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "INTRO + RÈGLES DU JEU"
    };
  }
};
</script>
