<template>
 <Row>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>{{formInline.name}}</h2>
              <h3>简介:{{formInline.desc}}</h3>
              <Button type="primary" @click="modal1 = true">点击查看详情或修改</Button>
              <Modal
                v-model="modal1"
                @on-ok="ok"
                @on-cancel="cancel">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                  <FormItem prop="name">
                      <Input type="text" v-model="formInline.name" >
                          <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem prop="workyear">
                      <Input type="number" v-model="formInline.workyear" placeholder="从医年限">
                          <Icon type="ios-lock-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem prop="goodat">
                      <Input type="text" v-model="formInline.goodat" placeholder="擅长病种">
                          <Icon type="ios-lock-outline" slot="prepend"></Icon>
                      </Input>
                  </FormItem>
                  <FormItem  prop="desc">
                      <Input v-model="formInline.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="医生简介"></Input>
                  </FormItem>
                 </Form>
              </Modal>

          </div>
        </Card>
      </Col>

      <div  @click="Add">
        <Col span="7" class="add">
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
import index from '@/assets/images/index.jpg'
export default {
  name: 'count_to',
  data () {
    return {
      index,
      modal1: false,
      formInline: {
        name: '张三主任',
        workyear: '10',
        goodat: '多囊卵巢综合征',
        desc: 'XXXXXXXXXXXX'
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
    }
  }
}
</script>

<style>
.index-img{
    height: 250px;
    width: 250px;
}
.ivu-card-body{
  height: 380px;
}
.md-add{
  margin-top:75px;
}
.add{
  cursor: pointer;
}
</style>
