<template>
    <div>
        <ShowcaseView>
            <BtnSecondary01></BtnSecondary01>
            <BtnPrimary01></BtnPrimary01>
            <BtnAltText01></BtnAltText01>
            <BtnAltText02></BtnAltText02>
        </ShowcaseView>
    </div>
</template>

<script>
import ShowcaseView from './ShowcaseView.vue';
import BtnSecondary01 from './customized/buttons/BtnSecondary01.vue';
import BtnPrimary01 from './customized/buttons/BtnPrimary01.vue';
import BtnAltText01 from './customized/buttons/BtnAltText01.vue';
import BtnAltText02 from './customized/buttons/BtnAltText02.vue';

export default {
    name: 'ButtonsView',
    components: {
        ShowcaseView,
        BtnSecondary01,
        BtnPrimary01,
        BtnAltText01,
        BtnAltText02,
    },
}
</script>

<style scoped>
.btn-custom {
    min-width: 150px;
    height: 60px;
}
</style>