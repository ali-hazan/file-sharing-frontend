<template>
  <div class="flex flex-row h-full">
    <side-bar class="basis-24 bg-black text-white" />
    <div class="basis-auto w-full h-full">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from './component/side-bar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    SideBar,
  },
})
</script>
