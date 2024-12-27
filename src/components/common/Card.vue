<script setup lang="ts">
defineProps<{
  title?: string
  loading?: boolean
}>()
</script>

<template>
  <div class="bg-background-card dark:bg-dark-secondary rounded-card shadow-card">
    <div v-if="title || $slots.header" class="px-6 py-4 border-b border-border-light dark:border-border-dark">
      <slot name="header">
        <h3 class="text-lg font-medium text-text-primary dark:text-dark-text">{{ title }}</h3>
      </slot>
    </div>
    <div :class="{ 'p-6': !$slots.header }">
      <div v-if="loading" class="animate-pulse space-y-4">
        <div class="h-4 bg-gray-200 dark:bg-dark-primary rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 dark:bg-dark-primary rounded w-1/2"></div>
      </div>
      <slot v-else></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>