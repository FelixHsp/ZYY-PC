<template>
 <Row class="card-doctor">
      <Col span="5" v-for="(value,index) in formInline" :key="value.index">
        <Card>
          <div style="text-align:center" >
              <img class="doctor-img" :src="doctor" alt="">
              <p>医生姓名:{{value.name}}</p>
              <p>医生职称:{{value.goal}}</p>
              <p>从医年限:{{value.workyear}}年</p>
              <p>擅长病种:{{value.goodat}}</p>
              <p>医生简介:{{value.desc}}</p>
              <Button type="primary" @click="correct(index)">点击进行修改</Button>
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
      <div class="correct">
        <Modal
          v-model="modal1"
          title="修改医生信息"
          @on-ok="ok"
          @on-cancel="cancel"
          >
          <Input v-model="correctdoc.name" class="correctinput">
            <Icon type="ios-contact-outline" slot="prefix" />
          </Input>
          <Input v-model="correctdoc.goal" class="correctinput">
            <Icon type="ios-briefcase-outline" slot="prefix" />
          </Input>
          <Input v-model="correctdoc.workyear" class="correctinput">
            <Icon type="ios-bookmark-outline" slot="prefix" />
          </Input>
          <Input v-model="correctdoc.goodat" class="correctinput">
            <Icon type="ios-medkit-outline" slot="prefix" />
          </Input>
          <Input v-model="correctdoc.desc" class="correctinput">
            <Icon type="ios-paper-outline" slot="prefix" />
          </Input>
        </Modal>
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
          goal: '主任医生'
        },
        {
          name: '李四',
          workyear: '5',
          goodat: '多囊卵巢综合征',
          desc: '五年从医经验，善于与患者沟通',
          goal: '副主任医生'
        }
      ],
      correctdoc: {

      }
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
    },
    correct (index) {
      this.modal1 = true
      this.correctdoc = this.formInline[index]
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
.correctinput{
  margin-bottom: 10px;
  width: 280px;
}
</style>
