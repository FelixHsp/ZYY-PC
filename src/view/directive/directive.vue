<template>
    <Row>
        <Col span="22" offset="1" v-for="value in formInline" :key="value.index">
            <Card dis-hover>
                <p slot="title">{{value.article_title}}</p>
                <p style="font-size: 12px;color: #000">文章作者：{{value.article_id}}  文章类型：{{value.article_class}}</p>
                <p>{{value.article_content}}</p>
                <p style="color: #3399ff;font-size: 10px;float: right" @click="goDetail(index)">查看详情</p>
            </Card>            
        </Col>
    </Row>
</template>

<script>
import axios from "axios";
export default {
  name: "directive",
  data() {
    return {
      doctor,
      modal1: false,
      formInline: [],
      correctdoc: {}
    };
  },
  created() {
    this.send();
  },
  methods: {
    Add: function() {
      this.$router.push({
        name: "page-list"
      });
    },
    ok() {
      this.$Message.info("Clicked ok");
      axios({
        url: "http://localhost/zyy/user/article",
        method: "post",
        data: this.formInline,
        transformRequest: function(obj) {
          var str = [];
          for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
          return str.join("&");
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    cancel() {
      this.$Message.info("Clicked cancel");
      this.send();
      axios({
        url: "http://localhost/zyy/user/article",
        method: "post",
        data: this.correctdoc,
        transformRequest: function(obj) {
          var str = [];
          for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
          return str.join("&");
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goDetail(index) {
      this.modal1 = true;
      this.correctdoc = this.formInline[index];
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
