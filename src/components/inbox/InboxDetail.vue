<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeftIcon, PrinterIcon, StarIcon, TrashIcon } from '@heroicons/vue/24/outline'
import InboxMessage from './InboxMessage.vue'
import InboxMessageInput from './InboxMessageInput.vue'
import type { Email, EmailMessage } from '@/types/inbox'

const props = defineProps<{
  email: Email
}>()

const emit = defineEmits<{
  (e: 'back'): void
}>()

const messages = ref<EmailMessage[]>([
  {
    id: 1,
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    timestamp: '6:30 pm',
    isOutgoing: false
  },
  {
    id: 2,
    content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    timestamp: '6:34 pm',
    isOutgoing: true
  },
  {
    id: 3,
    content: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
    timestamp: '6:38 pm',
    isOutgoing: false
  }
])

const handleSendMessage = (content: string) => {
  messages.value.push({
    id: Date.now(),
    content,
    timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    isOutgoing: true
  })
}
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="h-16 flex items-center justify-between px-4 border-b border-gray-200">
      <div class="flex items-center">
        <button 
          class="p-2 hover:bg-gray-100 rounded-lg mr-2"
          @click="emit('back')"
        >
          <ArrowLeftIcon class="w-5 h-5 text-gray-500" />
        </button>
        <div>
          <h2 class="font-medium">{{ email.subject }}</h2>
          <p class="text-sm text-gray-500">with {{ email.from }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <PrinterIcon class="w-5 h-5 text-gray-500" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <StarIcon class="w-5 h-5 text-gray-500" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <TrashIcon class="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>

    <!-- Messages -->
    <div class="flex-1 p-6 overflow-y-auto">
      <div class="max-w-3xl mx-auto">
        <InboxMessage
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
    </div>

    <!-- Input -->
    <InboxMessageInput @send="handleSendMessage" />
  </div>
</template>