<template>
  <div class="charactersMain main">
      <h1 class="charactersContent">{{ gameChar.content }}</h1>
      <ul class="charactersList">
        <li class="characterItem" v-on:click="doEffects(character)" :key="character.class" v-for="character in gameChar.characters">
          <div class="characterContainer">
            <svg class="characterChoice" aria-hidden="true"><use v-bind:href="`${character.svg}`"></use></svg>
          </div>
          <h2 class="characterLabel">{{ character.label }}</h2>
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
    mounted() {
  },
  methods: {
    doEffects(character) {
      this.$router.push({path: '/game/1'})

      gameService.characterChoice = character.svg;

      localStorage.setItem('character', character.svg);

      // CHARACTERS IN LOCALSTORAGE
      if (character.svg === '#parisian') {
        localStorage.setItem('asset', 'phone')
      } else if (character.svg === '#backpacker') {
        localStorage.setItem('asset', 'newspaper')
      }
    }
  },
};
</script>
