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
      <FormItem>
          <Button type="primary" @click="submit()">点击保存</Button>
      </FormItem>
    </Form>
    <editor ref="editor" v-model="formInline.desc"/>
  </div>
</template>

<script>
import axios from 'axios'
import Editor from '_c/editor'
export default {
  name: 'page-list',
  components: {
    Editor
  },
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
    .formitem{
        width: 300px;
    }
</style>
