<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  value: Date | null
}>()

const emit = defineEmits<{
  (e: 'update:value', value: Date | null): void
  (e: 'close'): void
}>()

const currentDate = ref(props.value || new Date())
const selectedDates = ref<Date[]>([])

const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month, 1).getDay()
})

const days = computed(() => {
  const days = []
  const prevMonthDays = firstDayOfMonth.value
  const totalDays = daysInMonth.value

  // Previous month days
  for (let i = prevMonthDays - 1; i >= 0; i--) {
    days.push({ day: null, disabled: true })
  }

  // Current month days
  for (let i = 1; i <= totalDays; i++) {
    days.push({
      day: i,
      disabled: false,
      selected: selectedDates.value.some(date => 
        date.getDate() === i &&
        date.getMonth() === currentDate.value.getMonth() &&
        date.getFullYear() === currentDate.value.getFullYear()
      )
    })
  }

  return days
})

const monthName = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long' })
})

const selectDate = (day: number) => {
  const date = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    day
  )
  emit('update:value', date)
  emit('close')
}

const previousMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1
  )
}

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1
  )
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-dropdown p-4 w-64">
    <div class="flex items-center justify-between mb-4">
      <div class="text-sm font-medium">
        {{ monthName }} {{ currentDate.getFullYear() }}
      </div>
      <div class="flex items-center space-x-2">
        <button
          class="p-1 hover:bg-gray-100 rounded"
          @click="previousMonth"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button
          class="p-1 hover:bg-gray-100 rounded"
          @click="nextMonth"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-7 gap-1">
      <div
        v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
        :key="day"
        class="h-8 flex items-center justify-center text-xs font-medium text-gray-500"
      >
        {{ day }}
      </div>

      <button
        v-for="(date, index) in days"
        :key="index"
        :disabled="date.disabled"
        class="h-8 flex items-center justify-center text-sm rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{
          'bg-primary text-white hover:bg-primary-hover': date.selected
        }"
        @click="date.day && selectDate(date.day)"
      >
        {{ date.day }}
      </button>
    </div>

    <div class="mt-4 text-xs text-gray-500">
      *You can choose multiple date
    </div>
  </div>
</template>