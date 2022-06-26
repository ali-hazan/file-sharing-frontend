<template>
  <a href="" class="block text-center hover:text-red-300 focus:text-red-500">
    <vue-feather size="22" :type="icon" />
    <div class="text-xs">
      {{ label }}
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PreviewBtn',
  props: {
    label: { type: String, default: '' },
    icon: { type: String, default: 'home' },
  },
})
</script>
