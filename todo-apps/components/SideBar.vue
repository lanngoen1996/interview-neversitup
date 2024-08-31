<script setup lang="ts">
const store = useLayoutStore()
</script>

<template>
  <div class="sidebar" :class="{'translate-x-full': !store.visible, 'translate-x-0': store.visible}">
    <div class="todo-nav">
      <UIcon 
        name="i-humbleicons-arrow-left" 
        class="h-8 w-8 absolute left-5" 
        @click="() => store.toggle()" 
      />
    </div>
  </div>
</template>
