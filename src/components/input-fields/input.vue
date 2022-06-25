<template>
  <div class="mx-6 mb-4">
    <label class="block text-left" :for="computedId">{{ label }}</label>
    <div class="w-full">
      <vue-feather v-if="iconEnable" class="absolute p-3" stroke="#ec4899" type="mail" />
      <input
        :id="computedId"
        ref="input"
        :placeholder="placeholder"
        :type="type"
        class="outline-pink-500 border-none w-full py-3 pr-2 bg-zinc-100 rounded-lg"
        :class="iconEnable ? 'pl-12' : 'pl-2'"
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
import { defineComponent, PropType } from 'vue'
import InputType from '@/typings/input'
import useFormInput, { COMMON_INPUT_PROPS } from '../../composables/useFormInput'

export default defineComponent({
  name: 'InputField',
  props: {
    ...COMMON_INPUT_PROPS,
    errors: {
      type: Array,
      required: false,
      default: null,
    },
    type: {
      type: String as PropType<InputType>,
      default: 'text',
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
