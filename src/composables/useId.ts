import idGen from '../utils/idGen'
import { computed, ComputedRef } from 'vue'

function useId(id?: string, suffix?: string): ComputedRef<string> {
  return computed(() => id || idGen(suffix))
}

export default useId
