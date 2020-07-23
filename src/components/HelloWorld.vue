<template>
  <div class="hello">

  </div>
</template>

<script>
import {getTest,postTest} from '../../axios/api'
export default {
  name: 'HelloWorld',
  data(){
    return{
    
    }
  },
  created(){
  console.log(process.env.VUE_APP_URL)
  getTest().then(()=>{
    //主要看接口地址是否是灰度变量地址
  })
  postTest().then(()=>{
    //主要看接口地址是否是灰度变量地址
  })
  }
}
</script>

<style scoped>

</style>
