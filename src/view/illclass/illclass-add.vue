<template>
  <i-form :model="formItem" :label-width="80" action="http://localhost/zyy/User/addills" method="post">
    <Form-item label="病种名称">
      <i-input :value.sync="formItem.input" placeholder="请输入" name="title"></i-input>
    </Form-item>
    <Form-item label="病种描述">
      <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..." name="content"></i-input>
    </Form-item>
    <input type="submit" @click="info" id="submit" value="保存">
  </i-form>
</template>
<script>
export default {

}
</script>

<script>
import { getArrayFromFile, getTableDataFromArray } from '@/libs/util'
export default {
  name: 'illclass_add_page',
  data () {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  },
  methods: {
    info () {
      this.$Message.info('添加成功');

    }
}
}
</script>

<style>
#submit{
  width: 75px;
  height: 40px;
  cursor: pointer;
}
</style>
