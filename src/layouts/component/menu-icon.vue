<template>
  <a href="" class="block text-center hover:text-red-300">
    <vue-feather size="18" :type="icon" />
    <div class="text-xs">
      {{ label }}
    </div>
  </a>
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
