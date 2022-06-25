<template>
  <div class="home">
    <input-field
      v-model="state.name"
      :errors="v$.name.$errors"
      type="text"
      class="w-2/4"
      @blur="v$.name.$touch"
    />

    <input-field
      v-model="state.email"
      :errors="v$.email.$errors"
      type="email"
      class="w-2/4"
      @blur="v$.email.$touch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { InputField } from '@/components'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default defineComponent({
  name: 'HomePage',
  components: { InputField },
  setup() {
    const state = reactive({
      name: '',
      email: '',
    })
    const rules = {
      name: { required },
      email: { required, email },
    }

    const v$ = useVuelidate(rules, state)
    return {
      state,
      v$,
    }
  },
})
</script>
