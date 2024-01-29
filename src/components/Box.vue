<template>

<div class="box" @click="boxClicked()">
  <div class="boxFill" :class="getBgColor()"></div>
  {{ count }}
</div>

</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    count: Number
})

const emits = defineEmits(['clicked'])

onBeforeMount(() => {
    console.info("Box is mounting...")
})

onMounted(() => {
    console.info("Box is mounted")
})

onBeforeUnmount(() => {
    console.info("Box will be destroyed")
})

onUnmounted(() => {
    console.info("Box is destroyed")
})

  const colorGood = "#00CC00"
  const colorOK = "yellow"
  const colorBad = "#CC0000"

  let color = "white"

function getBgColor(){

    if(props.count < 4){
      color = colorBad
      return "bgRed"
    }else if(props.count < 7){
      color = colorOK
      return "bgYellow"
    }else{
      color = colorGood
      return "bgGreen"
    }
  }

function boxClicked(){
    emits('clicked', props.count, color)
}

</script>

<style scoped>

.box {
  width: 20px;
  height: 20px;
  border: 1px solid white;
  margin-right: 10px;
  border-radius: 50%;
}

.boxFill{
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.bgRed {
  background-color: v-bind(colorBad);
  color: white;
}

.bgYellow {
  background-color: v-bind(colorOK);
  color: black;
}

.bgGreen  {
  background-color: v-bind(colorGood);
  color: black;
}

</style>