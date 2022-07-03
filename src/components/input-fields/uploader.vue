<template>
  <div class="mx-6 mb-4">
    <div class="w-100">
      <input
        :id="computedId"
        ref="imageUploader"
        type="file"
        class="hidden"
        :placeholder="placeholder"
        @change="onChange"
        @blur="onBlur($event)"
      />
      <label
        class="block outline-pink-500 border w-full p-5 bg-zinc-100 rounded-lg text-center"
        :for="computedId"
      >
        <span v-if="!modelValue">{{ label }}</span>
        <img id="output" class="w-auto m-auto rounded-lg overflow-hidden" />
      </label>
      <div v-for="error of errors" :key="error?.$uid">
        <div class="text-left text-red-700 text-sm mt-1">{{ error?.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFormInput, { COMMON_INPUT_PROPS } from '../../composables/useFormInput'

export default defineComponent({
  name: 'FileInput',
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
    modelValue: { type: File, default: undefined },
  },
  emits: ['update:modelValue', 'change', 'blur', 'input'],

  setup(props, { emit }) {
    const { input, computedId, onBlur, focus, blur } = useFormInput(props, emit)

    const onChange = (evt: Event) => {
      const value = evt?.target?.files[0]

      var output = document.getElementById('output')
      output.src = URL.createObjectURL(value)
      output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
      }

      emit('change', value)
      emit('update:modelValue', value)
    }

    return {
      input,
      computedId,
      onChange,
      onBlur,
      focus,
      blur,
    }
  },
})
</script>
