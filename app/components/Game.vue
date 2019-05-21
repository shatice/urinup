
<template>
  <div class="all background">
    <audio rel="preload"  autoplay loop>
      <source src="../assets/audio/pookie.mp3">
    </audio>
    <h1>{{ step.content }}</h1>  
      <ul>
        <li 
          class="choice"
          v-on:click="doActions(action)"
          v-for="action in step.actions"
          :key="action.path" 
        >
          <div class="labelAction" >{{action.label}}</div>
          <div class="actionIcon">
            <div class="actionIcon__img"></div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import game from "../data.json";

export default {
  data() {
    return {
      step: this.getStep()
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
  default: 
  require('../assets/img/paris.jpg'), 

  methods: {
    getStep() {
      //document.querySelector('.all').style.opacity = 1
      console.log("get step");
      
      return game.steps.find(
        step => step.id === parseInt(this.$route.params.id)
      );
    },


    doActions(action) {
      let timeout = null
      let timing = 500
      
      if (action.path) {
        this.animateOut(document.querySelector('.choice'))
        if(timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
          console.log("change route");
          
          this.$router.push({ params: { id: action.path } });
        }, timing);
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
    },

    animateOut(el) {
      el.style.opacity = 0
    }

  }
};
</script>
