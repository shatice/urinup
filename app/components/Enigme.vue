<template>
<form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
  novalidate="true"
>

  <p v-if="errors.length">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="season">Nombre saison got</label>
    <input
      id="season"
      type="number"
      name="season"
    >
  </p>

  <p>
    <label for="lettre">Lettre en commun Bastien et Yves</label>
    <input
      id="lettre"
      type="text"
      name="lettre"
    >
  </p>

  <p>
    <label for="groupe">Meilleur groupe de la promo</label>
    <select
      id="groupe"
      type="number"
      name="groupe"
>
    </select>
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>

<script>
import game from "../data.json";

export default {
  data() {
    return {
    errors: [],
    name: null,
    email: null,
    movie: null
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (this.letter != "e" ) {
        this.errors.push("tu as perdu");
      }
      if (this.groupe != 2 ) {
        this.errors.push("tu as perdu");
      } 
      if (this.season != 8 ) {
        this.errors.push("tu as perdu");
      } 
      
      e.preventDefault();
    },
  }
}


</script>