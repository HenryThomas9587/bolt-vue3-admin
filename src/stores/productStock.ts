import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from './products'

export const useProductStockStore = defineStore('productStock', () => {
  const stockItems = ref<Product[]>([
    {
      id: '1',
      name: 'Apple Watch Series 4',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO?wid=1400&hei=1400',
      category: 'Digital Product',
      price: 690.00,
      stock: 63,
      colors: ['#000000', '#CCCCCC', '#FFB6C1'],
      rating: 4.5,
      reviews: 131
    },
    {
      id: '2',
      name: 'Microsoft Headsquare',
      image: 'https://m.media-amazon.com/images/I/61z-rC5PIbL._AC_UF1000,1000_QL80_.jpg',
      category: 'Digital Product',
      price: 190.00,
      stock: 13,
      colors: ['#000000', '#FF6B6B', '#4D96FF', '#FFD93D'],
      rating: 4.8,
      reviews: 64
    }
  ])

  const searchQuery = ref('')
  const selectedCategory = ref('')

  const filteredStock = computed(() => {
    return stockItems.value.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesCategory = !selectedCategory.value || item.category === selectedCategory.value
      return matchesSearch && matchesCategory
    })
  })

  return {
    stockItems,
    searchQuery,
    selectedCategory,
    filteredStock
  }
})