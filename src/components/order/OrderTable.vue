<script setup lang="ts">
import type { Order } from '@/types/order'

defineProps<{
  orders: Order[]
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full">
      <thead>
        <tr class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <th class="px-6 py-4">ID</th>
          <th class="px-6 py-4">NAME</th>
          <th class="px-6 py-4">ADDRESS</th>
          <th class="px-6 py-4">DATE</th>
          <th class="px-6 py-4">TYPE</th>
          <th class="px-6 py-4">STATUS</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="order in orders" :key="order.id" class="hover:bg-gray-50">
          <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ order.id }}</td>
          <td class="px-6 py-4 text-sm text-gray-900">{{ order.name }}</td>
          <td class="px-6 py-4 text-sm text-gray-500">{{ order.address }}</td>
          <td class="px-6 py-4 text-sm text-gray-500">{{ order.date }}</td>
          <td class="px-6 py-4 text-sm text-gray-900">{{ order.type }}</td>
          <td class="px-6 py-4">
            <span
              class="inline-flex px-3 py-1 text-xs font-medium rounded-full"
              :class="{
                'bg-green-100 text-green-800': order.status === 'completed',
                'bg-purple-100 text-purple-800': order.status === 'processing',
                'bg-red-100 text-red-800': order.status === 'rejected'
              }"
            >
              {{ order.status.charAt(0).toUpperCase() + order.status.slice(1) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>