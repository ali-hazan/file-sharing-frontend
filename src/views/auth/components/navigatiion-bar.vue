<template>
  <div class="flex justify-between p-4">
    <div class="text-right">
      <img class="w-32 h-6" src="@/assets/images/logo.png" alt="Alchemi" />
      <h1>FileX</h1>
    </div>

    <a-button class="text-xs" variant="dark" label="Sign Up" @click="buttonClicked" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AButton from '@/components/button/button.vue'

export default defineComponent({
  name: 'NavigationBar',
  components: { AButton },
  setup() {
    const buttonClicked = () => {
      console.log('Button Clicked')
    }
    return {
      buttonClicked,
    }
  },
})
</script>
