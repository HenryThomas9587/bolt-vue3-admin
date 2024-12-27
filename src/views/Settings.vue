<script setup lang="ts">
import { ref } from 'vue'

const siteSettings = ref({
  siteName: 'Bright Web',
  copyright: 'All rights Reserved@brightweb',
  seoTitle: 'Bright web is a hybrid dashboard',
  seoDescription: 'Bright web is a hybrid dashboard',
  seoKeywords: 'CEO'
})

const logoUrl = ref('')

const handleLogoUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      logoUrl.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const saveSettings = () => {
  // TODO: Implement save functionality
  console.log('Settings saved:', siteSettings.value)
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">General Settings</h1>
    
    <div class="bg-white rounded-lg p-6">
      <div class="mb-8 text-center">
        <div class="relative inline-block">
          <img 
            :src="logoUrl || '/placeholder-logo.svg'" 
            alt="Logo" 
            class="w-24 h-24 rounded-full bg-gray-100"
          />
          <label class="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer">
            <input type="file" class="hidden" accept="image/*" @change="handleLogoUpload" />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </label>
        </div>
        <p class="mt-2 text-sm text-gray-500">Upload Logo</p>
      </div>

      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
            <input
              v-model="siteSettings.siteName"
              type="text"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Copy Right</label>
            <input
              v-model="siteSettings.copyright"
              type="text"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
            <input
              v-model="siteSettings.seoTitle"
              type="text"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
            <textarea
              v-model="siteSettings.seoDescription"
              rows="3"
              class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
            ></textarea>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
          <input
            v-model="siteSettings.seoKeywords"
            type="text"
            class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <button
          @click="saveSettings"
          class="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>