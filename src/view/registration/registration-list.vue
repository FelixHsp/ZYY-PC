<template>
  <div>
    <Tabs type="card">
        <Tab-pane label="当前挂号">
          <Table border :columns="columns7" :data="data6"></Table>
        </Tab-pane>
        <Tab-pane label="往期挂号">
          <Table border :columns="columns8" :data="data7"></Table>
        </Tab-pane>
    </Tabs>
    <!-- <Modal
      v-model="modal1"
      title="用户详细信息"
      @on-ok="ok"
      @on-cancel="cancel"
      cancelText= '删除'
      :closable="false"
      :mask-closable="false"
      >
      aaa
    </Modal> -->
  </div>
</template>
<script>
export default {

}
</script>

<script>
import qqFans from '@/assets/images/qq-fance.jpg'
import { getData } from '@/api/data'
export default {
  name: 'list_page',
  data () {
    return {
      Data:{

      },
      columns7: [
        {
          title: '用户名',
          key: 'user_name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong',{
                style: {
                  cursor: 'pointer'
                },
                on: {
                click: () => {
                  this.user(params.index)
                }
              }
              }, params.row.user_name)
            ]);
          }
        },
        {
          title: '患者姓名',
          key: 'r_name'
        },
        {
          title: '挂号医生',
          key: 'doctor_name',
          render: (h, params) => {
            return h('div', [
              h('strong',{
                style: {
                  cursor: 'pointer'
                },
                on: {
                click: () => {
                  this.doctor(params.index)
                }
              }
              }, params.row.doctor_name)
            ]);
          }
        },
        {
          title: '挂号日期',
          key: 'r_time'
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
      columns8: [
        {
          title: '用户名',
          key: 'user_name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong',{
                style: {
                  cursor: 'pointer'
                },
                on: {
                click: () => {
                  this.user1(params.index)
                }
              }
              }, params.row.user_name)
            ]);
          }
        },
        {
          title: '患者姓名',
          key: 'r_name'
        },
        {
          title: '挂号医生',
          key: 'doctor_name',
          render: (h, params) => {
            return h('div', [
              h('strong',{
                style: {
                  cursor: 'pointer'
                },
                on: {
                click: () => {
                  this.doctor(params.index)
                }
              }
              }, params.row.doctor_name)
            ]);
          }
        },
        {
          title: '挂号日期',
          key: 'r_time'
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
                  this.show1(params.index)
                }
              }
            }, '详情'),
          ]);
        }
      }
    ],
    data6: [

    ],
    data7: [

    ]
    } 
  },
  methods: {
    // shishi(){
    //   getTableData().then(res => {
    //     console.log(res.data.data);
    //     this.tableData = res.data.data;
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
    show (index) {
      this.$Modal.info({
        title: '挂号详情',
        content: `用户名：${this.data6[index].user_name}<br>患者姓名：${this.data6[index].r_name}<br>挂号医生：${this.data6[index].doctor_name}<br>挂号日期：${this.data6[index].r_time}`
      })
    },
    show1 (index) {
      this.$Modal.info({
        title: '挂号详情',
        content: `用户名：${this.data7[index].user_name}<br>患者姓名：${this.data7[index].r_name}<br>挂号医生：${this.data7[index].doctor_name}<br>挂号日期：${this.data6[index].r_time}`
      })
    },
    user (index) {
      this.$Modal.info({
        title: '用户详情',
        content: `用户名：${this.data6[index].user_name}<br>用户性别：${this.data6[index].user_sex}<br>用户电话：${this.data6[index].user_phone}<br>用户身份证号：${this.data6[index].user_idnumber}`
      })
    },
    user1 (index) {
      this.$Modal.info({
        title: '用户详情',
        content: `用户名：${this.data7[index].user_name}<br>用户性别：${this.data7[index].user_sex}<br>用户电话：${this.data7[index].user_phone}<br>用户身份证号：${this.data7[index].user_idnumber}`
      })
    },
    doctor (index) {
      this.$Modal.info({
        title: '医生详情',
        content: `医生姓名：${this.data6[index].doctor_name}<br>医生职位：${this.data6[index].doctor_job}<br>医生工作地点：${this.data6[index].doctor_place}<br>医生擅长：${this.data6[index].doctor_special}`
      })
    },
    doctor1 (index) {
      this.$Modal.info({
        title: '医生详情',
        content: `医生姓名：${this.data7[index].doctor_name}<br>医生职位：${this.data7[index].doctor_job}<br>医生工作地点：${this.data7[index].doctor_place}<br>医生擅长：${this.data7[index].doctor_special}`
      })
    }
  },
  created() {
    getData().then(res => {
        this.Data = res.data;
        console.log(res);
        this.Data.forEach(val => {
          if(val.r_tag == "未过期"){
            this.data6.push(val);
          }else{
            this.data7.push(val);
          }
        });
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>
card{
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}
.span{
  margin-right: 50px;
  font-size: 20px;
}
</style>
