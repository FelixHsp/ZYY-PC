<template>
    <div>
      <div v-for="value in formInline" :key="value.index">
        {{value.article_title}}
      </div>
    </div>

</template>

<script>
import axios from "axios"
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
        name: "drag_list_page"
      });
    },
    ok() {
      this.$Message.info("Clicked ok");
      axios({
        url: 'http://localhost/zyy/user/article',
        method: 'post',
        data: this.formInline,
        transformRequest: function (obj) {
          var str = []
          for (var p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
          }
          return str.join('&')
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
          // console.log(res);
        })
        .catch(err => {
          // console.log(err);
        });
    },
    correct(index) {
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
