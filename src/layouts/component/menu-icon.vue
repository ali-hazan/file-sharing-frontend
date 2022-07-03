<template>
  <div class="block text-center hover:text-red-300 focus:text-red-500 focus:bg-black">
    <vue-feather size="22" :type="icon" />
    <div class="text-xs">
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuIcon',
  props: {
    label: { type: String, default: '' },
    icon: { type: String, default: 'home' },
  },
})
</script>
