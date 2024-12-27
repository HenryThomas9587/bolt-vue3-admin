<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-primary flex items-center justify-center p-6">
    <div class="bg-white rounded-2xl p-8 w-full max-w-md text-center">
      <img src="/404.svg" alt="404" class="w-48 h-48 mx-auto mb-6" />
      <h1 class="text-2xl font-bold mb-2">Looks like you've got lost....</h1>
      <button 
        @click="goToDashboard"
        class="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors"
      >
        Back to Dashboard
      </button>
    </div>
  </div>
</template>