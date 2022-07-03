<template>
  <label for="file-modal">
    <slot></slot>
  </label>
  <input id="file-modal" type="checkbox" class="modal-toggle" />
  <div for="file-modal" class="modal cursor-pointer">
    <div class="modal-box relative bg-white text-black" for="">
      <label for="file-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <form @submit.prevent="onSubmit">
        <input-field
          v-model="state.title"
          :errors="v$.title.$errors"
          label="Ttle"
          type="text"
          @blur="v$.title.$touch"
        />

        <file-input
          v-model="state.file"
          :errors="v$.file.$errors"
          label="Please choose the file"
          @blur="v$.file.$touch"
        />
        <Multiselect v-model="state.sharewith" class="mx-6 mb-4" :options="users" mode="tags" />
        <text-area
          v-model="state.desc"
          :errors="v$.desc.$errors"
          label="Description"
          @blur="v$.desc.$touch"
        />
        <a-button
          label="Upload"
          type="submit"
          :loading="loading"
          loader-text="Authenticating..."
          class="block ml-auto my-4"
        />
      </form>
    </div>
  </div>
</template>
]
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { InputField, TextArea, FileInput } from '@/components'
import Multiselect from '@vueform/multiselect'
import AButton from '@/components/button/button.vue'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

export default defineComponent({
  name: 'LoginForm',
  components: {
    InputField,
    AButton,
    TextArea,
    FileInput,
    Multiselect,
  },

  setup() {
    const state = reactive({
      file: undefined,
      title: '',
      desc: '',
      sharewith: [],
    })
    const rules = {
      file: { required: helpers.withMessage('Please upload a file', required) },
      title: { required: helpers.withMessage('Please enter the title', required) },
      desc: {},
      sharewith: {},
    }

    const users = ['Batman', 'Robin', 'Joker']

    const loading = ref(false)
    const v$ = useVuelidate(rules, state)

    const onSubmit = () => {
      v$.value.$touch()

      if (v$.value.$invalid) return

      alert('Form Submitted ' + JSON.stringify(state))
    }

    return {
      state,
      users,
      v$,
      loading,
      onSubmit,
    }
  },
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect {
  background: #f4f4f5 !important;
  width: auto;
  border: none;
}
.multiselect.is-active {
  box-shadow: none;
}
.multiselect-tag {
  background: #000;
}
</style>
