<template>

<div class="mainDiv">
    Hello I am Child#1

    <Child2></Child2>

</div>
</template>

<script setup>
import Child2 from './Child2.vue';

</script>

<style scoped>

.mainDiv {
    margin-top: 30px;

    width: 90%;
    height: 300px;

    border: 1px solid yellow;
}

</style>