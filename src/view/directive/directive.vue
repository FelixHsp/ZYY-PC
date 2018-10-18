<template>
    <Row>
        <Col span="22" offset="1" v-for="value in formInline" :key="value.index">
            <Card dis-hover>
                <p slot="title">{{value.article_title}}</p>
                <p style="font-size: 12px;color: #000">文章作者：{{value.article_id}}  文章类型：{{value.article_class}}</p>
                <p>{{value.article_content}}</p>
                <p class="goDetail" style="color: #3399ff;font-size: 10px;float: right" @click="goDetail()">查看详情</p>
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
      formInline: []
    };
  },
  created() {
    this.send();
  },
  methods: {
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
    goDetail() {
      this.$router.push({
        path: "page_list_page",
        name: "page_list_page",
        params: {
          key: "key",
          msgKey: this.msg
        }
      });
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
</style>
