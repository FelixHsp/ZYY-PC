<template>
    <Table border :columns="columns7" :data="users"></Table>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns7: [
        {
          title: '用户姓名',
          key: 'user_name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.user_name)
            ])
          }
        },
        {
          title: '用户联系方式',
          key: 'user_phone'
        },
        {
          title: '用户创建日期',
          key: 'user_birth'
        },
        {
          title: 'Handle',
          key: 'handle',
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
                }, '查看详情')
            ]);
        }
        }
      ],
      users: [
        
      ]
    }
  },
  created () {
    this.get ()
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '用户详情',
        content: `姓名：${this.users[index].user_name}<br>联系方式：${
          this.users[index].user_phone
        }<br>创建日期：${this.users[index].user_birth}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    get () {
      axios({
        method: 'get',
        url: 'http://localhost/zyy/user/getusers'
        }).then((res) => {
          this.users = res.data
          console.log(this.users)
        })
    }
  }
}
</script>
