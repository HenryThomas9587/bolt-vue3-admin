<script setup lang="ts">
import { ref } from 'vue'
import OrderTable from '@/components/order/OrderTable.vue'
import OrderTypeFilter from '@/components/order/OrderTypeFilter.vue'
import type { Order } from '@/types/order'

const orders = ref<Order[]>([
  {
    id: '00001',
    name: 'Christine Brooks',
    address: '089 Kutch Green Apt. 448',
    date: '14 Feb 2019',
    type: 'Electric',
    status: 'completed'
  },
  {
    id: '00002',
    name: 'Rosie Pearson',
    address: '979 Immanuel Ferry Suite 526',
    date: '14 Feb 2019',
    type: 'Book',
    status: 'processing'
  },
  // ... other orders
])

const selectedDate = ref(new Date('2019-02-14'))
const showTypeFilter = ref(false)
const selectedType = ref('')
const selectedStatus = ref('')

const handleFilterReset = () => {
  selectedDate.value = new Date('2019-02-14')
  selectedType.value = ''
  selectedStatus.value = ''
}

const handleTypeFilter = (types: string[]) => {
  console.log('Selected types:', types)
  showTypeFilter.value = false
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Order Lists</h1>
    
    <div class="bg-white rounded-lg">
      <!-- Filter Bar -->
      <div class="p-4 border-b border-gray-200 flex items-center space-x-4">
        <button 
          class="p-2 hover:bg-gray-100 rounded-lg"
          @click="showTypeFilter = !showTypeFilter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
          </svg>
        </button>

        <span class="text-sm font-medium">Filter By</span>

        <div class="relative">
          <button class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">
            {{ selectedDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) }}
          </button>
        </div>

        <button 
          class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
          @click="showTypeFilter = !showTypeFilter"
        >
          Order Type
        </button>

        <select
          v-model="selectedStatus"
          class="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <option value="">Order Status</option>
          <option value="completed">Completed</option>
          <option value="processing">Processing</option>
          <option value="rejected">Rejected</option>
        </select>

        <button
          @click="handleFilterReset"
          class="flex items-center text-primary hover:text-primary-hover"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
          </svg>
          Reset Filter
        </button>
      </div>

      <!-- Type Filter Popup -->
      <div
        v-if="showTypeFilter"
        class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
        @click.self="showTypeFilter = false"
      >
        <OrderTypeFilter @apply="handleTypeFilter" />
      </div>

      <OrderTable :orders="orders" />
    </div>
  </div>
</template>