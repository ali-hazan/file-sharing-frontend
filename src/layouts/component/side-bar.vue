<template>
  <div class="py-4 flex-col justify-between min-h-screen">
    <ul>
      <li v-for="item in menu" :key="item.key">
        <menu-icon :label="item.label" :icon="item.icon" class="mb-8" />
      </li>
    </ul>
    <div class="h-28 text-center rounded-lg py-4 bg-white mx-4">
      <a href="" class="block mb-3">
        <vue-feather stroke="black" type="log-out"></vue-feather>
      </a>
      <img
        class="bg-black w-10 m-auto rounded-full"
        src="https://picsum.photos/200"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuIcon from './menu-icon.vue'

export default defineComponent({
  name: 'SideBar',
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
