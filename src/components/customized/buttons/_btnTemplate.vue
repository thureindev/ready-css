<template>
    <button class="btn-custom" role="button" @click="copyValue(raw)">
        <slot></slot>
    </button>
</template>
<!-- HTML
<button class="btn-custom"></button> -->

<style scoped>
</style>

<script setup>
import raw from "./thisComponent.vue?raw";
import { copyValue } from "../copyValue";

</script>

<!-- This is a template file -->