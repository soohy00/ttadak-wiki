<script setup lang="ts">
// Document status badge: 확정 / 초안 / 미결정
defineProps<{ type: '확정' | '초안' | '미결정' }>()
</script>

<template>
  <span :class="['status', `status-${type}`]">{{ type }}</span>
</template>
