<template>
  <button @click="emit('cambiar')">{{ props.title }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["cambiar"]);
</script>

<style></style>
