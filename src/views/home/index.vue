<template>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 h-full">
    <div class="md:col-span-2 lg:col-span-3">
      <div class="grid md:grid-cols-3 lg:grid-cols-4">
        <file-card />
        <file-card />
        <file-card />
        <file-card />
      </div>
      <div>
        <file-modal />
      </div>
    </div>

    <file-preview class="hidden md:block md:col-span-1 lg:col-span-1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilePreview from './components/file-preview.vue'
import { FileCard, FileModal } from '@/components'

export default defineComponent({
  name: 'HomePage',
  components: {
    FilePreview,
    FileCard,
    FileModal,
  },
})
</script>
