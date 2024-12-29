<script setup lang="ts">
import { ref } from 'vue'
import { PaperClipIcon, PhotoIcon, MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline'

const message = ref('')

const emit = defineEmits<{
  (e: 'send', message: string): void
}>()

const handleSend = () => {
  if (message.value.trim()) {
    emit('send', message.value)
    message.value = ''
  }
}
</script>

<template>
  <div class="border-t border-gray-100 p-4 bg-white">
    <div class="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
      <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <MicrophoneIcon class="w-5 h-5 text-gray-400" />
      </button>
      
      <input
        v-model="message"
        type="text"
        placeholder="Write message..."
        class="flex-1 bg-transparent border-0 focus:ring-0 text-sm placeholder-gray-400"
        @keydown.enter.prevent="handleSend"
      />
      
      <div class="flex items-center space-x-2">
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <PaperClipIcon class="w-5 h-5 text-gray-400" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <PhotoIcon class="w-5 h-5 text-gray-400" />
        </button>
        <button
          class="p-2 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors disabled:opacity-50"
          :disabled="!message.trim()"
          @click="handleSend"
        >
          <PaperAirplaneIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>