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

const isOpen = ref(false)
const display = ref({
  title: '',
  description: ''
})

const onModal = (item: TodoSanity) => {
  isOpen.value = !isOpen.value
  display.value = item
}

</script>

<template>
  <div>
    <TodoCard  
      v-for="(item, index) in all" 
      :key="index" 
      :message="item.description" 
      :date="item.date" 
      @click="onModal(item)"
    >
      <template #icon>
        <BtnIconMini 
          bg="bg-gradient-to-r from-purple-500 to-pink-500" 
          class="mr-2" 
        > 
          <UIcon 
            name="i-fluent-emoji-high-contrast-cat-face" 
            class="h-7 w-7 text-white"
          />
        </BtnIconMini>
      </template>
    </TodoCard>

    <UModal
      v-model="isOpen" 
      :ui="{
        base: 'w-[385px]',
        container: 'flex min-h-full items-end sm:items-start justify-center text-center'
      }
    ">
      <div class="p-4">
        <p class="title mb-3">{{ display.title }}</p>
        <span>{{ display.description }}</span>
      </div>
    </UModal>
  </div>
</template>
