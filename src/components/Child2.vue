<template>

    <div class="mainDiv">Hello I am Child #2
    <br />
    Message from Parent {{ parentObject.message }}</div>

</template>

<script setup>
import { inject } from 'vue';

    const parentObject = inject('parentObject')

</script>

<style scoped>

.mainDiv {
    margin: auto;
    height: 200px !important;
    border: 1px solid green !important;
}

</style>