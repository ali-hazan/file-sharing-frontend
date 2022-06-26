<template>
  <div class="bg-white">
    <file-icon />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FileIcon from './file-icon.vue'

export default defineComponent({
  name: 'FilePreview',
  components: {
    FileIcon,
  },
  props: {},
})
</script>
