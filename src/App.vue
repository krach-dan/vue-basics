<script setup>

  import Box from './components/Box.vue'
  import MyInput from './components/MyInput.vue'
  import { ref } from 'vue'

  const logoPath = "src/assets/logo.svg"
  let loadMessage = "Loaded site on " + new Date().toLocaleString()

  const counter = ref(1)

  const textInput = ref("test")

  const amountBad = 3
  const amountGood = 7

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

  function logBoxClick(count, name){
    console.info(count)
    console.info(name)
    // console.info('Box #', count, ' was clicked')
  }

  // function logBoxClick(count, name){
  //   console.info(name)
  //   console.info('Box #', count, ' was clicked')
  // }

</script>

<template>
  
    {{  loadMessage }}
    <img alt="Vue logo" class="logo" :src="logoPath" width="125" height="125" />
    
    <div id="wrapper">
        <button @click="counter++">Add</button>&nbsp;
        <button @click="counter > 0 ? counter-- : counter = 0">Reduce</button>

        Counter: <span :class="getColor()">{{ counter }}</span>

        <!-- <span v-show="counter > 5">verkaufen</span> -->

        <br /><br />
        <input type="number" v-model="counter" />


        <div class="boxWrapper">
          <Box v-for="count in counter" 
          :count="count" 
          @clicked="logBoxClick" />
        </div>
        <br /><br />

        <MyInput v-model="textInput" /> {{  textInput }}

          <!-- <div class="box" >
            <div v-if="count <= amountBad" class="boxFill bgRed"  />
            <div v-else-if="count >= amountGood" class="boxFill bgGreen" />
            <div v-else class="boxFill bgYellow" />
          </div> -->
    </div>
    
</template>

<style scoped>

.boxWrapper {
  display: flex;
  margin-top: 20px;
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
