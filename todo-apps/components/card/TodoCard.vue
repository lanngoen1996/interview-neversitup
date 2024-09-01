<script setup lang="ts">
import dayjs from 'dayjs';

defineProps({
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})
</script>

<template>
  <div class="todo-card">
    <div class="grid grid-cols-6 gap-1">
      <div class="col-span-1 flex items-center">
        <slot name="icon" />
      </div>
      <div class="col-span-4 flex items-center">
        <p class="truncate">{{ message }}</p>
      </div>
      <div class="col-span-1">
        <div class="text-right">
          <span class="text-sm font-semibold">
            {{ dayjs(date).format('DD MMM') }}
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs text-gray-500">
            {{ dayjs(date).format("HH:mm") }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>