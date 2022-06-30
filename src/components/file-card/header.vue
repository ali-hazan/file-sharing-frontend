<template>
  <div class="flex justify-between">
    <vue-feather type="star"></vue-feather>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="">
        <vue-feather type="more-vertical"></vue-feather>
      </label>
      <ul tabindex="0" class="dropdown-content menu p-2 hover shadow rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FileHeader',
})
</script>
