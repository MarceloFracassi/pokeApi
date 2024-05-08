<template>
  <center>
    <h3>Valor: {{ counter.count }}</h3>
    <TheButton @cambiar="counter.aumentar" title="Aumentar"></TheButton>
    <TheButton @cambiar="counter.disminuir" title="Disminuir"></TheButton>

    <h4>Porcentaje : {{ counter.porcentaje }}</h4>
  </center>
</template>

<script setup>
import { defineProps } from "vue";
import TheButton from "./TheButton.vue";
import { useCounter } from "@/composables/useCounter";

const props = defineProps({
  initialValue: {
    type: Number,
    required: true,
  },
});

const counter = useCounter(props.initialValue);
</script>

<style></style>
