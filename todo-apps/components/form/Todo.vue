<script setup lang="ts">
// Message page
const message = {
  title: 'new task'
}

// Store layout
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="todo-form" :class="{'translate-x-full': !layoutStore.form, 'translate-x-0': layoutStore.form}">
    <div class="todo-nav justify-start">
      <UIcon 
        name="i-heroicons-outline-x" 
        class="h-8 w-8 absolute right-5"
        @click="() => layoutStore.toggleForm()"
      />
      <p class="title pl-5">{{  message.title }}</p>
    </div>
  </div>
</template>
