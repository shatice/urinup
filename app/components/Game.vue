
<template>
  <div class="background" v-bind:style="{ 'background-image': `url(${require(`${step.background}`)})` }">
    <h1>{{ step.content }}</h1>
    <svg viewBox="0 0 24 24"> 
    <use v-bind:href="`${step.perso}`" x="5" y="5" style="opacity:1.0" />
    </svg>     
    <br>
    <ul>
      <li @click="show = !show"
        class="choice"
        v-on:click="doActions(action)"
        v-for="action in step.actions"
        :key="action.path" 
      >
      <div class="actionIcon"></div>
        <br>
        <div>{{step.logo}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import game from "../data.json";

export default {
  data() {
    return {
      step: this.getStep(),
      show: true
    };
  },
  mounted() {
    console.log("Mounted");
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },
  default: require('../assets/img/paris.jpg'),
  methods: {
    getStep() {
      return game.steps.find(
        step => step.id === parseInt(this.$route.params.id)
      );
    },
  
    doActions(action) {
      if (action.path) {
        this.$router.push({ params: { id: action.path } });
      }
      // TEST FOR LOCALSTORAGE
      if (
        (action.label === "Pas écouteurs" || action.label === "Gauche") &&
        localStorage.getItem("accessory") === "map"
      ) {
        this.$router.push({ path: "/game/19" });
      }
      if (
        (action.label === "Taxi" || action.label === "Uber") &&
        localStorage.getItem("accessory") === "map"
      ) {
        this.$router.push({ path: "/game/22" });
      }
      // if (action.label === 'Uber' && localStorage.getItem('accessory') === 'map') {
      //   {{ action.ifUber }}
      // }
      if (action.category === "Victoire") {
        this.$router.push({ path: "/win" });
      }
      if (action.category === "Game Over") {
        this.$router.push({ path: "/loose" });
      }
    }
  }
};
</script>
