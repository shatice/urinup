<template>
<form>

<input id="name" name="name" v-model="name"  placeholder="modifiez-moi">
<p>{{ name }}</p>

  <p v-if="errors.value">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

</template>

<script>
import game from "../data.json";

export default {
  data() {
    return {
     errors: [],
     name: null
    }
  },
 methods:{
    checkForm: function (e) {
      if (this.name.value === "helene") {
        return true;
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }

      e.preventDefault();
    }
 }
}


</script>