<template>
    <div>
        <ShowcaseView>
            <Btn01></Btn01>
            <Btn02>Click me</Btn02>
            <Btn03>
                <template #primary-text>Hover me</template>
                <template #alt-text>Click me</template>
            </Btn03>
            <BtnAltText>
                <template #primary-text>Hover me</template>
                <template #alt-text>Click me</template>
            </BtnAltText>

            <BaseBtn></BaseBtn>

            <BtnTest></BtnTest>
        </ShowcaseView>
    </div>
</template>

<script>
import ShowcaseView from './ShowcaseView.vue';
import Btn01 from './customized/buttons/Btn01.vue';
import Btn02 from './customized/buttons/Btn02.vue';
import Btn03 from './customized/buttons/Btn03.vue';
import BtnAltText from './customized/buttons/BtnAltText.vue';

import BaseBtn from './customized/buttons/BaseBtn.vue';
import BtnTest from './customized/buttons/BtnTest.vue';

export default {
    name: 'NewGameView',
    components: {
        ShowcaseView,
        Btn01,
        Btn02,
        Btn03,
        BtnAltText,

        BaseBtn,
        BtnTest,
    },
}
</script>

<style scoped>
.btn-custom {
    min-width: 150px;
    height: 60px;
}
</style>