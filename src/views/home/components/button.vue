<template>
  <a href="" class="block text-center hover:text-red-300 focus:text-red-500">
    <div class="bg-black w-10 h-10 p-2 rounded-full hover:bg-gray-600">
      <vue-feather size="22" stroke="white" :type="icon" />
    </div>

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
