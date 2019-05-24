<template>
  <div class="gameMain main">
    <div class="urinupContainer">    
      <svg class="urinupLogo" aria-hidden="true"><use v-bind:href="`${step.logoSite}`"></use></svg>
    </div>

    <div class="soundContainer">
      <svg class="soundIcon" aria-hidden="true"><use xlink:href="#soundIcon"></use></svg>
      <audio rel="preload" autoplay controls loop>
        <!-- <source src="../assets/audio/pookie.mp3"> -->
      </audio>
    </div>
    <div class="titleContainer">
      <h1>{{ step.content }}</h1>  
    </div>
    <div class="svgContainer">    
      <svg class="character" aria-hidden="true"><use v-bind:href="`${character}`"></use></svg>
    </div>

    <ul class="choicesList">
      <li
        class="choiceItem"
        v-on:click="doActions(action)"
        v-for="action in step.actions"
        :key="action.path">

        <div class="iconAction">
          <div class="labelAction" >{{action.label}}</div>
          <div class="logoContainer">
            <svg class="logo" aria-hidden="true"><use v-bind:href="`${action.logo}`"></use></svg>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import gameService from '../services/gameService';
import game from '../data.json';

export default {
  data() {
    return {
      gameService: gameService,
      step: this.getStep(), 
      character : '#parisian'
    };
  },
  mounted() {
    console.log('Mounted')
    this.character = gameService.characterChoice;
    console.log(this.character);
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

      var char = document.querySelector('.character');
      
      if (action.test === 'test') {
        char.style.opacity = '1';
      }

      // CHARACTERS STATES
      var charParisian = document.querySelector('.parisian'),
          charBackpacker = document.querySelector('.backpacker');


      if (action.characterState === 'walking') {
        charParisian.classList.add('is-walking');
        charBackpacker.classList.add('is-walking');
      } else if (action.characterState !== 'walking') {
        charParisian.classList.remove('is-walking');
      }

      if (action.characterState === 'running') {
        charParisian.classList.add('is-running');
        charBackpacker.classList.add('is-running');
      } else if (action.characterState !== 'running') {
        charParisian.classList.remove('is-running');
        charBackpacker.classList.remove('is-running');
      }

      if (action.characterState === 'scooting') {
        charParisian.classList.add('is-scooting');
        charBackpacker.classList.add('is-scooting');
      } else if (action.characterState !== 'scooting') {
        charParisian.classList.remove('is-scooting');
        charBackpacker.classList.remove('is-scooting');
      }

      if (action.characterState === 'skating') {
        charParisian.classList.add('is-skating');
        charBackpacker.classList.add('is-skating');
      } else if (action.characterState !== 'skating') {
        charParisian.classList.remove('is-skating');
        charBackpacker.classList.remove('is-skating');
      }

      if (action.characterState === 'dabbing') {
        charParisian.classList.add('is-dabbing');
        charBackpacker.classList.add('is-dabbing');
      } else if (action.characterState !== 'dabbing') {
        charParisian.classList.remove('is-dabbing');
        charBackpacker.classList.remove('is-dabbing');
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

      // if (localStorage.getItem('character') === 'backpacker') {
      //   this.character = '#backpacker'
      // }

      console.log(this.character)

      // FIN déterminée par phone || newspaper 
      if (action.category === 'win/lose') {

        if (localStorage.getItem('asset') === 'phone') {
          this.$router.push({path: '/lose'})
        }
        if (localStorage.getItem('asset') === 'newspaper') {
          this.$router.push({path: '/enigme'})
        }
      }

      // Écrans de fin Win || Lose
      if (action.category === 'win') {
        this.$router.push({path: '/win'})
      }
      if (action.category === 'lose') {
        this.$router.push({path: '/lose'});
        gameService.endContent = action.loseSentence;
      }

      // Qd on choisi Eau || Journal => item ds localStorage => direction la même frame
      if (action.category === 'sameGoal') {
        this.$router.push({path: '/game/14'})
      }

      // COUNTER

      if(action.category === 'wasteTime') {
        gameService.actualTime -= 5; 
      }
      if (gameService.actualTime >= gameService.maxTime) {
        this.$router.push({path: '/lose'})
      }
    }
  },
}
</script>

