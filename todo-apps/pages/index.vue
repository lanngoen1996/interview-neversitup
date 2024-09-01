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

const onModal = (item?: TodoSanity) => {
  isOpen.value = !isOpen.value
  if (item) {
    display.value = item
  }
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
        base: 'w-[325px]',
        container: 'flex min-h-full items-end sm:items-start justify-center text-center'
      }
    ">
      <div class="text-center">
        <div class="bg-slate-100 p-4">
          <div class="flex justify-center">
            <BtnIconMini 
              bg="bg-gradient-to-r from-purple-500 to-pink-500" 
              class="mr-2 mt-3" 
            > 
              <UIcon 
                name="i-fluent-emoji-high-contrast-cat-face" 
                class="h-7 w-7 text-white"
              />
            </BtnIconMini>
          </div>
          <p class="title mb-3 mt-5">{{ display.title }}</p>
        </div>
        <div class="p-4">
          <div>
            <p class="text-sm">Description</p>
          </div>
          <div class="text-left mt-4 text-gray-500">
            <span>{{ display.description }}</span>
          </div>
        </div>
        <div class="px-4 mb-5 mx-5 mt-5">
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-blue-700 to-sky-400 px-12 py-2 text-white rounded-full hover:-translate-y-0.5 hover:shadow-lg duration-200 outline-none"
            @click="() => onModal()"
            >
            Done
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>
