import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MenuItem } from '@/types/menu'
import { 
  HomeIcon, 
  ShoppingBagIcon,
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  CubeIcon,
  InboxIcon,
  HeartIcon,
  ListBulletIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/vue/24/outline'

export const useMenuStore = defineStore('menu', () => {
  const collapsed = ref(false)
  const items = ref<MenuItem[]>([
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: HomeIcon,
      path: '/'
    },
    {
      id: 'products',
      title: 'Products',
      icon: ShoppingBagIcon,
      children: [
        {
          id: 'product-list',
          title: 'Product List',
          path: '/products'
        },
        {
          id: 'product-stock',
          title: 'Product Stock',
          path: '/product-stock'
        }
      ]
    },
    {
      id: 'order-lists',
      title: 'Order Lists',
      icon: ListBulletIcon,
      path: '/order-lists'
    },
    {
      id: 'favorites',
      title: 'Favorites',
      icon: HeartIcon,
      path: '/favorites'
    },
    {
      id: 'inbox',
      title: 'Inbox',
      icon: InboxIcon,
      path: '/inbox'
    }
  ])

  const bottomItems = ref<MenuItem[]>([
    {
      id: 'settings',
      title: 'Settings',
      icon: Cog6ToothIcon,
      path: '/settings'
    },
    {
      id: 'logout',
      title: 'Logout',
      icon: ArrowLeftOnRectangleIcon,
      path: '/logout'
    }
  ])

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return {
    collapsed,
    items,
    bottomItems,
    toggleCollapsed
  }
})