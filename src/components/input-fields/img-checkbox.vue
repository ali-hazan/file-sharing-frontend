<template>
  <input
    :id="computedId"
    v-bind="$attrs"
    ref="input"
    v-model="localValue"
    type="checkbox"
    :disabled="disabled"
    :required="!!name && !!required"
    :name="name"
    :value="value"
    :indeterminate="indeterminate"
    @focus="isFocused = true"
    @blur="isFocused = false"
  />
  <label :for="computedId">
    <img class="rounded-full" src="https://picsum.photos/200" />
  </label>
</template>

<script setup lang="ts">
import useId from '@/composables/useId'

interface BFormCheckboxProps {
  indeterminate?: boolean
  name?: string
  id?: string
  disabled?: boolean
  inline?: boolean
  required?: boolean
  state?: boolean
  uncheckedValue?: Array<unknown> | Set<unknown> | boolean
  value?: Array<unknown> | Set<unknown> | boolean
  modelValue?: Array<unknown> | Set<unknown> | boolean
}

const props = withDefaults(defineProps<BFormCheckboxProps>(), {
  id: undefined,
  disabled: false,
  name: 'checkbox',
  required: undefined,
  size: 'md',
  state: undefined,
  uncheckedValue: false,
  value: true,
  modelValue: undefined,
})

interface BFormCheckboxEmits {
  (e: 'update:modelValue', value: unknown): void
  (e: 'input', value: unknown): void
  (e: 'change', value: unknown): void
}

const emit = defineEmits<BFormCheckboxEmits>()

const computedId = useId(props.id, 'form-check')
const input = ref<HTMLElement>(null as unknown as HTMLElement)
const isFocused = ref<boolean>(false)

const localValue = computed({
  get: () => {
    if (props.uncheckedValue) {
      if (!Array.isArray(props.modelValue)) {
        return props.modelValue === props.value
      }
      return props.modelValue.indexOf(props.value) > -1
    }
    return props.modelValue
  },
  // eslint-disable-next-line
  set: (newValue: any) => {
    let emitValue = newValue
    if (!Array.isArray(props.modelValue)) {
      emitValue = newValue ? props.value : props.uncheckedValue
    } else {
      if (props.uncheckedValue) {
        emitValue = props.modelValue
        if (newValue) {
          if (emitValue.indexOf(props.uncheckedValue) > -1)
            emitValue.splice(emitValue.indexOf(props.uncheckedValue), 1)
          emitValue.push(props.value)
        } else {
          if (emitValue.indexOf(props.value) > -1)
            emitValue.splice(emitValue.indexOf(props.value), 1)
          emitValue.push(props.uncheckedValue)
        }
      }
    }
    emit('input', emitValue)
    emit('update:modelValue', emitValue)
    emit('change', emitValue)
  },
})
</script>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>

<style scoped>
input[type='checkbox'] {
  display: none;
}
label {
  border: 1px solid #fff;
  padding: 8px;
  display: block;
  border-radius: 8px;
  position: relative;
  width: 82px;
  margin: 4px;
  cursor: pointer;
}

label:before {
  color: black;
  content: ' ';
  display: block;
  border-radius: 50%;
  border: 1px solid #fee2e1;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 22px;
  transition-duration: 0.4s;
  transform: scale(0);
}

label img {
  height: 64px;
  width: 64px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + label {
  border-color: #ddd;
}

:checked + label:before {
  content: '✓';
  background-color: #fee2e1;
  transform: scale(1);
}

:checked + label img {
  transform: scale(0.9);
  z-index: -1;
}
</style>
