<script setup lang="ts">
import dayjs from 'dayjs'
import BtnIconMini from '~/components/button/BtnIconMini.vue'
import TodoCard from '~/components/card/TodoCard.vue'
import type { TodoResponse, TodoSanity } from '~/types/Todo'

definePageMeta({
  middleware: 'auth'
})

const all = await useAPI<{ data: TodoResponse[] }>('/todo').then((resp) => {
  return resp.data.value?.data.map((data): TodoSanity => {
    return {
      title: data.title,
      description: data.description,
      date: dayjs(data.updated_at || data.created_at).toDate()
    }
  })
}).catch((error) => {
  console.error(error)
  return []
})

</script>

<template>
  <div>
    <TodoCard v-for="(item, index) in all" :key="index" :message="item.description" :date="item.date">
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
