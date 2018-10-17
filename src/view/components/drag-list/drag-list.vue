<template>
    <div class="form">
        <Upload v-model="formInline.img">
            <Button icon="ios-cloud-upload-outline">点击上传照片</Button>
        </Upload>
         <Form ref="formInline" :model="formInline" :rules="ruleInline" method="post" inline>
            <FormItem prop="name" class="formitem">
                <Input type="text" v-model="formInline.name" placeholder="姓名" name="name">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="goal" class="formitem">
                <Input type="text" v-model="formInline.goal" placeholder="医生职称" name="goal">
                    <Icon type="ios-calculator-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="workyear" class="formitem">
                <Input type="number" v-model="formInline.workyear" placeholder="从医年限" name="time">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="goodat" class="formitem">
                <Input type="text" v-model="formInline.goodat" placeholder="擅长病种" name="special">
                    <Icon type="ios-bookmark-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem  prop="desc" class="formitem">
                <Input v-model="formInline.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="医生简介" name="desc"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submit()">点击保存</Button>
                <!-- <input type="submit" @click="handleSubmit('formInline')" id="submit"> -->
            </FormItem>
        </Form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      formInline: {
        name: '',
        workyear: '',
        goodat: '',
        desc: '',
        goal: '',
        img: ''
      },
      ruleInline: {
        name: [
          { required: true, message: '请填写姓名', trigger: 'blur' }
        ],
        workyear: [
          { required: true, message: '请填写从医年限', trigger: 'blur' }
        ],
        goodat: [
          { required: true, message: '请填写擅长病种', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写医生简介', trigger: 'blur' }
        ],
        goal: [
          { required: true, message: '请填写医生职称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    submit () {
      alert('添加成功')
      axios({
        url: 'http://localhost/zyy1/doctor/adddoc',
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
    .form{
        /* background: red; */
        position: relative;
        left: 450px;
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

    .form button:nth-child(1){
        position: absolute;
        top: 400px;
    }
    .form button:nth-child(2){
        position: absolute;
        left: -350px;
        top: 0px;
        /* width: 100px; */
    }
</style>
