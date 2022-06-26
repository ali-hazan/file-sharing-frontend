<template>
  <ul class="px-8 py-4 flex justify-between bg-black text-white">
    <li v-for="item in menu" :key="item.key">
      <menu-icon :label="item.label" :icon="item.icon" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuIcon from './menu-icon.vue'

export default defineComponent({
  name: 'BottomBar',
  components: {
    MenuIcon,
  },
  setup() {
    const menu = [
      { key: 1, label: 'Home', icon: 'home' },
      { key: 2, label: 'Files', icon: 'file' },
      { key: 3, label: 'Rescent', icon: 'clock' },
      { key: 4, label: 'Settings', icon: 'settings' },
    ]
    return {
      menu,
    }
  },
})
</script>
