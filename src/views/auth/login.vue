<template>
  <navigation-bar />
  <div class="h-4/5 flex justify-center items-center">
    <login-form />
  </div>
</template>

<script lang="ts">
import LoginForm from './components/login-form.vue'
import NavigationBar from './components/navigatiion-bar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm, NavigationBar },
})
</script>
