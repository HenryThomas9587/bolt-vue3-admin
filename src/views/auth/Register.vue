<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const username = ref('')
const password = ref('')
const acceptTerms = ref(false)

const handleRegister = () => {
  // TODO: Implement register logic
  router.push('/')
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-primary flex items-center justify-center p-6">
    <div class="bg-white rounded-2xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-8">Create Account</h1>
      
      <form @submit.prevent="handleRegister" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Email address:</label>
          <input
            v-model="email"
            type="email"
            placeholder="esteban_schiller@gmail.com"
            class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div>
          <div class="flex justify-between mb-2">
            <label class="text-sm font-medium text-gray-700">Password</label>
            <a href="#" class="text-sm text-gray-500 hover:text-gray-700">Forget Password?</a>
          </div>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div class="flex items-center">
          <input
            v-model="acceptTerms"
            type="checkbox"
            id="terms"
            class="h-4 w-4 text-primary border-gray-300 rounded"
          />
          <label for="terms" class="ml-2 text-sm text-gray-600">
            I accept terms and conditions
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-500">
        Already have an account?
        <button @click="goToLogin" class="text-primary hover:text-primary-hover font-medium ml-1">
          Login
        </button>
      </div>
    </div>
  </div>
</template>