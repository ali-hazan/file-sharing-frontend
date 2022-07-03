<template>
  <div class="mx-6 mb-4">
    <label class="block text-left" :for="computedId">{{ label }}</label>
    <div class="w-full">
      <textarea
        :id="computedId"
        ref="textarea"
        :placeholder="placeholder"
        class="outline-pink-500 border-none w-full py-3 pr-2 bg-zinc-100 rounded-lg pl-2"
        @input="onInput($event)"
        @change="onChange($event)"
        @blur="onBlur($event)"
      />
      <div v-for="error of errors" :key="error.$uid">
        <div class="text-left text-red-700 text-sm mt-1">{{ error.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFormInput, { COMMON_INPUT_PROPS } from '../../composables/useFormInput'

export default defineComponent({
  name: 'TextArea',
  props: {
    ...COMMON_INPUT_PROPS,
    errors: {
      type: Array,
      required: false,
      default: null,
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    iconEnable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],

  setup(props, { emit }) {
    const { input, computedId, computedAriaInvalid, onInput, onChange, onBlur, focus, blur } =
      useFormInput(props, emit)
    return {
      input,
      computedId,
      computedAriaInvalid,
      onInput,
      onChange,
      onBlur,
      focus,
      blur,
    }
  },
})
</script>
