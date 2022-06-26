<template>
  <div class="bg-white p-5">
    <h2 class="flex item-center py-4 border-b border-gray-300">
      <vue-feather class="mr-2" type="file-text"></vue-feather>File Prview
    </h2>
    <div class="border-b border-gray-300 pb-8">
      <file-icon />
      <h3 class="text-gray-600 font-bold">This is File Name.png</h3>
      <h4 class="text-sm">14 Gb <span class="text-gray-500">12 Aug, 2022</span></h4>
    </div>
    <div class="py-4">
      <h3 class="text-gray-600 font-bold">File Description</h3>
      <p class="text-sm py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quaerat sint
        consectetur laboriosam repudiandae suscipit excepturi nihil.
      </p>
    </div>
    <div class="pb-4 border-b border-gray-300">
      <h3 class="text-gray-600 font-bold">Share With</h3>
      <div></div>
    </div>
    <div class="flex justify-between w-40 m-auto pt-4">
      <preview-btn icon="share-2" label="share" />
      <preview-btn icon="edit" label="edit" />
      <preview-btn icon="delete" label="delete" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FileIcon from './file-icon.vue'
import PreviewBtn from './button.vue'

export default defineComponent({
  name: 'FilePreview',
  components: {
    FileIcon,
    PreviewBtn,
  },
  props: {},
})
</script>
