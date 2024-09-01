<script setup lang="ts">
// Message setup on page
const message = {
  title: 'todo'
}

const router = useRouter()

// Store data 
const layoutStore = useLayoutStore()

const logout = async () => {
  try {
    await $fetch('/api/auth/logout', {
    method: 'POST'
  })
  router.push('/login')
  } catch (error) {
    console.error(error)
  }
 
}

</script>

<template>
  <div class="todo-nav">
    <UIcon 
      name="i-heroicons-outline-bars-3-bottom-right" 
      class="h-8 w-8 absolute right-5" 
      @click="() => layoutStore.toggleToDone()" 
    />
    <UIcon 
      name="i-heroicons-arrow-right-on-rectangle" 
      class="h-8 w-8 absolute left-5" 
      @click="logout" 
    />
    <p class="title">{{ message.title }}</p>
  </div>
</template>
