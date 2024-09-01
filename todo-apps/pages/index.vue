<script setup lang="ts">
import BtnIconMini from '~/components/button/BtnIconMini.vue'
import TodoCard from '~/components/card/TodoCard.vue'

definePageMeta({
  middleware: 'auth'
})

</script>

<template>
  <div>
    <TodoCard message="Example" :date="new Date()">
      <template #icon>
        <BtnIconMini bg="bg-gradient-to-r from-purple-500 to-pink-500" class="mr-2"> 
          <UIcon 
            name="i-fluent-emoji-high-contrast-cat-face" 
            class="h-7 w-7 text-white"
          />
        </BtnIconMini>
      </template>
    </TodoCard>
  </div>
</template>
