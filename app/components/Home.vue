<template>
  <div class="homeMain">
    <div class="bgIntroContainer">    
      <svg class="bgIntro" aria-hidden="true"><use xlink:href="#bgIntro"></use></svg>
    </div>
    <div>
      
    </div>
    <h1>{{ message }}</h1>
    <router-link class="button" to="/characters">Jouer</router-link>
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
