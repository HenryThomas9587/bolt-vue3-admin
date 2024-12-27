import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from './products'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Product[]>([])

  const toggleFavorite = (product: Product) => {
    const index = favorites.value.findIndex(f => f.id === product.id)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(product)
    }
  }

  return {
    favorites,
    toggleFavorite
  }
})