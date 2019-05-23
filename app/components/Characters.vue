<template>
  <div>
    <h1>{{ gameChar.content }}</h1>
    <ul>
      <li class="characterItem" v-on:click="doEffects(character)" :key="character.class" v-for="character in gameChar.characters">
        <div>
          <svg class="characterChoice" aria-hidden="true"><use v-bind:href="`${character.svg}`"></use></svg>
          {{ character.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import game from "../data.json";
import gameService from '../services/gameService'
export default {
  data() {
    return {
      gameService: gameService,
      gameChar: game.charactersPage
    };
  },
  methods: {
    doEffects(character) {
      this.$router.push({path: '/game/1'})

      // CHARACTERS IN LOCALSTORAGE
      if (character.svg === '#parisian') {
        localStorage.setItem('character', 'parisian')
        localStorage.setItem('asset', 'phone')
      } else if (character.svg === '#backpacker') {
        localStorage.setItem('character', 'backpacker')
        localStorage.setItem('asset', 'newspaper')
      }


      console.log(localStorage)
    }
  },
};
</script>
