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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FileCard, FileModal } from '@/components'

export default defineComponent({
  name: 'HomePage',
  components: {
    FileCard,
    FileModal,
  },
})
</script>
