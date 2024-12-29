<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import MenuLink from './MenuLink.vue'

const route = useRoute()
const menuStore = useMenuStore()
const expandedMenus = ref<Set<string>>(new Set())

const toggleMenu = (menuId: string) => {
  if (expandedMenus.value.has(menuId)) {
    expandedMenus.value.delete(menuId)
  } else {
    expandedMenus.value.add(menuId)
  }
}

const isActive = (item: any): boolean => {
  if (item.path === route.path) return true
  if (item.children) {
    return item.children.some((child: any) => child.path === route.path)
  }
  return false
}

const isExpanded = (menuId: string): boolean => {
  return expandedMenus.value.has(menuId)
}
</script>

<template>
  <aside
    class="flex flex-col h-screen bg-white transition-all duration-300"
    :class="{ 'w-[72px]': menuStore.collapsed, 'w-64': !menuStore.collapsed }"
  >
    <!-- Header -->
    <div class="h-16 px-4 flex items-center border-b border-gray-200">
      <img src="/vite.svg" alt="Logo" class="h-8 w-8" />
      <h1 v-if="!menuStore.collapsed" class="text-xl font-bold text-gray-900 ml-3">DashStack</h1>
    </div>

    <!-- Menu Items -->
    <div class="flex-1 overflow-y-auto scrollbar-custom px-2">
      <nav class="py-4 space-y-1">
        <template v-for="item in menuStore.items" :key="item.id">
          <MenuLink
            :item="item"
            :is-active="isActive(item)"
            :is-expanded="isExpanded(item.id)"
            :collapsed="menuStore.collapsed"
            @toggle="toggleMenu"
          />
          
          <div
            v-if="item.children && isExpanded(item.id) && !menuStore.collapsed"
            class="ml-4 pl-4 space-y-1 border-l border-gray-100"
          >
            <MenuLink
              v-for="child in item.children"
              :key="child.id"
              :item="child"
              :is-active="isActive(child)"
              :is-expanded="false"
              :collapsed="menuStore.collapsed"
              @toggle="toggleMenu"
            />
          </div>
        </template>
      </nav>
    </div>

    <!-- Bottom Items -->
    <div class="p-2 border-t border-gray-200">
      <MenuLink
        v-for="item in menuStore.bottomItems"
        :key="item.id"
        :item="item"
        :is-active="isActive(item)"
        :is-expanded="false"
        :collapsed="menuStore.collapsed"
      />
    </div>
  </aside>
</template>

<style scoped>
.scrollbar-custom {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.scrollbar-custom::-webkit-scrollbar {
  width: 4px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 2px;
}
</style>