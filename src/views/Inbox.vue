<script setup lang="ts">
import { ref } from 'vue'
import InboxSidebar from '@/components/inbox/InboxSidebar.vue'
import InboxList from '@/components/inbox/InboxList.vue'
import InboxDetail from '@/components/inbox/InboxDetail.vue'
import type { Email } from '@/types/inbox'

const selectedEmail = ref<Email | null>(null)
const showDetail = ref(false)

const handleSelectEmail = (email: Email) => {
  selectedEmail.value = email
  showDetail.value = true
}

const handleBack = () => {
  showDetail.value = false
}
</script>

<template>
  <div class="flex h-screen bg-white">
    <!-- Left Sidebar -->
    <InboxSidebar />

    <!-- Main Content -->
    <div class="flex-1">
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <InboxList
          v-if="!showDetail"
          :selected-email="selectedEmail"
          @select="handleSelectEmail"
        />
        <InboxDetail
          v-else
          :email="selectedEmail!"
          @back="handleBack"
        />
      </Transition>
    </div>
  </div>
</template>