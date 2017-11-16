<template>
  <div class="card" @click="cardClick">
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['value'],
  methods: {
    cardClick() {
      this.$emit('cardClick', this.value);
    },
  },
};
</script>

<style>
  .card {
    background: orange;
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    color: white;
    cursor: pointer;
    font-size: 6rem;
    height: 200px;
    line-height: 200px;
    margin: 1rem;
    width: 200px;
  }
  @media only screen and (max-width: 479px) {
    .card {
      font-size: 5rem;
      width: 39%
    }
  }
</style>
