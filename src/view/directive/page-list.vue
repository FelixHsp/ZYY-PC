<template>
  <div class="artical">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" method="post" inline>
      <FormItem prop="title" class="formitem">
          <Input type="text" v-model="formInline.title" placeholder="文章标题" name="name">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem prop="name" class="formitem">
          <Input type="text" v-model="formInline.name" placeholder="作者名" name="goal">
              <Icon type="ios-calculator-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem prop="type" class="formitem">
          <Input type="text" v-model="formInline.type" placeholder="文章类型" name="time">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
      </FormItem>
      <FormItem  prop="desc" class="formitem">
          <Input v-model="formInline.desc" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="文章内容" name="desc"></Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="submit()">点击保存</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'page-list',
  data () {
    return {
      formInline: {
        title: '',
        name: '',
        type: '',
        desc: ''
      },
      ruleInline: {
        title: [
          { required: true, message: '请填写文章标题', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请填写作者', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请填写文章类型', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写文章内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      alert('添加成功')
      axios({
        url: 'http://localhost/zyy/doctor/addarticle',
        method: 'post',
        data: this.formInline,
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
    }
  }
}
</script>
<style>
  .artical{
        /* background: red; */
        position: relative;
        left: 400px;
        width: 100px;
    }
    .formitem{
        /* background: blue; */
        position: absolute;
        width: 300px;
    }
    .formitem:nth-child(1){
        top: 0;
    }
    .formitem:nth-child(2){
        top: 70px;
    }
    .formitem:nth-child(3){
        top: 140px;
    }
    .formitem:nth-child(4){
        top: 210px;
    }
    .formitem:nth-child(5){
        top: 280px;
    }
    .formitem:nth-child(6){
        top: 350px;
    }

    .artical button:nth-child(1){
        position: absolute;
        top: 400px;
    }
    .artical button:nth-child(2){
        position: absolute;
        left: -350px;
        top: 0px;
        /* width: 100px; */
    }
</style>
