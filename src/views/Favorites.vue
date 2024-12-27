<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/vue/24/solid'

const store = useFavoritesStore()

const getRatingStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => i < Math.floor(rating))
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Favorites</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in store.favorites"
        :key="product.id"
        class="bg-white rounded-xl p-6 shadow-sm"
      >
        <div class="relative">
          <img :src="product.image" alt="product" class="w-full h-48 object-cover rounded-lg" />
          <button
            @click="store.toggleFavorite(product)"
            class="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <HeartSolidIcon class="w-5 h-5 text-red-500" />
          </button>
        </div>
        
        <div class="mt-4">
          <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
          <div class="flex items-center mt-1">
            <div class="flex">
              <svg
                v-for="(filled, index) in getRatingStars(product.rating)"
                :key="index"
                :class="filled ? 'text-yellow-400' : 'text-gray-300'"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-sm text-gray-500 ml-1">({{ product.reviews }})</span>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-lg font-bold text-primary">${{ product.price.toFixed(2) }}</span>
            <button class="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>