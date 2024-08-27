<template>
    <Header01>
        This is header
    </Header01>
    <Header01></Header01>
</template>

<script>
import Header01 from './customHeaders/Header01.vue';

export default {
    name: 'HeadersView',
    components: {
        Header01,
    },
}
</script>

<style scoped></style>