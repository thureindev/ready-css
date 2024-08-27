<template>
    <main>
        <slot>This is empty showcase</slot>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 32px 16px;
    gap: 24px 18px;
}
</style>