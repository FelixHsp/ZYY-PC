<template>
    <div class="form">

        <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">点击上传照片</Button>
        </Upload>
         <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="name" class="formitem">
                <Input type="text" v-model="formInline.name" placeholder="姓名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="workyear" class="formitem">
                <Input type="number" v-model="formInline.workyear" placeholder="从医年限">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="goodat" class="formitem">
                <Input type="text" v-model="formInline.goodat" placeholder="擅长病种">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem  prop="desc" class="formitem">
                <Input v-model="formInline.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="医生简介"></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">点击保存</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        name: '',
        workyear: '',
        goodat: '',
        desc: ''
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
        width: 200px;
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

    .form button:nth-child(1){
        position: absolute;
        top: 500px;
    }
    .form button:nth-child(2){
        position: absolute;
        left: -350px;
        top: 0px;
        /* width: 100px; */
    }
</style>
