<script setup lang="ts">
import { ref } from 'vue'

interface Message {
  id: number
  content: string
  timestamp: string
  isOutgoing: boolean
}

const messages = ref<Message[]>([
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
    content: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.',
    timestamp: '6:38 pm',
    isOutgoing: false
  }
])

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      id: Date.now(),
      content: newMessage.value,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      isOutgoing: true
    })
    newMessage.value = ''
  }
}
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 border-r border-gray-200 bg-white">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">My Email</h2>
        
        <div class="space-y-2">
          <a href="#" class="flex items-center justify-between px-3 py-2 bg-primary/10 rounded-lg text-primary">
            <span>Inbox</span>
            <span class="bg-primary text-white text-xs px-2 py-1 rounded-full">1253</span>
          </a>
          <a href="#" class="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>Starred</span>
            <span>245</span>
          </a>
          <a href="#" class="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>Sent</span>
            <span>24,532</span>
          </a>
          <a href="#" class="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>Draft</span>
            <span>09</span>
          </a>
          <a href="#" class="flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>Spam</span>
            <span>14</span>
          </a>
        </div>

        <div class="mt-8">
          <h3 class="text-sm font-medium text-gray-500 mb-2">Label</h3>
          <div class="space-y-2">
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="form-checkbox text-primary" />
              <span>Primary</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="form-checkbox text-blue-500" />
              <span>Social</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="form-checkbox text-yellow-500" />
              <span>Work</span>
            </label>
            <label class="flex items-center space-x-2">
              <input type="checkbox" class="form-checkbox text-pink-500" />
              <span>Friends</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 flex flex-col">
      <div class="flex-1 p-6 overflow-y-auto">
        <div class="space-y-6">
          <div
            v-for="message in messages"
            :key="message.id"
            :class="[
              'max-w-2xl rounded-lg p-4',
              message.isOutgoing 
                ? 'ml-auto bg-primary text-white' 
                : 'bg-gray-100 text-gray-800'
            ]"
          >
            <p>{{ message.content }}</p>
            <div 
              :class="[
                'text-xs mt-1',
                message.isOutgoing ? 'text-white/80' : 'text-gray-500'
              ]"
            >
              {{ message.timestamp }}
            </div>
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <div class="p-4 border-t border-gray-200">
        <div class="flex items-center space-x-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Write message"
            class="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            @keyup.enter="sendMessage"
          />
          <button
            @click="sendMessage"
            class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>