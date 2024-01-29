<script setup>

  // import Box from './components/Box.vue'
  import MyButton from './components/MyButton.vue';
  import MyInput from './components/MyInput.vue'
  import Child1 from './components/Child1.vue';
  import { ref, watch, watchEffect, computed, provide } from 'vue'

  import useMouse from "./composables/mouse"

  const {x, y} = useMouse()

  const logoPath = "src/assets/logo.svg"
  let loadMessage = "Loaded site on " + new Date().toLocaleString()

  const provideObject = {
    message: "Hello from parent"
  }
  provide('parentObject', provideObject)

  const counter = ref(4)
  const multiplikator = ref(2)

  const textInput = ref("defineModel test")

  const colorGood = "#00CC00"
  const colorOK = "yellow"
  const colorBad = "#CC0000"

  function getColor(count){
    if(counter.value < 3){
      return "red"
    }else if(counter.value < 6){
      return "yellow"
    }else{
      return "green"
    }
  }

  watch(counter, (newCounter, oldCounter) => {
      console.info("Counter changed from ", oldCounter, " to ", newCounter)
  })

  watchEffect(() => {
    console.log("Watch Effect counter: ", counter.value)
    console.log("Watch Effect TextInput: ", textInput.value)
  })

  watchEffect(() => {
    console.log("Watch Effect2 counter: ", counter.value)
  })

  const multiCount = computed(() => {
      return counter.value * multiplikator.value
  })

  function logBoxClick(count, color){
    console.info('Box #', count, ' was clicked. Box has the color ', color)
  }

</script>

<template>
  
    {{  loadMessage }} &nbsp;Mouse is at x:{{ x }} y:{{ y }}
    <img alt="Vue logo" class="logo" :src="logoPath" width="125" height="125" />
    
    <div id="wrapper">

        <MyButton @click="counter++"><i class="pi pi-plus" /> Add</MyButton>&nbsp;
        <MyButton @click="counter > 0 ? counter-- : counter = 0"><i class="pi pi-minus" /> Reduce</MyButton>

        Counter: <span :class="getColor()">{{ counter }}</span>
        x <input style="width: 30px" type="number" v-model="multiplikator" />
        = <span :class="getColor()">{{ multiCount }}</span>

        
        <p>Set Counter to <input style="width: 30px" type="number" v-model="counter" /></p>

        <div class="boxWrapper">
          <Box v-for="count in counter" :count="count" @clicked="logBoxClick" />
        </div>

        <MyInput v-model="textInput" /> {{  textInput }}

        <Child1></Child1>
    </div>
    
</template>

<style scoped>

.boxWrapper {
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
}


.red {
  color: v-bind(colorBad);
}


.yellow {
  color: v-bind(colorOK);
}

.green {
  color: v-bind(colorGood);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#wrapper{
  width: 100%;
  text-align: center;
}
</style>
