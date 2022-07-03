<template>
  <div class="bg-white h-full">
    <form class="max-w-screen-sm m-auto py-20" @submit.prevent="onSubmit">
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
      <input-field
        v-model="state.repassword"
        :errors="v$.repassword.$errors"
        type="password"
        label="Repeat Password"
        @blur="v$.repassword.$touch"
      />
      <a-button
        label="Change"
        type="submit"
        :loading="loading"
        loader-text="Creating..."
        class="block m-auto my-5"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { InputField } from '@/components'
import AButton from '@/components/button/button.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers, sameAs, minLength } from '@vuelidate/validators'

export default defineComponent({
  name: 'SettingsPage',
  components: {
    InputField,
    AButton,
  },

  setup() {
    const state = reactive({
      password: '',
      email: '',
      repassword: '',
    })
    const rules = computed(() => ({
      password: {
        required: helpers.withMessage('Please enter the password', required),
        minLength: minLength(6),
      },
      repassword: {
        required: helpers.withMessage('Please repeat the password', required),
        sameAsRawValue: helpers.withMessage('Password mismatch try agian', sameAs(state.password)),
      },
      email: {
        required: helpers.withMessage('Please enter the email', required),
        email: helpers.withMessage('Please provide a valid email', email),
      },
    }))

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
