import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Product {
  id: string
  name: string
  image: string
  category: string
  price: number
  stock: number
  colors: string[]
  rating: number
  reviews: number
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([
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
    },
    {
      id: '3',
      name: "Women's Dress",
      image: 'https://img.ltwebstatic.com/images3_pi/2022/01/10/16417919016a32607182dd11dedeb77e8324b683e8_thumbnail_900x.webp',
      category: 'Fashion',
      price: 640.00,
      stock: 635,
      colors: ['#800020', '#87CEEB', '#000080', '#4169E1'],
      rating: 4.2,
      reviews: 89
    }
  ])

  const searchProducts = ref('')
  const selectedCategory = ref('')

  const filteredProducts = computed(() => {
    return products.value.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchProducts.value.toLowerCase())
      const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value
      return matchesSearch && matchesCategory
    })
  })

  const categories = computed(() => {
    return [...new Set(products.value.map(p => p.category))]
  })

  return {
    products,
    searchProducts,
    selectedCategory,
    filteredProducts,
    categories
  }
})