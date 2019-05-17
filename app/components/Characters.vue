<template>
  <div>
    <h1>{{ gameData.charactersPage.content }}</h1>
    <ul>
      <li>
        <div>{{ gameData.charactersPage.characters[0].class }}</div>
      </li>
      <li>
        <div>{{ gameData.charactersPage.characters[1].class }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import game from "../data.json";

export default {
  data() {
    return {
      gameData: game
    };
  }
};
</script>
