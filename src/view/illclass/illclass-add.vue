<template>
  <i-form :model="formItem" :label-width="80">
    <Form-item label="病种名称">
            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
    </Form-item>
    <Form-item label="病种描述">
      <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
    </Form-item>
    <i-button type="primary">保存</i-button>
  </i-form>
</template>
<script>
export default {

}
</script>

<script>
import { getArrayFromFile, getTableDataFromArray } from '@/libs/util'
export default {
  name: 'update_table_page',
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

  }
}
</script>

<style>

</style>
