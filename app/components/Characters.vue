<template>
  <div>
    <h1>{{ gameChar.content }}</h1>
    <ul>
      <li class="choice" v-on:click="doEffects(character)" :key="character.class" v-for="character in gameChar.characters">
        <div>
          {{ character.label }}
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
      gameChar: game.charactersPage
    };
  },
  methods: {
    doEffects(character) {
      this.$router.push({path: '/game/1'})

      // ITEMS IN LOCALSTORAGE
      if (character.asset === 'phone') {
        localStorage.setItem('asset', 'phone')
      } else if (character.asset === 'newspaper') {
        localStorage.setItem('asset', 'newspaper')
      }
      console.log(localStorage)
    }
  },
};
</script>
