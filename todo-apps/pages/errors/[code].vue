<script setup lang="ts">
definePageMeta({
  layout: 'blank'
})

const route = useRoute()
</script>

<template>
  <div class="flex w-full h-full items-center justify-center">
    <div class="text-4xl font-bold">
      {{ route.params.code }}.
    </div>
  </div>
</template>
