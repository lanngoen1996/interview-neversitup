<script setup lang="ts">
// Message setup on page
const message = {
  title: 'todo'
}

// Store data 
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="todo-nav">
    <UIcon 
      name="i-heroicons-outline-bars-3-bottom-right" 
      class="h-8 w-8 absolute right-5" 
      @click="() => layoutStore.toggleToDone()" 
    />
    <p class="title">{{ message.title }}</p>
  </div>
</template>
