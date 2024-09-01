<script setup lang="ts">
import { object, string } from 'yup'

definePageMeta({
  layout: 'blank'
})

const router = useRouter()

const schema = object({
  username: string().required('Required'),
  password: string().min(8, 'Must be at least 8 characters').required('Required')
})

const message = {
  title: 'Login to interviews',
  username: {
    name: 'username',
    label: 'Username',
    placeholder: 'Username',
    description: 'username: nlanngoen'
  },
  password: {
    name: 'password',
    label: 'Password',
    placeholder: 'Password',
    description: 'password: nlanngoen'
  }
}

const state = reactive({
  username: undefined,
  password: undefined
})

async function onSubmit () {
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: state,
    })
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}

const form = {
  base: 'mt-3 w-full h-10 border-b-2 border-indigo-200 border-b-indigo-500 rounded-t-md focus:outline-none text-md px-2 !rounded-b-none !bg-white'
}

</script>

<template>
  <div class="w-full h-full">
    <div class="flex justify-center items-center h-full">
      <UForm :schema="schema" :state="state" class="space-y-4 p-5 rounded-md shadow-md bg-slate-100 w-full" @submit.prevent="onSubmit">
        <div class="text-center">
          <h1 class="title">{{ message.title }}</h1>
        </div>
        <UFormGroup :label="message.username.label" :name="message.username.name">
          <UInput
            v-model="state.username" 
            :placeholder="message.username.placeholder"
            :ui="form"
            variant="none"
          />
        </UFormGroup>
        <span class="text-xs text-gray-400">{{ message.username.description }}</span>

        <UFormGroup :label="message.password.label" :name="message.password.name">
          <UInput 
            v-model="state.password" 
            variant="none" 
            :ui="form" 
            type="password" 
            :placeholder="message.password.placeholder"
          />
        </UFormGroup>
        <span class="text-xs text-gray-400">{{ message.password.description }}</span>

        <div class="pt-4">
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-blue-700 to-sky-400 px-12 py-2 text-white rounded-full hover:-translate-y-0.5 hover:shadow-lg duration-200"
          >
            Login
          </button>
        </div>
      </UForm>
    </div>
  </div>
</template>
