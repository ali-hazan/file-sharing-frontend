<template>
  <navigation-bar page="signup" />
  <div class="h-4/5 flex justify-center items-center">
    <sign-up-form />
  </div>
</template>

<script lang="ts">
import SignUpForm from './components/signup-form.vue'
import NavigationBar from './components/navigatiion-bar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignUpPage',
  components: { SignUpForm, NavigationBar },
})
</script>
