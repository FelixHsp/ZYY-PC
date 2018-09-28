<template>
 <Row class="card-doctor">
      <Col span="5" v-for="value in formInline" :key="value.index">
        <Card>
          <div style="text-align:center" >
              <img class="doctor-img" :src="doctor" alt="">
              <p>医生姓名:{{value.name}}</p>
              <p>医生职称:{{value.goal}}</p>
              <p>从医年限:{{value.workyear}}年</p>
              <p>擅长病种:{{value.goodat}}</p>
              <p>医生简介:{{value.desc}}</p>
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
                  <FormItem prop="goal" class="formit">
                      <Input type="text" v-model="value.goal" placeholder="主任医生">
                          <Icon type="ios-calculator-outline" slot="prepend"></Icon>
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
                  <FormItem  prop="desc" class="formit">
                      <Input v-model="value.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="医生简介"></Input>
                  </FormItem>
                </Form>
              </Modal>

          </div>
        </Card>
      </Col>

      <div  @click="Add" class="add">
        <Col span="5" class="add">
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
import doctor from '@/assets/images/doctor.jpg'
export default {
  name: 'count_to',
  data () {
    return {
      doctor,
      modal1: false,
      formInline: [
        {
          name: '张三',
          workyear: '10',
          goodat: '多囊卵巢综合征',
          desc: '十年从医经验，擅长多囊卵巢综合征的治疗',
          goal: '主任医生',
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
.doctor-img{
    height: 200px;
    width: 150px;
}
.ivu-card-body{
  height: 400px;
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
.card-doctor p{
  text-align: left;
  margin-left: 35px;
  color: #999;
  font-size: 13px;
  margin-top: 2px;
}
.card-doctor button{
  margin-top: 10px;
}
</style>
