<template>
  <div class="flex flex-row h-full">
    <div class="basis-auto w-full h-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus in, provident
      voluptate earum magni! Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora sed aut,
      iste quidem ipsam expedita.
    </div>
    <div class="basis-[480px] bg-white hidden lg:block">
      <file-preview />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilePreview from './components/file-preview.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    FilePreview,
  },
})
</script>
