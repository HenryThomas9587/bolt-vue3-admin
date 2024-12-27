<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/vue/24/solid'
import { useFavoritesStore } from '@/stores/favorites'

const productStore = useProductsStore()
const favoriteStore = useFavoritesStore()

const getRatingStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => i < Math.floor(rating))
}
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Products</h1>
      <button class="btn btn-primary">Add Product</button>
    </div>

    <!-- Banner -->
    <div class="bg-primary rounded-xl p-8 mb-6 text-white relative overflow-hidden">
      <div class="relative z-10">
        <div class="text-sm mb-2">September 12-22</div>
        <h2 class="text-3xl font-bold mb-2">Enjoy free home delivery in this summer</h2>
        <p class="mb-4">Designer Dresses - Pick from trendy Designer Dress.</p>
        <button class="bg-white text-primary px-6 py-2 rounded-lg hover:bg-gray-100">
          Get Started
        </button>
      </div>
      <div class="absolute top-0 right-0 w-1/3 h-full bg-white/10"></div>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-between mb-6">
      <div class="relative w-64">
        <input
          v-model="productStore.searchProducts"
          type="text"
          placeholder="Search products..."
          class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <select
        v-model="productStore.selectedCategory"
        class="px-4 py-2 rounded-lg border border-gray-200"
      >
        <option value="">All Categories</option>
        <option v-for="category in productStore.categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        class="bg-white rounded-xl p-6 shadow-sm"
      >
        <div class="relative">
          <img :src="product.image" alt="product" class="w-full h-48 object-cover rounded-lg" />
          <button
            @click="favoriteStore.toggleFavorite(product)"
            class="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <component
              :is="favoriteStore.favorites.some(f => f.id === product.id) ? HeartSolidIcon : HeartIcon"
              class="w-5 h-5"
              :class="favoriteStore.favorites.some(f => f.id === product.id) ? 'text-red-500' : 'text-gray-400'"
            />
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