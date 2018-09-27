<template>
 <Row>
      <Col span="7" v-for="value in formInline" :key="value.index">
        <Card>
          <div style="text-align:center" >
              <img class="index-img" :src="index" alt="">
              <h3>{{value.name}}</h3>
              <h5>从医年限:{{value.workyear}}年</h5>
              <h5>擅长病种:{{value.goodat}}</h5>
              <h5>挂号费用:{{value.price}}元</h5>
              <h5>医生简介:{{value.desc}}</h5>
              <Button type="primary" @click="modal1 = true">点击进行修改</Button>
              <Modal
                v-model="modal1"
                @on-ok="ok"
                @on-cancel="cancel">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                  <FormItem prop="name" class="formit">
                      <Input type="text" v-model="value.name" placeholder="姓名">
                          <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem prop="workyear" class="formit" >
                      <Input type="number" v-model="value.workyear" placeholder="从医年限">
                          <Icon type="ios-card-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem prop="goodat" class="formit">
                      <Input type="text" v-model="value.goodat" placeholder="擅长病种">
                          <Icon type="ios-bookmark-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem prop="price" class="formit">
                      <Input type="number" v-model="value.price" placeholder="挂号费用">
                          <Icon type="ios-calculator-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem  prop="desc" class="formit">
                      <Input v-model="value.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="医生简介"></Input>
                  </FormItem>
                  <FormItem prop="data" class="formit">
                      <DatePicker type="date" v-model="value.data" multiple placeholder="可挂号日期" style="width:300px"></DatePicker>
                  </FormItem>
                </Form>
              </Modal>

          </div>
        </Card>
      </Col>

      <div  @click="Add">
        <Col span="7" class="add">
          <Card>
            <div style="text-align:center">
                <Icon class="md-add" type="md-add" size="200" />
            </div>
          </Card>
        </Col>
      </div>
 </Row>

</template>

<script>
import index from '@/assets/images/index.jpg'
export default {
  name: 'count_to',
  data () {
    return {
      index,
      modal1: false,
      formInline: [
        {
          name: '张三主任',
          workyear: '10',
          goodat: '多囊卵巢综合征',
          desc: '十年从医经验，擅长多囊卵巢综合征的治疗',
          price: '12',
          data: '2018-09-05,2018-09-06,2018-09-07'
        }
      ]
    }
  },
  methods: {
    Add: function () {
      this.$router.push({
        name: 'drag_list_page'
      })
    },
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>

<style>
.index-img{
    height: 250px;
    width: 200px;
}
.ivu-card-body{
  height: 450px;
}
.md-add{
  margin-top:100px ;
}
.add{
  cursor: pointer;
}
.formit{
  width: 300px;
}
</style>
