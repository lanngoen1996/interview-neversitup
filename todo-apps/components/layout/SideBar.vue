<script setup lang="ts">
import dayjs from 'dayjs'
import type { TodoResponse, TodoSanity } from '~/types/Todo'
import TodoCard from '../card/TodoCard.vue'
import BtnIconMini from '../button/BtnIconMini.vue'

// Message page
const message = {
  title: 'to done'
}

// Store data 
const layoutStore = useLayoutStore()

const all = await useAPI<{ data: TodoResponse[] }>('/todo/all').then((resp) => {
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
  <div class="sidebar" :class="{'translate-x-full': !layoutStore.done, 'translate-x-0': layoutStore.done}">
    <div class="todo-nav">
      <UIcon 
        name="i-humbleicons-arrow-left" 
        class="h-8 w-8 absolute left-5" 
        @click="() => layoutStore.toggleToDone()" 
      />
      <p class="title">{{ message.title }}</p>
    </div>
    <div class="px-5 h-full overflow-y-scroll">
      <TodoCard v-for="(item, index) in all" :key="index" :message="item.description" :date="item.date">
      <template #icon>
        <BtnIconMini bg="bg-gradient-to-r from-amber-500 to-red-500" class="mr-2"> 
          <UIcon 
            name="i-fluent-emoji-high-contrast-baseball" 
            class="h-7 w-7 text-white"
          />
        </BtnIconMini>
      </template>
    </TodoCard>
    </div>
  </div>
</template>
