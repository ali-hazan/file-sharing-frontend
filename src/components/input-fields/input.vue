<template>
  <div class="mx-6 my-10">
    <label class="block" :for="computedId"></label>
    <div class="w-full">
      <vue-feather v-if="iconEnable" class="absolute p-3" stroke="#ec4899" type="mail" />
      <input
        :id="computedId"
        ref="input"
        :type="type"
        class="shadow-md outline-pink-500 border-none w-full py-3 pr-2 bg-gray-50 rounded"
        :class="iconEnable ? 'pl-12' : 'pl-2'"
        @input="onInput($event)"
        @change="onChange($event)"
        @blur="onBlur($event)"
      />
      <div v-for="error of errors" :key="error.$uid">
        <div class="absolute text-red-700 text-sm mt-2">{{ error.$message }}</div>
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
