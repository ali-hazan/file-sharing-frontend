<template>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 h-full">
    <div class="md:col-span-2 lg:col-span-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus in, provident
      voluptate earum magni! Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora sed aut,
      iste quidem ipsam expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
      necessitatibus in, provident voluptate earum magni! Harum, ea. Aperiam deleniti, libero odio
      quibusdam id tempora sed aut, iste quidem ipsam expedita. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Tempora necessitatibus in, provident voluptate earum magni!
      Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora sed aut, iste quidem ipsam
      expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus in,
      provident voluptate earum magni! Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora
      sed aut, iste quidem ipsam expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Tempora necessitatibus in, provident voluptate earum magni! Harum, ea. Aperiam deleniti,
      libero odio quibusdam id tempora sed aut, iste quidem ipsam expedita. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Tempora necessitatibus in, provident voluptate earum magni!
      Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora sed aut, iste quidem ipsam
      expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus in,
      provident voluptate earum magni! Harum, ea. Aperiam deleniti, libero odio quibusdam id tempora
      sed aut, iste quidem ipsam expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Tempora necessitatibus in, provident voluptate earum magni! Harum, ea. Aperiam deleniti,
      libero odio quibusdam id tempora sed aut, iste quidem ipsam expedita.
    </div>
    <file-preview class="hidden md:block md:col-span-1 lg:col-span-1" />
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
