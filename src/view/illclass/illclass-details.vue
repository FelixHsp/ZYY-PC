<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <card 
      v-show="modal1"
      title="病症详情页" id="card">
      <div id="div">
        <i-button type="primary" @click="goback" id="back">
            &lt;后退
        </i-button>
        <i-form :model="formItem" :label-width="80" method="post">
          <Form-item label="病症名称">
            <i-input v-model="formItem.input" placeholder="请输入" name="title"></i-input>
          </Form-item>
          <!-- <Form-item label="病症详情">
            <i-input v-model="formItem.textarea" type="textarea" name="content" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item> -->
          <editor ref="editor" v-model="formItem.textarea"/>
          <input type="text" v-model="formItem.iid" name="iid" v-show="false">
          <input type="button" id="btnl" @click="info" value="保存更改">
        </i-form>
    </div>
    </card>
    <Card v-if="modal2" id="form">
      <form method="post">
        <i-input :value.sync="formItem.input" name="title" v-show="false"></i-input>
        <i-input :value.sync="formItem.textarea" name="content" v-show="false"></i-input>
        <div id="delete">确认删除？</div>
        <input type="button" value="确认" id="sub" @click="yes()">
        <input type="button" value="取消" @click="modal2=false" id="but">
      </form>
    </Card>
    
    
  </div>
</template>


<script>
import PasteEditor from '_c/paste-editor'
import { getIllData } from '@/api/data'
import Editor from '_c/editor'
import axios from "axios"
export default {
  name: 'illclass_details_page',
  components: {
    Editor
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
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.show(params.index)
                }
              }
            }, '编辑'),
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.infor1(params.index)
                }
              }
            }, '删除'),
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
      this.formItem.input=this.data6[idx].ill_title;
      this.formItem.textarea=this.data6[idx].ill_content;
      this.formItem.iid=this.data6[idx].iid;
      this.$refs.editor.setHtml(this.formItem.textarea);
      this.modal1=true;
      console.log(this.formItem.textarea);
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
    infor1(idx){
      this.formItem.input=this.data6[idx].ill_title;
      this.formItem.textarea=this.data6[idx].ill_content;
      this.formItem.iid=this.data6[idx].iid;
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
#card{
  text-align: center;
  width: 1000px;
  height: 600px;
  position: absolute;
  left: 260px;
  top: 100px;
  z-index: 1;
}
#div{
  text-align: left;
}
#btnl{
  height: 30px;
}

#back{
  position: absolute;
  left: 5px;
  top: 10px;
}
#form{
  text-align: center;
  width: 400px;
  height: 300px;
  background: #ccc;
  position: absolute;
  top: 100px;
  left: 500px;
  z-index: 1;
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
</style>
