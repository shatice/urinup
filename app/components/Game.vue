<template>
  <div>
    <h1>{{ step.content }}</h1>
    <ul>
<<<<<<< HEAD
      <li v-on:click="doSkip(action)" v-for="action in step.actions" :key="action.path">
        <div>{{ action.label }}</div>
=======
      <li v-on:click="doEffects(action)" v-for="action in step.actions" :key="action.path">
        <div>
          {{ action.label }}
        </div>
>>>>>>> c80289a70f1435b04d9bdb1ee1b97d3737f90be3
      </li>
    </ul>
  </div>
</template>

<script>
import countService from "../services/countService";
import game from "../data.json";

console.log(game);

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
<<<<<<< HEAD
    "$route.params.id"(to, from) {
      this.step = this.getStep();
      console.log($route.params.id);
=======
    '$route.params.id' (to, from) {
      this.step = this.getStep()
>>>>>>> c80289a70f1435b04d9bdb1ee1b97d3737f90be3
    }
  },
  methods: {
    getStep() {
      return game.steps.find(
        step => step.id === parseInt(this.$route.params.id)
      );
    },
<<<<<<< HEAD
    doSkip() {
      this.$router.push({ path: "id" });
      s;
=======
    doEffects(action) {
      if (action.path) {
        this.$router.push({params: {id: action.path}})
      }
>>>>>>> c80289a70f1435b04d9bdb1ee1b97d3737f90be3
    }
  }
};
</script>
