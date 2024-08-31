<script setup lang="ts">
import SideBar from '~/components/layout/SideBar.vue'
import TodoNav from '~/components/layout/TodoNav.vue'
import Footer from '~/components/layout/Footer.vue'
import TodoForm from '~/components/form/Todo.vue'

// Store layout
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="container-main">
    <div v-show="layoutStore.form" class="overlay" />
    <TodoNav />
    <SideBar />
    <TodoForm />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>
