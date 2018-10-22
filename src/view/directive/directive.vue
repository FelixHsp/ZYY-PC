<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <card 
      v-show="modal1"
      title="文章详情" id="card">
      <div id="div">
        <i-button type="primary" @click="goback" id="back">
            &lt;后退
        </i-button>
        <i-form :model="formItem" :label-width="80" method="post" action="http://localhost/zyy/doctor/rearticle">
          <Form-item label="文章标题">
            <i-input v-model="formItem.article_title" placeholder="请输入"  name="title"></i-input>
          </Form-item>
          <Form-item label="文章作者">
            <i-input v-model="formItem.article_did" name="did" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
          <Form-item label="文章类型">
            <i-input v-model="formItem.article_class" name="class" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item>
          <!-- <Form-item label="文章详情">
            <i-input v-model="formItem.article_content" type="textarea" name="content" :autosize="{minRows: 2,maxRows: 8}" placeholder="请输入..."></i-input>
          </Form-item> -->
          <editor ref="editor" v-model="formItem.article_content"/>         
          <input type="text" v-model="formItem.aid" name="aid" v-show="false">
          <input type="button" id="btnl" @click="info" value="保存更改">
        </i-form>
    </div>
    </card>
  </div>
    
</template>

<script>
import axios from "axios"
import Editor from '_c/editor'
export default {
  name: "directive",
  components: {
    Editor
  },
  data() {
    return {
      formItem: {

      },
      modal1:false,
      columns7: [
        {
          title: '文章标题',
          key: 'article_title',
          width:100,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.article_title)
            ]);
          }
        },
        {
          title: '文章类型',
          key: 'article_class',
          width:100,
        },
        {
          title: '文章作者',
          key: 'article_did',
          width:100,
        },
        {
          title: '文章详情',
          key: 'article_content'
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
                  this.goDetail(params.index)
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
                  this.delete(params.index)
                }
              }
            }, '删除'),
          ]);
          }
        }
      ],
      data6: [

      ],
    };
  },
  created() {
    this.send();
  },
  methods: {
    goDetail(idx) {
      this.formItem=this.formInline[idx]
      this.$refs.editor.setHtml(this.formItem.article_content);
      this.modal1=true;
    },
    goback (){
      this.modal1=false;
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
    delete(idx){
      this.formItem=this.formInline[idx];
      this.info1();
    },
    info1 () { 
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
        this.modal1=false;
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
        this.data6 = res.data;
        console.log(this.formInline);
      });
    }
  }
};
</script>

<style>
#card{
  text-align: center;
  width: 1000px;
  height: 1000px;
  position: absolute;
  left: 260px;
  top: 0px;
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
</style>
