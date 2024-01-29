<script setup>

  import { ref, reactive } from 'vue'

  const logoPath = "src/assets/logo.svg"
  let loadMessage = "Loaded site on " + new Date().toLocaleString()

  // const zahlen = ref(["ichi", "ni", "san", "chi", "go", "roku"])

  const counter = ref(1)

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

  function getBgColor(count){
    if(count < 4){
      console.info("red")
      return "bgRed"
    }else if(count < 7){
      console.info("bgYellow")
      return "bgYellow"
    }else{
      console.info("bgGreen")
      return "bgGreen"
    }
  }

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
          <div class="box" v-for="count in counter">
            <div v-if="count <= amountBad" class="boxFill bgRed"  />
            <div v-else-if="count >= amountGood" class="boxFill bgGreen" />
            <div v-else class="boxFill bgYellow" />
          </div>
        </div>

        <div class="boxWrapper">
          <div class="box" v-for="count in counter">
              <div class="boxFill" :class="getBgColor(count)"  />
              {{ count }}
            </div>
        </div>
    </div>
    
</template>

<style scoped>

.boxWrapper {
  display: flex;
  margin-top: 20px;
}

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
.red {
  color: v-bind(colorBad);
}

.bgYellow {
  background-color: v-bind(colorOK);
}
.yellow {
  color: v-bind(colorOK);
}
.bgGreen  {
  background-color: v-bind(colorGood);
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
