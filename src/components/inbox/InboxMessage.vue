<script setup lang="ts">
import { computed } from 'vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'
import type { EmailMessage } from '@/types/inbox'

const props = defineProps<{
  message: EmailMessage
}>()

const messageClass = computed(() => ({
  'ml-auto bg-primary text-white': props.message.isOutgoing,
  'bg-gray-50 text-gray-800': !props.message.isOutgoing
}))
</script>

<template>
  <div class="group flex items-start mb-6">
    <div v-if="!message.isOutgoing" class="w-8 h-8 rounded-full bg-gray-200 mr-3 mt-1 flex-shrink-0" />
    <div
      class="max-w-[75%] rounded-2xl p-4 relative"
      :class="messageClass"
    >
      <p class="text-sm leading-relaxed">{{ message.content }}</p>
      <div class="flex items-center mt-1 space-x-2">
        <span class="text-xs opacity-60">{{ message.timestamp }}</span>
        <button 
          class="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          :class="message.isOutgoing ? 'hover:bg-white/10' : 'hover:bg-gray-200'"
        >
          <EllipsisHorizontalIcon class="w-4 h-4" :class="message.isOutgoing ? 'text-white' : 'text-gray-400'" />
        </button>
      </div>
    </div>
    <div v-if="message.isOutgoing" class="w-8 h-8 rounded-full bg-gray-200 ml-3 mt-1 flex-shrink-0" />
  </div>
</template>