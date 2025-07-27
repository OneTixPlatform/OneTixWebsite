import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default defineNuxtPlugin(() => {
  // Optionally expose it globally
  return {
    provide: {
      dayjs
    }
  }
})
