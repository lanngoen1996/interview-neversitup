<script setup lang="ts">
import BtnIcon from '~/components/button/BtnIcon.vue'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="footer">
    <div class="flex justify-around pt-16">
      <BtnIcon :bg="'bg-gradient-to-r from-purple-500 to-pink-500'" :position="'mt-4'">
        <UIcon 
          name="i-heroicons-outline-check" 
          class="h-7 w-7 text-white"
        />
      </BtnIcon>
      <BtnIcon :bg="'bg-white'" :position="'mt-0'">
        <UIcon 
          name="i-heroicons-outline-calendar" 
          class="h-7 w-7 text-orange-600"
        />
      </BtnIcon>
      <BtnIcon 
        :bg="'bg-gradient-to-r from-blue-500 to-indigo-500'" 
        :position="'mt-4'" 
        @click="() => layoutStore.toggleForm()"
      >
        <UIcon 
          name="i-heroicons-outline-plus" 
          class="h-7 w-7 text-white"
        />
      </BtnIcon>
    </div>
  </div>
</template>
