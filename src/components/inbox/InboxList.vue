<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon, PrinterIcon, TrashIcon } from '@heroicons/vue/24/outline'
import type { Email } from '@/types/inbox'

defineProps<{
  selectedEmail: Email | null
}>()

const emit = defineEmits<{
  (e: 'select', email: Email): void
}>()

const emails = ref<Email[]>([
  {
    id: 1,
    from: 'Jullu Jalal',
    subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
    preview: 'It is a long established fact that a reader will be distracted...',
    time: '8:38 AM',
    label: 'primary',
    read: false
  },
  {
    id: 2,
    from: 'Minerva Barnett',
    subject: 'Get Best Advertiser in Your Side Pocket',
    preview: 'There are many variations of passages of Lorem Ipsum available...',
    time: '8:13 AM',
    label: 'work',
    read: false
  },
  {
    id: 3,
    from: 'Peter Lewis',
    subject: 'Vacation Home Rental Success',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    time: '7:52 PM',
    label: 'friends',
    read: true
  }
])

const searchQuery = ref('')
const selectedEmails = ref<number[]>([])

const toggleEmailSelection = (emailId: number) => {
  const index = selectedEmails.value.indexOf(emailId)
  if (index === -1) {
    selectedEmails.value.push(emailId)
  } else {
    selectedEmails.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="rounded border-gray-300 mr-4"
          :checked="selectedEmails.length === emails.length"
          @change="selectedEmails = selectedEmails.length === emails.length ? [] : emails.map(e => e.id)"
        />
        <div class="relative">
          <MagnifyingGlassIcon class="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search mail"
            class="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <PrinterIcon class="w-5 h-5 text-gray-500" />
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <TrashIcon class="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>

    <!-- Email List -->
    <div class="flex-1 overflow-y-auto">
      <div
        v-for="email in emails"
        :key="email.id"
        class="group flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50"
        :class="{ 'bg-primary/5': selectedEmail?.id === email.id }"
      >
        <input
          type="checkbox"
          class="rounded border-gray-300 mr-4"
          :checked="selectedEmails.includes(email.id)"
          @click.stop="toggleEmailSelection(email.id)"
        />
        <div class="flex-1" @click="emit('select', email)">
          <div class="flex items-center justify-between mb-1">
            <div class="flex items-center">
              <span class="font-medium" :class="{ 'text-gray-900': !email.read, 'text-gray-600': email.read }">
                {{ email.from }}
              </span>
              <span
                v-if="email.label"
                class="ml-2 px-2 py-0.5 text-xs rounded-full"
                :class="{
                  'bg-emerald-100 text-emerald-800': email.label === 'primary',
                  'bg-orange-100 text-orange-800': email.label === 'work',
                  'bg-pink-100 text-pink-800': email.label === 'friends'
                }"
              >
                {{ email.label }}
              </span>
            </div>
            <span class="text-sm text-gray-500">{{ email.time }}</span>
          </div>
          <h3 class="text-sm font-medium mb-1" :class="{ 'text-gray-900': !email.read, 'text-gray-600': email.read }">
            {{ email.subject }}
          </h3>
          <p class="text-sm text-gray-500 truncate">{{ email.preview }}</p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between px-4 py-3 border-t border-gray-200">
      <div class="text-sm text-gray-500">7 / 29</div>
      <div class="flex items-center space-x-2">
        <button class="p-1 rounded hover:bg-gray-100">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="p-1 rounded hover:bg-gray-100">
          <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>