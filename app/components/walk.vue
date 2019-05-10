<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/sewage">Je cours comme Usain Bolt</router-link>
    <router-link class="button" to="/subway">Je préfère marcher j'ai mis mes chaussures de ville</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Ok Ok tu es un bobo écolo, maintenant choisis ton allure :"
    };
  }
};
</script>
