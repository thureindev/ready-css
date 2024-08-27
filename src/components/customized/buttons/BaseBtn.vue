<template>
    <button class="btn-custom" role="button" @click="btnClicked(rawStr)">
        {{ text }}
    </button>
</template>
<!-- HTML
<button class="btn-custom"></button> -->

<style scoped>
.btn-custom {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 21px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
}

.btn-custom:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.btn-custom:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
}

.btn-custom:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
}
</style>

<script setup>
import raw from "./Btn01.vue?raw";

import { copyValue } from "../copyValue";
import { ref } from 'vue';

const rawStr = ref(raw);

const originalText = 'Click me';
const text = ref(originalText.value);

function changeText() {
  text.value = 'CSS copied';
  // Revert back to original text after 3 seconds
  setTimeout(() => {
    text.value = originalText.value;
  }, 3000);
}

function btnClicked(val) {
    copyValue(val);
    changeText();
}
</script>