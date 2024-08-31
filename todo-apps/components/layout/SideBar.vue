<script setup lang="ts">
// Store data 
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="sidebar" :class="{'translate-x-full': !layoutStore.done, 'translate-x-0': layoutStore.done}">
    <div class="todo-nav">
      <UIcon 
        name="i-humbleicons-arrow-left" 
        class="h-8 w-8 absolute left-5" 
        @click="() => layoutStore.toggleToDone()" 
      />
    </div>
  </div>
</template>
