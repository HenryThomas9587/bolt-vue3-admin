<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'

const route = useRoute()
const isAuthPage = computed(() => {
  return ['/login', '/register'].includes(route.path)
})
</script>

<template>
  <!-- Auth pages -->
  <template v-if="isAuthPage">
    <RouterView />
  </template>

  <!-- Dashboard layout -->
  <template v-else>
    <div class="flex h-screen bg-gray-50">
      <Sidebar />
      <div class="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main class="flex-1 overflow-x-hidden overflow-y-auto">
          <RouterView />
        </main>
      </div>
    </div>
  </template>
</template>