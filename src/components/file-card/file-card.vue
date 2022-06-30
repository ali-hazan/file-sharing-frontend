<template>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-2">
    <div>
      <file-header class="m-2" />
    </div>
    <div class="px-6 py-4">
      <file-content />
    </div>
    <div class="px-6 pt-4 pb-2">
      <file-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FileContent from './file.vue'
import FileFooter from './footer.vue'
import FileHeader from './header.vue'

export default defineComponent({
  name: 'FileCard',
  components: {
    FileContent,
    FileFooter,
    FileHeader,
  },
})
</script>
