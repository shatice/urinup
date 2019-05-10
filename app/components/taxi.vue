<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/lose">Pas le choix, je ralentis</router-link>
    <router-link class="button" to="/truck">J'en peux plus, je prends le risque</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:
        "Tu n'as que 15€, le texi ne peux pas t'emmener plus loin. Tu décides de prendre un vélib mais tu te fais klaxonner par toutes les voitures"
    };
  }
};
</script>
