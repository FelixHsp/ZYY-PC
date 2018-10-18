<template>
  <div>
    <Row>
        <Col span="22" offset="1" v-for=" (value,idx) in formInline" :key="idx">
            <Card dis-hover>
                <p slot="title">{{value.article_title}}</p>
                <p style="font-size: 12px;color: #000">文章作者：{{value.article_did}}  文章类型：{{value.article_class}}</p>
                <p>{{value.article_content}}</p>
                <p class="goDetail" style="color: #3399ff;font-size: 10px;float: right" @click="goDetail(idx)">查看详情</p>
            </Card>            
        </Col>
    </Row>
    <card 
      v-show="modal1"
      title="文章详情页" id="card">
      <div>
        <i-button type="primary" @click="goback" id="back">
            &lt;后退
        </i-button>
        <i-form :model="formItem" :label-width="80" method="post">
          <Form-item label="文章标题">
            <i-input :value.sync="formItem.article_title" placeholder="请输入"  name="title"></i-input>
          </Form-item>
          <Form-item label="文章作者">
            <i-input :value.sync="formItem.article_did" name="did" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
          <Form-item label="文章类型">
            <i-input :value.sync="formItem.article_class" name="class" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
          <Form-item label="文章详情">
            <i-input :value.sync="formItem.article_content" type="textarea" name="content" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>          
          <input type="text" :value.sync="formItem.aid" name="aid" v-show="false">
          <input type="button" id="btnl" @click="info" value="更改">
          <input type="button" id="btnr" @click="info1" value="删除">
        </i-form>
    </div>
    </card>
  </div>
    
</template>

<script>
import axios from "axios";
export default {
  name: "directive",
  data() {
    return {
      formInline: [],
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '',
        aid:'',
        did:'',
        type:''
      },
      modal1:false,
    };
  },
  created() {
    this.send();
  },
  methods: {
    goDetail(idx) {
      this.modal1=true;
      this.formItem=this.formInline[idx]
      console.log(this.formItem)
    },
    goback (){
      this.modal1=false;
      console.log(this.formItem)
    },
    info () {
      axios({
        url: 'http://localhost/zyy/doctor/rearticle',
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
        this.modal1=false;
        alert('更改成功');
        this.send();
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    info1 () {
      
      this.modal1=false;
      axios({
        url: 'http://localhost/zyy/doctor/delarticle',
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
        alert('删除成功');
        this.send();
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },

    send() {
      axios({
        method: "get",
        url: "http://localhost/zyy/user/article"
      }).then(res => {
        this.formInline = res.data;
        console.log(this.formInline);
      });
    }
  }
};
</script>

<style>
.goDetail {
  cursor: pointer;
}
#card{
  text-align: center;
  width: 600px;
  height: 400px;
  position: absolute;
  left: 400px;
  top: 100px;
}
#btnl{
  margin-left: 300px;
  width: 50px;
  height: 30px;
}
#btnr{
  margin-left: 100px;
  width: 50px;
  height: 30px;
}
#back{
  position: absolute;
  left: 5px;
  top: 10px;
}
</style>
