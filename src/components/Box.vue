<template>

<div class="box" @click="boxClicked()">
     <div class="boxFill" :class="getBgColor()"  />
      {{ count }}
</div>

</template>

<script setup>

const props = defineProps({
    count: Number
})

const emits = defineEmits(['clicked'])

  const colorGood = "#00CC00"
  const colorOK = "yellow"
  const colorBad = "#CC0000"

function getBgColor(){

    if(props.count < 4){
      return "bgRed"
    }else if(props.count < 7){
      return "bgYellow"
    }else{
      return "bgGreen"
    }
  }

function boxClicked(){

    console.info('box clicked')
    emits('clicked', props.count, "Boxxy")
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
}

.bgYellow {
  background-color: v-bind(colorOK);
}

.bgGreen  {
  background-color: v-bind(colorGood);
}

</style>