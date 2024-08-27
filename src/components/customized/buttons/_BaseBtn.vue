<template>
    <button class="btn-custom" role="button" @click="handleClick(rawStr)">
        
        <template v-if="altText">
            <slot name="alt" :text="text" :altText="altText"></slot>
        </template>

        <template v-else>
            {{ text }}
        </template>

    </button>
</template>
<!-- HTML
<button class="btn-custom"></button> -->

<script setup>
import { ref } from 'vue';
const props = defineProps({
    rawStr: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: 'Click me',
    },
    altText: {
        type: String,
        default: '',
    },
});

const originalText = ref('Click me');
const text = ref(originalText.value);

function changeText() {
    text.value = 'CSS copied';
    // Revert back to original text after 3 seconds
    setTimeout(() => {
        text.value = originalText.value;
    }, 3000);
}

function copyValue(raw) {
    const templateNstyle = raw.split('</style>')[0].split('<style scoped>');
    const rawStyle = templateNstyle[1].trim();
    // const rawHtml = templateNstyle[0].split('<!-- HTML')[1].split(' -->')[0].trim();

    // const val = `<!-- html element-->\n${rawHtml}\n\n/** CSS */\n${rawStyle}`;
    const val = rawStyle;

    navigator.clipboard.writeText(val).then(() => {
        console.log(val);
        console.log("finished val");
    }).catch((e) => {
        console.log('unsuccessful copy');
    });
}

function handleClick(val) {
    copyValue(val);
    changeText();
}
</script>