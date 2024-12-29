<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  item: {
    id: string
    title: string
    icon?: any
    path?: string
    children?: any[]
  }
  isActive: boolean
  isExpanded: boolean
  collapsed: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle', id: string): void
}>()
</script>

<template>
  <div>
    <template v-if="item.children">
      <button
        class="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
        :class="isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'"
        @click="emit('toggle', item.id)"
      >
        <component
          v-if="item.icon"
          :is="item.icon"
          class="h-5 w-5"
          :class="{ 'mr-3': !collapsed }"
        />
        <span v-if="!collapsed" class="flex-1 text-left">{{ item.title }}</span>
        <ChevronDownIcon
          v-if="!collapsed"
          class="h-4 w-4 transition-transform duration-200"
          :class="{ 'rotate-180': isExpanded }"
        />
      </button>
    </template>
    <template v-else>
      <RouterLink
        :to="item.path || '#'"
        class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
        :class="isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-50'"
      >
        <component
          v-if="item.icon"
          :is="item.icon"
          class="h-5 w-5"
          :class="{ 'mr-3': !collapsed }"
        />
        <span v-if="!collapsed">{{ item.title }}</span>
      </RouterLink>
    </template>
  </div>
</template>