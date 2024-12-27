<script setup lang="ts">
import { useProductStockStore } from '@/stores/productStock'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'

const store = useProductStockStore()

const handleEdit = (id: string) => {
  console.log('Edit product:', id)
}

const handleDelete = (id: string) => {
  console.log('Delete product:', id)
}
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Product Stock</h1>
      
      <div class="flex space-x-4">
        <div class="relative">
          <input
            v-model="store.searchQuery"
            type="text"
            placeholder="Search product name"
            class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Piece
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Available Color
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="item in store.filteredStock" :key="item.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <img :src="item.image" alt="product" class="w-12 h-12 rounded-lg object-cover" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ item.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ item.category }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                ${{ item.price.toFixed(2) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ item.stock }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex space-x-1">
                  <div
                    v-for="color in item.colors"
                    :key="color"
                    class="w-6 h-6 rounded-full"
                    :style="{ backgroundColor: color }"
                  ></div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex space-x-2">
                  <button
                    @click="handleEdit(item.id)"
                    class="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <PencilIcon class="w-5 h-5" />
                  </button>
                  <button
                    @click="handleDelete(item.id)"
                    class="p-2 text-red-400 hover:text-red-500"
                  >
                    <TrashIcon class="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>