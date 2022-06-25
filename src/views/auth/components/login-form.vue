<template>
  <div class="bg-white py-12 text-center rounded-[18px] shadow-gray-500/40 w-[278px] sm:w-[400px]">
    <h1 class="text-3xl pb-4">Login</h1>
    <p class="text-md text-slate-400 leading-5 mb-4">
      Hey, Enter your details to get sign in <br />
      to your account
    </p>
    <form @submit.prevent="onSubmit">
      <input-field
        v-model="state.email"
        :errors="v$.email.$errors"
        label="Email"
        type="email"
        @blur="v$.email.$touch"
      />

      <input-field
        v-model="state.password"
        :errors="v$.password.$errors"
        type="password"
        label="Password"
        @blur="v$.password.$touch"
      />
      <a href="" class="inline-block text-sm">Having trouble in sign in?</a>
      <a-button
        label="Login"
        type="submit"
        :loading="loading"
        loader-text="Authenticating..."
        class="block m-auto my-5"
      />
    </form>

    <a href="" class="inline-block text-sm">Don't have an account? Sign Up Now</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { InputField } from '@/components'
import AButton from '@/components/button/button.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

export default defineComponent({
  name: 'LoginForm',
  components: {
    InputField,
    AButton,
  },

  setup() {
    const state = reactive({
      password: '',
      email: '',
    })
    const rules = {
      password: { required: helpers.withMessage('Please enter the password', required) },
      email: {
        required: helpers.withMessage('Please enter the email', required),
        email: helpers.withMessage('Please provide a valid email', email),
      },
    }

    const loading = ref(false)
    const v$ = useVuelidate(rules, state)

    const onSubmit = () => {
      v$.value.$touch()

      if (v$.value.$invalid) return

      alert('Form Submitted ' + JSON.stringify(state))
    }

    return {
      state,
      v$,
      loading,
      onSubmit,
    }
  },
})
</script>
