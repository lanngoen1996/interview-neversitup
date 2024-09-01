<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

const router = useRouter()

const message = {
  title: 'Login to interviews',
  username: {
    label: 'Username',
    placeholder: 'Username',
    description: 'username: admin'
  },
  password: {
    label: 'Password',
    placeholder: 'Password',
    description: 'password: admin'
  }
}

const loginForm = ref({
  username: 'nlanngoen',
  password: 'nlanngoen'
}) 

const onSubmit = async () => {
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: loginForm.value,
    })
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <div class="w-full h-full">
    <div class="flex justify-center items-center h-full">
      <form class="p-5 rounded-md shadow-md bg-slate-100 w-full" @submit.prevent="onSubmit">
        <div class="text-center">
          <h1 class="title">{{ message.title }}</h1>
        </div>
        <div class="mt-5">
          <p>
            {{ message.username.label }}
          </p>
          <input 
            v-model="loginForm.username"
            :placeholder="message.username.placeholder"
            name="username"
            required
            type="text" 
            class="mt-3 w-full h-10 border-b-2 border-indigo-200 border-b-indigo-500 rounded-t-md focus:outline-none text-md px-2"
          >
          <span class="text-xs text-gray-400">{{ message.username.description }}</span>
        </div>
        <div class="mt-5">
          <p>
            {{ message.password.label }}
          </p>
          <input 
            v-model="loginForm.password"
            :placeholder="message.password.placeholder"
            required
            name="password"
            type="password" 
            class="mt-3 w-full h-10 border-b-2 border-indigo-200 border-b-indigo-500 rounded-t-md focus:outline-none text-md px-2"
          >
          <span class="text-xs text-gray-400">{{ message.password.description }}</span>
        </div>
        <div class="mt-6">
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-blue-700 to-sky-400 px-12 py-2 text-white rounded-full hover:-translate-y-0.5 hover:shadow-lg duration-200"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
