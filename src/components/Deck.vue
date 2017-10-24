<template>
  <div class="deck">
    <card v-for="card in cards" :value="card.value" @cardClick="navigate"></card>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'Deck',
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { value: 0 },
        { value: 1 / 2 },
        { value: 2 },
        { value: 3 },
        { value: 5 },
        { value: 8 },
        { value: 13 },
        { value: 20 },
        { value: 40 },
        { value: 100 },
        { value: '∞' },
        { value: '?' },
        { value: '☕️' },
      ],
    };
  },
  methods: {
    navigate(value) {
      this.$router.push({ path: `/card/${value}` });
    },
  },
};
</script>

<style scoped>
  .deck {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1074px;
    margin: 0 auto;
  }
</style>
