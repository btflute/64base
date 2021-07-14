<template>
  <div id="app">
    <div >
      10进制
      <input v-model="inputValue" type="number"/>
      <button @click="btnClick">转换</button>
    </div>
    <div class='target-div'>
      64进制：
      {{ targetValue }}
    </div>
  </div>
</template>

<script>
import cal from './helper.js'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      inputValue: '',
      targetValue: ''
    }
  },
  methods: {
    btnClick() {
      this.targetValue = cal(this.inputValue)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.target-div {
}
</style>
