<template>
  <div class="mx-6 mb-4">
    <div class="w-100">
      <input
        :id="computedId"
        ref="imageUploader"
        type="file"
        class="hidden"
        :placeholder="placeholder"
        @click="$event.target.value = ''"
        @change="onChange"
      />
      <label
        class="relative block outline-pink-500 border w-full p-5 bg-zinc-100 rounded-lg text-center"
        :for="computedId"
      >
        <label
          v-if="modelValue"
          class="btn btn-sm bg-gray-200 hover:bg-gray-300 absolute right-2 top-2"
          @click="removeImg"
          >✕</label
        >
        <img
          id="output"
          :src="require('@/assets/images/file-plus.svg')"
          class="h-20 m-auto rounded-lg overflow-hidden"
        />
        <span v-if="!modelValue">{{ label }}</span>
      </label>
      <div v-for="error of errors" :key="error?.$uid">
        <div class="text-left text-red-700 text-sm mt-1">{{ error?.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    const { input, computedId } = useFormInput(props, emit)

    const imageUploader = ref('')

    const removeImg = (evt) => {
      var output = document.getElementById('output')
      output.src = require('@/assets/images/file-plus.svg')
      emit('change', undefined)
      emit('update:modelValue', undefined)
      evt.preventDefault()
    }

    const onChange = (evt: Event) => {
      const value = evt?.target?.files[0]
      if (value) {
        var output = document.getElementById('output')
        output.src = URL.createObjectURL(value)
        output.onload = function () {
          URL.revokeObjectURL(output.src) // free memory
        }
        emit('change', value)
        emit('update:modelValue', value)
      }
    }

    return {
      input,
      computedId,
      imageUploader,
      onChange,
      removeImg,
    }
  },
})
</script>
