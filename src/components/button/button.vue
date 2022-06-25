<template>
  <button
    class="flex items-center justify-center px-4 text-white rounded-lg h-10"
    :class="classes"
    :disabled="disabled"
    @click="clicked"
  >
    <span> {{ loading ? loaderText : label }} </span>
    <span v-if="loading" class="pl-3">
      <vue-feather
        :stroke="variant === 'light' ? 'black' : 'white'"
        type="loader"
        animation="spin"
        :size="loaderSize"
      />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ButtonVariant, ButtonType } from '@/typings/button'

export default defineComponent({
  name: 'AButton',
  props: {
    active: { type: Boolean, default: false },
    label: { type: String, default: 'Submit' },
    loaderText: { type: String, default: 'Submitting' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    loaderSize: { type: String, default: '1.3rem' },
    type: { type: String as PropType<ButtonType>, default: 'button' },
    variant: { type: String as PropType<ButtonVariant>, default: 'primary' },
  },
  emits: ['click', 'update:pressed'],
  setup(props, { emit }) {
    const clicked = (e: MouseEvent): void => {
      if (props.disabled) {
        e.preventDefault()
        e.stopPropagation()
        return
      }
      emit('click', e)
    }
    const classes = computed(() => ({
      ['bg-pink-500  hover:bg-pink-600 active:bg-pink-700']: props.variant === 'primary',
      ['bg-violet-500  hover:bg-violet-600 active:bg-violet-700']: props.variant === 'secondary',
      ['bg-red-500  hover:bg-red-600 active:bg-red-700']: props.variant === 'danger',
      ['bg-orange-500  hover:bg-orange-600 active:bg-orange-700']: props.variant === 'warning',
      ['bg-blue-500  hover:bg-blue-600 active:bg-blue-700']: props.variant === 'info',
      ['bg-gray-50  hover:bg-gray-100 active:bg-gray-200 text-black']: props.variant === 'light',
      ['bg-zinc-900  hover:bg-zinc-800 active:bg-zinc-700']: props.variant === 'dark',
    }))

    return {
      clicked,
      classes,
    }
  },
})
</script>
