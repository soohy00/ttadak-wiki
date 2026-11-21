<script setup lang="ts">
// Status badge: 확정 / 미결정. Items without a badge are PM drafts.
defineProps<{ type: '확정' | '미결정' }>()
</script>

<template>
  <span :class="['status', `status-${type}`]">{{ type }}</span>
</template>
