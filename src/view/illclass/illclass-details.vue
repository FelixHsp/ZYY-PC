<template>
  <div>
    <h1 id="header">妇科常见疾病</h1>
    <Row>
        <i-col span="8" ><Card><div @click="go()" class="ill">多卵巢综合征</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">不孕症</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">月经不调</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">盆腔炎性疾病</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">痛经</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">子宫内膜异位症</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">绝经期综合征</div></Card></i-col>
        <i-col span="8" ><Card><div @click="go()" class="ill">多发性流产</div></Card></i-col>
        <i-col span="8"  ><Card><div @click="on()" class="ill" style="fontSize:200px;">+</div></Card></i-col>
    </Row>
    <card 
      v-show="modal1"
      title="病症详情页" id="card">
      <div>
        <i-button type="primary" @click="goback" id="back">
            &lt;后退
        </i-button>
        <i-form :model="formItem" :label-width="80">
          <Form-item label="病症名称">
            <i-input :value.sync="formItem.input" placeholder="请输入" ></i-input>
          </Form-item>
          <Form-item label="病症详情">
            <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
        </i-form>
        <i-button type="primary" id="btnl" @click="info">更改</i-button>
        <i-button type="primary" id="btnr" @click="info1">删除</i-button>
    </div>
    </card>
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
      modal1: false,
      formItem: {
        input: '多囊卵巢综合征',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '多囊卵巢综合征（PCOS）是生育年龄妇女常见的一种复杂的内分泌及代谢异常所致的疾病，以慢性无排卵（排卵功能紊乱或丧失）和高雄激素血症（妇女体内男性激素产生过剩）为特征，主要临床表现为月经周期不规律、不孕、多毛和/或痤疮，是最常见的女性内分泌疾病。1935年Stein和Leventhal归纳为闭经、多毛、肥胖及不孕四大病症，称之为Stein-Leventhal综合征（S-L综合征）。PCOS患者的卵巢增大、白膜增厚、多个不同发育阶段的卵泡，并伴有颗粒细胞黄素化。PCOS是II型糖尿病、心血管疾病、妊娠期糖尿病、妊娠高血压综合征以及子宫内膜癌的重要危险因素。PCOS的临床表型多样，目前病因不清，PCOS常表现家族群聚现象，提示有遗传因素的作用。患者常有同样月经不规律的母亲或者早秃的父亲；早秃是PCOS的男性表型，女性PCOS和男性早秃可能是由同一等位基因决定的；高雄激素血症和/或高胰岛素血症可能是多囊卵巢综合征患者家系成员同样患病的遗传特征；在不同诊断标准下作的家系分析研究经常提示PCOS遗传方式为常染色体显性遗传；而应用“单基因-变异表达模型”的研究却显示PCOS是由主基因变异并50%可遗传给后代。'
      }
    }
  },
  methods: {
    go () {
      this.modal1=true;
    },
    on () {
      this.$router.push('/illclass/illclass_add_page')
    },
    goback (){
      this.modal1=false;
      console.log(this.modal1)
    },
    info () {
      this.$Message.info('更改成功');
    },
    info1 () {
      this.$Message.info('删除成功');
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
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  margin-bottom: 0;
  color: #000;
  cursor: pointer;
}
#add{
  border: 1px solid ;
  width: 300px;
  height: 200px;
}
#card{
  text-align: center;
  width: 600px;
  height: 400px;
  position: absolute;
  left: 400px;
  top: 100px;
}
#btnl{
  margin-left: 300px;
}
#btnr{
  margin-left: 100px;
}
#back{
  position: absolute;
  left: 5px;
  top: 10px;
}
</style>
