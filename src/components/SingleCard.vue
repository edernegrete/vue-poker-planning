<template>
  <div class="SingleCard">
    <router-link to="/" class="big">🏠</router-link>
    <card :value="cardValue"></card>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'SingleCard',
  components: {
    Card,
  },
  computed: {
    cardValue() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
  .big {
    font-size: 3rem;
  }
</style>
