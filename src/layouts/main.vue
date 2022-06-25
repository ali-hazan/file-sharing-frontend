<template>
  <div class="main-layout">
    <div>Hello World</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
})
</script>
