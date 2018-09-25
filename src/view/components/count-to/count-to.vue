<template>
 <Row>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>张三主任</h2>
              <h3>简介：XXXXXXXX</h3>
              <Button type="primary">点击查看详情或修改</Button>
          </div>
        </Card>
      </Col>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>张三主任</h2>
              <h3>简介：XXXXXXXX</h3>
              <Button type="primary">点击查看详情或修改</Button>
          </div>
        </Card>
      </Col>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>张三主任</h2>
              <h3>简介：XXXXXXXX</h3>
              <Button type="primary">点击查看详情或修改</Button>
          </div>
        </Card>
      </Col>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>张三主任</h2>
              <h3>简介：XXXXXXXX</h3>
              <Button type="primary">点击查看详情或修改</Button>
          </div>
        </Card>
      </Col>
      <Col span="7">
        <Card>
          <div style="text-align:center">
              <img class="index-img" :src="index" alt="">
              <h2>张三主任</h2>
              <h3>简介：XXXXXXXX</h3>
              <Button type="primary">点击查看详情或修改</Button>
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
      index
    }
  },
  methods: {
    Add: function () {
      this.$router.push({
        name: 'drag_list_page'
      })
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
