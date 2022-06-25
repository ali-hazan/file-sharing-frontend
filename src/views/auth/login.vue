<template>
  <div class="grid grid-cols-10 h-full">
    <div class="hidden sm:block sm:col-span-5 md:col-span-4 bg-slate-600">1</div>
    <div class="col-span-10 sm:col-span-5 md:col-span-6 bg-slate-800">2</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  components: {},
})
</script>
