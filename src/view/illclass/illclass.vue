<template>
    <div>
        <i-button type="primary" @click="goback()">
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
        <i-button type="primary" id="btnl">更改</i-button>
        <i-button type="primary" id="btnr">删除</i-button>
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
  data () {
    return {
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
    goback () {
      console.log(1)
      this.$router.push('/illclass/illclass_details_page')
    }
  }
}
</script>

<style scoped>
h1{
    text-align: center;
    color: #000;
}
#div{
  border: 1px solid;
}
#btnl{
  margin-left: 400px;
}
#btnr{
  margin-left: 100px;
}
</style>
