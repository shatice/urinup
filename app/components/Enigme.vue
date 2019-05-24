<template>
  <div class="enigmaMain">
    <ul class="enigmaList">
      <li class="enigmaItem">Question 1</li>
      <li class="enigmaItem">Question 2</li>
      <li class="enigmaItem">Question 3</li>
      <li class="enigmaItem">Question 4</li>
      <li class="enigmaItem">Question 5</li>
    </ul>

    <form action="" method="get" class="form-example">
      <div class="formInput">
        <label for="char1">DIGICODE </label>
        <input v-on:keyup="doEnigma()" class="input" type="text" name="char1" id="char1" maxlength="5" required >
      </div>
    </form>
  </div>
</template>

<script>
import game from "../data.json";

export default {
  methods: {
    doEnigma() {
      var input = document.querySelector('.formInput input[name=char1]');
      var value = ""; 

      value += input.value;
      
      if (value === 'sarah') {
        this.$router.push({path: '/win'})
      } 
      if (value.length === 5 && input.value !== 'sarah') {
        this.$router.push({path: '/lose'})
      }
    }
  }
}


</script>