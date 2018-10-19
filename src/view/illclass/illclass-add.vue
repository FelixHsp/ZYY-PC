<template>
  <i-form :model="formItem" :label-width="80" method="post">
    <Form-item label="病种名称">
      <i-input v-model="formItem.input" placeholder="请输入" name="title"></i-input>
    </Form-item>
    <Form-item label="病种描述">
      <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..." name="content"></i-input>
    </Form-item>
    <input type="button" @click="info" id="submit" value="保存">
  </i-form>
</template>
<script>
export default {

}
</script>

<script>
import { getArrayFromFile, getTableDataFromArray } from '@/libs/util'
import axios from "axios";
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
      axios({
        url: 'http://localhost/zyy/User/addills',
        method: 'post',
        data: this.formItem,
        transformRequest: function (obj) {
          var str = []
          for (var p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
          }
          return str.join('&')
        }
      }).then(res => {
        alert(res.data);
        // this.$router.push('/illclass/illclass_details_page');
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

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
