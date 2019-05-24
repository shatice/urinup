<template>
  <div class="homeMain">
    <div class="loaderContainer">    
      <svg class="loader" aria-hidden="true"><use xlink:href="#loader"></use></svg>
    </div>
    <div class="homeContent">
      <h1 class="introTitle">{{ introTitle }}</h1>
      <div class="introContainer">
      <p class="introContent">{{ introContent }}</p>
      </div>
      <h1 class="goalTitle">{{ goalTitle }}</h1>
      <div class="goalContainer">
      <p class="goalContent">{{ goalContent }}</p>
      </div>
      <h1 class="rulesTitle">{{ rulesTitle }}</h1>
      <div class="rulesContainer"> 
      <p class="rulesContent">{{ rulesContent }}</p>
      </div>
      <router-link class="buttonHome" to="/characters">Jouer</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Tu as une envie très préssente.. Trouve le bon pour rentrer chez toi ! Attention le temps est compté avant que ta vessie soit pleine !",
      introTitle: "Introduction",
      goalTitle: "Objectif",
      rulesTitle : "Règles",
      introContent: "Mince, tu as une envie très préssente, cela tombe mal car ton appartement est à l'autre bout de la ville.",
      goalContent: "Trouve le bon chemin pour rentrer chez toi avec qu'il ne soit trop tard !",
      rulesContent : "Choisis parmi les options qui te sont proposer. Attention le temps est compté avant que ta vessie soit pleine !"
    };
  }
};
</script>
