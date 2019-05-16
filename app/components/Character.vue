<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import countService from '../services/countService';

export default {
  data() {
    return {
      message: "CHOISIS TON CHAR + ACCESSOIR"
    }
  }
};
</script>