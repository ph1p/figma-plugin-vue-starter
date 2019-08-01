<template>
  <div class="hello">
    Create <strong>{{ count }}</strong> Rectangles in a row.

    <input v-model="count" />
    <button @click="createRect">create</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CreateRect extends Vue {
  count: number = 0;

  createRect() {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'create-rectangles',
          count: this.count
        }
      },
      '*'
    );
  }

  cancel() {
    parent.postMessage(
      {
        pluginMessage: { type: 'cancel' }
      },
      '*'
    );
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
