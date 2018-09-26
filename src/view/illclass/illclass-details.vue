<template>
  <div>
    <h1 id="header">妇科常见疾病</h1>
    <Row>
        <i-col span="8" class="ill" @click="on()"> <div @click="go()">多卵巢综合征</div> </i-col>
        <i-col span="8" class="ill"><div @click="go()">不孕症</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">月经不调</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">盆腔炎性疾病</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">痛经</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">子宫内膜异位症</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">绝经期综合征</div></i-col>
        <i-col span="8" class="ill"><div @click="go()">多发性流产</div></i-col>
        <i-col span="8" class="ill" style="fontSize:200px;"><div @click="on()">+</div></i-col>
    </Row>
  </div>
</template>
<script>
export default {

}
</script>

<script>
import PasteEditor from '_c/paste-editor'
import { getTableDataFromArray } from '@/libs/util'
export default {
  name: 'illclass_details_page',
  components: {
    PasteEditor
  },
  data () {
    return {

    }
  },
  methods: {
    go () {
      this.$router.push('/illclass/illclass_page')
    },
    on () {
      this.$router.push('/illclass/illclass_add_page')
    }

  }
}
</script>

<style lang="less">
#header{
width: 100%;
text-align: center;
font-size: 30px;
color: #000;
}
.ill{
  width: 300px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  border: 1px solid ;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  margin-bottom: 30px;
  color: #000;
  cursor: pointer;
}
#add{
  border: 1px solid ;
  width: 300px;
  height: 200px;
}
</style>
