<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns7: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: 'Email',
          key: 'emalie'
        },
        {
          title: 'Creat-Time',
          key: 'creattime'
        },
        {
          title: 'Handle',
          key: 'handle',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                '自定义删除'
              )
            ])
          }
        }
      ],
      data6: [
        {
          name: 'John Brown',
          emalie: 'xxx@163.com',
          creattime: '2016-10-1'
        },
        {
          name: 'Jim Green',
          emalie: 'xxx@163.com',
          creattime: '2016-10-1'
        },
        {
          name: 'Joe Black',
          emalie: 'xxx@163.com',
          creattime: '2016-10-1'
        },
        {
          name: 'Jon Snow',
          emalie: 'xxx@163.com',
          creattime: '2016-10-1'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>
