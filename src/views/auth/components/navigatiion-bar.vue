<template>
  <div class="flex justify-between p-4">
    <div class="text-right">
      <img class="w-32 h-6" src="@/assets/images/logo.png" alt="Alchemi" />
      <h1>FileX</h1>
    </div>

    <a-button class="text-xs" variant="dark" :label="label" @click="changeRoute" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import AButton from '@/components/button/button.vue'
import router from '@/router'

type PageType = 'login' | 'signup'

export default defineComponent({
  name: 'NavigationBar',
  components: { AButton },
  props: {
    page: { type: String as PropType<PageType>, default: 'login' },
  },

  setup(props) {
    const changeRoute = () => {
      props.page === 'login' ? router.push({ name: 'SignUp' }) : router.push({ name: 'Login' })
    }
    const label = computed(() => (props.page === 'login' ? 'Sign Up' : 'Login'))

    return {
      changeRoute,
      label,
    }
  },
})
</script>
