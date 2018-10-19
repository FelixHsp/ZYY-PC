<template>
 <Row class="card-doctor">
      <Col span="5" v-for="(value,index) in formInline" :key="value.index">
        <Card>
          <div style="text-align:center" >
              <img class="doctor-img" :src="doctor" alt="">
              <p>医生姓名:{{value.doctor_name}}</p>
              <p>医生职称:{{value.doctor_place}}</p>
              <p>从医年限:{{value.doctor_job}}年</p>
              <p>擅长病种:{{value.doctor_special}}</p>
              <p>医生简介:{{value.doctor_message}}</p>
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
          cancelText= '删除'
          :closable="false"
          :mask-closable="false"
          >
          <Form>
            </FormItem>
              <Input v-model="correctdoc.doctor_name" class="correctinput" placeholder="医生姓名" name="name">
                <Icon type="ios-contact-outline" slot="prefix" />
              </Input>
            </FormItem>
            <Input v-model="correctdoc.doctor_place" placeholder="医生职称" class="correctinput" name="goal">
              <Icon type="ios-briefcase-outline" slot="prefix" />
            </Input>
            <Input v-model="correctdoc.doctor_job" placeholder="从医年限" class="correctinput" name="time">
              <Icon type="ios-bookmark-outline" slot="prefix" />
            </Input>
            <Input v-model="correctdoc.doctor_special" placeholder="擅长病种" class="correctinput" name="special">
              <Icon type="ios-medkit-outline" slot="prefix" />
            </Input>
            <Input v-model="correctdoc.doctor_message" placeholder="医生简介" class="correctinput" name="desc">
              <Icon type="ios-paper-outline" slot="prefix" />
            </Input>
          </Form>
        </Modal>
      </div>
 </Row>
</template>

<script>
import doctor from '@/assets/images/doctor.jpg'
import axios from 'axios'
export default {
  name: 'count_to',
  data () {
    return {
      doctor,
      modal1: false,
      formInline: [
      ],
      correctdoc: {

      }
    }
  },
  created () {
    this.send()
  },
  methods: {
    Add: function () {
      this.$router.push({
        name: 'drag_list_page'
      })
    },
    ok () {
      this.$Message.info('Clicked ok')
      axios({
        url: 'http://localhost/zyy/doctor/redoc',
        method: 'post',
        data: this.correctdoc,
        transformRequest: function (obj) {
          var str = []
          for (var p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
          }
          return str.join('&')
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    cancel () {
      this.$Message.info('Clicked cancel')

      axios({
        url: 'http://localhost/zyy/doctor/deldoc',
        method: 'post',
        data: this.correctdoc,
        transformRequest: function (obj) {
          var str = []
          for (var p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
          }
          return str.join('&')
        }
      }).then(res => {
        console.log(res)
        this.send();
      }).catch(err => {
        console.log(err)
      })
    },
    correct (index) {
      this.modal1 = true
      this.correctdoc = this.formInline[index]
    },
    send () {
      axios({
        method: 'get',
        url: 'http://localhost/zyy/doctor/getdoc'
      }).then((res) => {
        this.formInline = res.data
        console.log(this.formInline)
      })
    }
  }
}
</script>

<style>
.doctor-img{
    height: 200px;
    width: 150px;
}
.card-doctor .ivu-card-body{
  height: 400px;
}
.card-doctor .md-add{
  margin-top:100px ;
}
.card-doctor .add{
  cursor: pointer;
}
.card-doctor .formit{
  width: 300px;
}
.card-doctor p{
  text-align: left;
  margin-left: 35px;
  color: #999;
  font-size: 13px;
  margin-top: 2px;
}
.card-doctor{
  position: relative;
}
.card-doctor button{
  position: absolute;
  bottom: 20px;
  transform: translate(-50%,0)
}
.correctinput{
  margin-bottom: 10px;
  width: 280px;
}
</style>
