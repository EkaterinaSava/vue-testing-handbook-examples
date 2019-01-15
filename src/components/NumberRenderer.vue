<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
export default {
  name: 'NumberRenderer',

  props: {
    even: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    numbers() {
      const evens = [];

      for(let i = 1; i < 10; i++) {
        if(i % 2 === 0) {
          evens.push(i);
        }
      }

      return evens.join(', ');
    }
  }
}
</script>

