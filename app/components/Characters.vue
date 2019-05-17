<template>
  <div>
    <h1>{{ gameChar.content }}</h1>
    <ul>
      <li class="choice" v-on:click="doEffects(character)" v-for="character in gameChar.characters">
        <div>
          {{ character.class }} |
          {{ character.accessory }}
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

      // TEST FOR LOCALSTORAGE
      if (character.accessory === 'phone') {
        // localStorage.setItem('accessory', JSON.stringify(this.accessory));
        localStorage.setItem('accessory', 'phone')
      } else if (character.accessory === 'map') {
        localStorage.setItem('accessory', 'map')
      }
      console.log(localStorage)
    }
  },
};
</script>