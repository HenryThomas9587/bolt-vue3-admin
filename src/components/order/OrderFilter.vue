<script setup lang="ts">
import { ref } from 'vue'
import { FunnelIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import DatePicker from '@/components/common/DatePicker.vue'
import type { OrderStatus, OrderType } from '@/types/order'

defineProps<{
  date: Date
  type: OrderType | ''
  status: OrderStatus | ''
}>()

const emit = defineEmits<{
  (e: 'update:date', value: Date): void
  (e: 'update:type', value: OrderType | ''): void
  (e: 'update:status', value: OrderStatus | ''): void
  (e: 'reset'): void
}>()

const showDatePicker = ref(false)

const orderTypes: OrderType[] = ['Electric', 'Book', 'Medicine', 'Mobile', 'Watch']
const orderStatuses: OrderStatus[] = ['completed', 'processing', 'rejected']
</script>

<template>
  <div class="p-6 border-b border-gray-200">
    <div class="flex items-center space-x-3">
      <button class="p-2 rounded-lg hover:bg-gray-100">
        <FunnelIcon class="h-5 w-5 text-gray-500" />
      </button>
      
      <div class="text-sm font-medium">Filter By</div>

      <div class="relative">
        <button
          class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
          @click="showDatePicker = !showDatePicker"
        >
          {{ date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) }}
        </button>
        
        <DatePicker
          v-if="showDatePicker"
          :value="date"
          @update:value="(val) => val && emit('update:date', val)"
          @close="showDatePicker = false"
          class="absolute top-full mt-2 z-10"
        />
      </div>

      <select
        class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
        :value="type"
        @change="emit('update:type', $event.target.value)"
      >
        <option value="">Order Type</option>
        <option v-for="type in orderTypes" :key="type" :value="type">
          {{ type }}
        </option>
      </select>

      <select
        class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
        :value="status"
        @change="emit('update:status', $event.target.value)"
      >
        <option value="">Order Status</option>
        <option v-for="status in orderStatuses" :key="status" :value="status">
          {{ status.charAt(0).toUpperCase() + status.slice(1) }}
        </option>
      </select>

      <button
        class="flex items-center px-4 py-2 text-sm text-primary hover:text-primary-hover"
        @click="emit('reset')"
      >
        <ArrowPathIcon class="h-4 w-4 mr-2" />
        Reset Filter
      </button>
    </div>
  </div>
</template>