<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <instagram-card />
    </div>
    <div class="col-3">... ovdje ide desni stupac!</div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import InstagramCard from '../components/InstagramCard.vue';

export default {
  name: "HomeView",
  components: {
    InstagramCard,
  },
};
</script>
