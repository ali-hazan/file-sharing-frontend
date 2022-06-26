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
import menu from './menu'

export default defineComponent({
  name: 'BottomBar',
  components: {
    MenuIcon,
  },
  setup() {
    return {
      menu,
    }
  },
})
</script>
