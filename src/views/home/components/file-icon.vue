<template>
  <img :src="require(`@/assets/images/file-type/${icon}.png`)" alt="" srcset="" />
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
