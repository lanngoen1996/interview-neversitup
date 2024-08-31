<script setup lang="ts">
defineProps({
  bg: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <div :class="position">
    <div 
      class="mini-btn-icon"
      :class="bg"
    >
      <div class="btn">
        <slot />
      </div>
    </div>
  </div>
</template>
