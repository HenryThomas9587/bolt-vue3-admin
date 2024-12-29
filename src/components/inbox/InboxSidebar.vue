<script setup lang="ts">
import { computed } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'

const categories = [
  { id: 'inbox', label: 'Inbox', count: 1253, icon: '📥' },
  { id: 'starred', label: 'Starred', count: 245, icon: '⭐' },
  { id: 'sent', label: 'Sent', count: 24532, icon: '📤' },
  { id: 'draft', label: 'Draft', count: 9, icon: '📝' },
  { id: 'spam', label: 'Spam', count: 14, icon: '⚠️' },
  { id: 'important', label: 'Important', count: 18, icon: '📌' },
  { id: 'bin', label: 'Bin', count: 9, icon: '🗑️' }
]

const labels = [
  { id: 'primary', name: 'Primary', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'social', name: 'Social', color: 'bg-blue-100 text-blue-800' },
  { id: 'work', name: 'Work', color: 'bg-orange-100 text-orange-800' },
  { id: 'friends', name: 'Friends', color: 'bg-pink-100 text-pink-800' }
]

const formatCount = (count: number) => {
  return count > 99 ? '99+' : count.toString().padStart(2, '0')
}
</script>

<template>
  <div class="w-64 bg-white rounded-lg shadow-sm p-4">
    <!-- Compose Button -->
    <button class="w-full flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover mb-6">
      <PlusIcon class="w-5 h-5 mr-2" />
      Compose
    </button>

    <!-- Categories -->
    <div class="space-y-1 mb-6">
      <button
        v-for="category in categories"
        :key="category.id"
        class="w-full flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        :class="{ 'bg-primary/5 text-primary': category.id === 'inbox' }"
      >
        <span class="mr-3">{{ category.icon }}</span>
        <span class="flex-1 text-left">{{ category.label }}</span>
        <span class="text-xs text-gray-500">{{ formatCount(category.count) }}</span>
      </button>
    </div>

    <!-- Labels -->
    <div class="space-y-2">
      <h3 class="text-xs font-medium text-gray-500 uppercase px-3 mb-2">Labels</h3>
      <label
        v-for="label in labels"
        :key="label.id"
        class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
        <span class="ml-2">{{ label.name }}</span>
      </label>
      <button class="flex items-center px-3 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors w-full">
        <PlusIcon class="w-4 h-4 mr-2" />
        Create New Label
      </button>
    </div>
  </div>
</template>