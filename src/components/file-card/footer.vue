<template>
  <div class="flex justify-between">
    <div>File Size :<br />200mb</div>
    <div class="avatar-group -space-x-2">
      <div class="avatar h-8">
        <div class="w-6">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div class="avatar h-8">
        <div class="w-6">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div class="avatar h-8">
        <div class="w-6">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div class="avatar h-8 placeholder">
        <div class="w-6 bg-neutral-focus text-sm text-neutral-content">
          <span>+99</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FileFooter',
})
</script>
