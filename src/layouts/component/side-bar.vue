<template>
  <div class="py-4 flex-col justify-between">
    <ul>
      <li v-for="item in menu" :key="item.key">
        <menu-icon v-if="item.key !== 3" :label="item.label" :icon="item.icon" class="mb-8" />
        <file-modal v-else>
          <menu-icon :label="item.label" :icon="item.icon" class="mb-8" />
        </file-modal>
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
import menu from './menu'
import { FileModal } from '@/components'

export default defineComponent({
  name: 'SideBar',
  components: {
    MenuIcon,
    FileModal,
  },
  setup() {
    return {
      menu,
    }
  },
})
</script>
