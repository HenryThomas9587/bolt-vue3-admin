<script setup lang="ts">
import { ref } from 'vue'

const orderTypes = [
  { id: 'health', label: 'Health & Medicine' },
  { id: 'book', label: 'Book & Stationary' },
  { id: 'services', label: 'Services & Industry' },
  { id: 'fashion', label: 'Fashion & Beauty' },
  { id: 'home', label: 'Home & Living' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'mobile', label: 'Mobile & Phone' },
  { id: 'accessories', label: 'Accessories' }
]

const selectedTypes = ref<string[]>([])

const emit = defineEmits<{
  (e: 'apply', types: string[]): void
}>()

const applyFilter = () => {
  emit('apply', selectedTypes.value)
}
</script>

<template>
  <div class="p-6 bg-white rounded-lg shadow-lg w-80">
    <h3 class="text-lg font-medium mb-4">Select Order Type</h3>
    
    <div class="grid grid-cols-2 gap-2 mb-4">
      <button
        v-for="type in orderTypes"
        :key="type.id"
        class="px-3 py-2 rounded-full text-sm border transition-colors"
        :class="[
          selectedTypes.includes(type.id)
            ? 'bg-primary/10 border-primary text-primary'
            : 'border-gray-200 hover:border-primary'
        ]"
        @click="selectedTypes.includes(type.id) 
          ? selectedTypes = selectedTypes.filter(t => t !== type.id)
          : selectedTypes.push(type.id)"
      >
        {{ type.label }}
      </button>
    </div>

    <p class="text-sm text-gray-500 mb-4">*You can choose multiple Order type</p>

    <button
      @click="applyFilter"
      class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors"
    >
      Apply Now
    </button>
  </div>
</template>