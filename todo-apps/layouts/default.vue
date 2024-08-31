<script setup lang="ts">
import SideBar from '~/components/layout/SideBar.vue'
import TodoNav from '~/components/layout/TodoNav.vue'
import Footer from '~/components/layout/Footer.vue'
import TodoForm from '~/components/form/Todo.vue'

</script>

<template>
  <div class="container-main">
    <TodoNav />
    <SideBar />
    <TodoForm />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>
