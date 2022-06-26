<template>
  <div class="flex sm:flex-row min-h-screen">
    <side-bar class="basis-24 bg-black text-white hidden sm:flex" />
    <div class="basis-auto w-full pb-20 sm:pb-0">
      <router-view />
    </div>
  </div>
  <bottom-bar class="block sm:hidden fixed bottom-0 w-full" />
</template>

<script lang="ts">
import SideBar from './component/side-bar.vue'
import BottomBar from './component/bottom-bar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    SideBar,
    BottomBar,
  },
})
</script>
