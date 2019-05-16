<template>
  <div>
    <h1>{{ characters.content }}</h1>
    <ul>
      <li v-on:click="doEffects(action)" v-for="action in step.actions" :key="action.path">
        <div>{{ action.label }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import game from "../data.json";

export default {
  data() {
    return {
      characters: this.getCharacters()
    };
  }
};
</script>
