<template>
  <div class="gameMain">
    <div class="urinupContainer">    
      <svg class="urinupLogo" aria-hidden="true"><use v-bind:href="`${step.logoSite}`"></use></svg>
    </div>
    <div class="soundContainer">
      <!-- <svg class="soundIcon" aria-hidden="true"><use xlink:href="#soundIcon"></use></svg> -->
      <audio rel="preload" controls loop>
      <source src="../assets/audio/pookie.mp3">
    </audio>
    </div>
    <div class="titleContainer">
    <h1>{{ step.content }}</h1>  
    </div>
    <div class="svgContainer">    
      <svg class="character" aria-hidden="true"><use v-bind:href="`${step.svg}`"></use></svg>
    </div>
    <ul class="choicesList">
      <li
        class="choiceItem"
        v-on:click="doActions(action)"
        v-for="action in step.actions"
        :key="action.path">
        <div class="iconAction">
          <div 
           class="labelAction" >{{action.label}}
          </div>
          <div class="logoContainer">
            <svg class="logo" aria-hidden="true"><use v-bind:href="`${action.logo}`"></use></svg>
          </div>
          
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import countService from '../services/countService';
import game from '../data.json';

console.log(game);

export default {
  data() {
    return {
      step: this.getStep()

    };
  },
  mounted() {
    console.log('Mounted')
  },
  watch: {
    '$route.params.id' (to, from) {
      this.step = this.getStep()
    }
  },
  methods: {
  
    getStep() {
      return game.steps.find(step => step.id === parseInt(this.$route.params.id))
    },
    doActions(action) {

      if (action.path) {
        this.$router.push({params: {id: action.path}})
      }

      // LOCALSTORAGE
      if ((action.label === 'Pas écouteurs' || action.label === 'Gauche') && localStorage.getItem('asset') === 'newspaper') {
        this.$router.push({path: '/game/14'})
      }
      if ((action.label === 'Taxi' || action.label === 'Uber') && localStorage.getItem('asset') === 'newspaper') {
        this.$router.push({path: '/game/16'})
      }
      if (action.asset === "newspaper") {
        localStorage.setItem('asset', 'newspaper')
        console.log(localStorage)
      }

      // FIN déterminée par phone || newspaper 
      if (action.category === 'win/lose' && localStorage.getItem('asset') === 'phone') {
        this.$router.push({path: '/lose'})
      }

      // Écrans de fin Win || Lose
      if (action.category === 'win') {
        this.$router.push({path: '/win'})
      }
      if (action.category === 'lose') {
        this.$router.push({path: '/lose'})
      }

      // Qd on choisi Eau || Journal => item ds localStorage => direction la même frame
      if (action.category === 'sameGoal') {
        this.$router.push({path: '/game/14'})
      }

    }
  },
}
</script>

