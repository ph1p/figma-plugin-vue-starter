<template>
  <div class="home">
    <h2>Vue Figma</h2>
    <CreateRect />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CreateRect from '@/components/CreateRect.vue'; // @ is an alias to /src

@Component({
  components: {
    CreateRect
  }
})
export default class Home extends Vue {}
</script>
