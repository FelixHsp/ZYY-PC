<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <card 
      v-show="modal1"
      title="病症详情页" id="card">
      <div>
        <i-button type="primary" @click="goback" id="back">
            &lt;后退
        </i-button>
        <i-form :model="formItem" :label-width="80" method="post">
          <Form-item label="病症名称">
            <i-input v-model="formItem.input" placeholder="请输入" name="title"></i-input>
          </Form-item>
          <Form-item label="病症详情">
            <i-input v-model="formItem.textarea" type="textarea" name="content" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
          <input type="text" v-model="formItem.iid" name="iid" v-show="false">
          <input type="button" id="btnl" @click="info" value="更改">
          <input type="button" id="btnr" @click="info1" value="删除">
        </i-form>
    </div>
    <Card v-show="modal2" id="form">
      <form method="post">
        <i-input :value.sync="formItem.input" name="title" v-show="false"></i-input>
        <i-input :value.sync="formItem.textarea" name="content" v-show="false"></i-input>
        <div id="delete">确认删除？</div>
        <input type="button" value="确认" id="sub" @click="yes()">
        <input type="button" value="取消" @click="modal2=false" id="but">
      </form>
    </Card>
    
    </card>
  </div>
</template>


<script>
import PasteEditor from '_c/paste-editor'
import { getIllData } from '@/api/data'
import axios from "axios"
export default {
  name: 'illclass_details_page',
  components: {
    PasteEditor
  },
  data () {
    return {
      columns7: [
        {
          title: '病症名称',
          key: 'ill_title',
          width:200,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.ill_title)
            ]);
          }
      },
        {
          title: '病症详情',
          key: 'ill_content',
          align: 'center',
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'large'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.show(params.index)
                }
              }
            }, '详情'),
          ]);
          }
        }
      ],
      data6: [

      ],
      modal1: false,
      modal2: false,
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
        iid:''
      },
    }
  },
  created() {
    this.get();
  },
  activated(){
    this.get();
  },
  methods: {
    go (idx) {
      this.modal1=true;
      this.formItem.input=this.data6[idx].ill_title;
      this.formItem.textarea=this.data6[idx].ill_content;
      this.formItem.iid=this.data6[idx].iid;
    },
    on () {
      this.$router.push('/illclass/illclass_add_page')
    },
    goback (){
      this.modal1=false;
    },
    info () {
      axios({
        url: 'http://localhost/zyy/User/change',
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
        this.get();
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    info1 () {
      this.modal2=true;
    },
    get(){
      // getIllData().then(res => {
      //   this.illdata = res.data.data;
      // }).catch(err => {
      //   console.log(err)
      // })
      axios({
        method: 'get',
        url: 'http://localhost/zyy/User/allills'
      }).then((res) => {
        this.data6 = res.data.data;
      })
    },
    yes(){
      this.modal2=false;
      this.modal1=false;
      axios({
        url: 'http://localhost/zyy/User/delete',
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
        this.get();
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    show (index) {
      this.go(index);
    },
  },
  
}
</script>

<style lang="less">
#header{
width: 100%;
text-align: center;
font-size: 30px;
color: #000;
}
.ill{
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 50px;
  margin-bottom: 0;
  color: #000;
  cursor: pointer;
}
#add{
  border: 1px solid ;
  width: 300px;
  height: 200px;
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
#form{
  width: 400px;
  height: 300px;
  background: #ccc;
  position: absolute;
  top: 0px;
  left: 100px;
}
#sub{
  width: 50px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  left: 80px;
}
#but{
  width: 50px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  right: 80px;
}
#delete{
  font-size: 30px;
  position: relative;
  top: 100px;
}
#span{
  float: right;
}
</style>
