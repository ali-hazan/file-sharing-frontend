<template>
  <img
    class="block m-auto w-28 my-10"
    :src="require(`@/assets/images/file-type/${icon}.png`)"
    alt="File"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FileIcon',
  props: {
    icon: { type: String, default: 'file' },
  },
})
</script>
