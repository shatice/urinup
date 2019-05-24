<template>
  <div class="winMain">
    <div class="winContent">
    <h1 class="winTitle">{{ message }}</h1>
    <p class="winMessage">{{winMessage}}</p>
    <div class="toiletsContainer">    
      <svg class="toilets" aria-hidden="true"><use xlink:href="#toilets"></use></svg>
    </div>
    <div class="btnWinRestartContainer">
      <div class="btnWinRestart" v-on:click="switchToChar()" >Rejouer</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'VICTOIRE', 
      winMessage: 'hehedfffffsdnkbekvbervbrkvbk"rbvkerbvkerjbvkrjvbr"jvn'
    }
  }
};
</script>