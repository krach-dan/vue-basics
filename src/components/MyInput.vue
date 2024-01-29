<!-- <template>
    <input :value="props.modelValue"
    @input="emits('update:modelValue', $event.target.value)">
</template>

<script setup>
    const props = defineProps(['modelValue'])
    const emits = defineEmits(['update:modelValue'])
</script> -->

<template>
    <input v-model="model" />
</template>

<script setup>
    const model = defineModel()
</script>

<style scoped>

</style>