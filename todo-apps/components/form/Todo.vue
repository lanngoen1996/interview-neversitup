<script setup lang="ts">
import BtnIconMini from '../button/BtnIconMini.vue'

// Message page
const message = {
  title: 'new task',
  form: {
    icon: {
      title: 'Icon',
      list: [
        {
          icon: 'i-fluent-emoji-high-contrast-cat-face',
          color: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },  
        {
          icon: 'i-fluent-emoji-high-contrast-baseball',
          color: 'bg-gradient-to-r from-blue-500 to-indigo-500'
        },  
        {
          icon: 'i-fluent-emoji-high-contrast-bullseye',
          color: 'bg-gradient-to-r from-amber-500 to-red-500'
        },  
        {
          icon: 'i-fluent-emoji-high-contrast-old-key',
          color: 'bg-gradient-to-r from-green-500 to-indigo-500'
        },  
        {
          icon: 'i-fluent-emoji-high-contrast-airplane',
          color: 'bg-gradient-to-r from-blue-900 to-gray-500'
        },  
        {
          icon: 'i-fluent-emoji-high-contrast-high-voltage',
          color: 'bg-gradient-to-r from-stone-900 to-gray-500'
        }
      ]
    },
    name: {
      title: 'Name'
    },
    date: {
      title: 'Date'
    }
  }
}

// Store layout
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="todo-form z-10" :class="{'translate-x-full': !layoutStore.form, 'translate-x-0': layoutStore.form}">
    <div class="todo-nav justify-start">
      <UIcon 
        name="i-heroicons-outline-x" 
        class="h-8 w-8 absolute right-5"
        @click="() => layoutStore.toggleForm()"
      />
      <p class="title pl-5">{{  message.title }}</p>
    </div>
    <div class="px-5">
      <div>
        <p class="base text-gray-500 font-semibold">
          {{ message.form.icon.title }}
        </p>
        <div class="mt-5">
          <div class="flex justify-between">
            <BtnIconMini v-for="(item, index) in message.form.icon.list" :key="index" :bg="item.color" :position="''" class="mr-2"> 
              <UIcon 
                :name="item.icon" 
                class="h-7 w-7 text-white"
              />
            </BtnIconMini>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p class="base text-gray-500 font-semibold">
          {{ message.form.name.title }}
        </p>
        <input placeholder="Task name..." type="text" class="mt-3 w-full h-10 border-b-2 border-indigo-200 border-b-indigo-500 rounded-t-md focus:outline-none text-lg px-2">
      </div>
      <div class="mt-5">
        <p class="base text-gray-500 font-semibold">
          {{ message.form.name.title }}
        </p>
        <textarea rows="5" class="w-full border-2 rounded mt-3 p-2 focus:outline-none" />
      </div>
      <div class="mt-5">
        <p class="base text-gray-500 font-semibold">
          {{ message.form.date.title }}
        </p>
      </div>
    </div>
  </div>
</template>
