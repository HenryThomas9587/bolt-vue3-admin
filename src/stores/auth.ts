import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface User {
  name: string
  email: string
  role: string
  avatar: string
}

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const isAuthenticated = ref(false)
  const user = ref<User>({
    name: 'Moni Roy',
    email: 'moni.roy@example.com',
    role: 'Admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MonaRoy'
  })

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      isAuthenticated.value = true
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const logout = () => {
    isAuthenticated.value = false
    router.push('/login')
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
})