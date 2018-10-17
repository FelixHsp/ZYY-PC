<template>
  <div>
    <Tabs type="card">
        <Tab-pane label="当前挂号">
          <card v-for="(val,idx) in left" :key="idx"><div>
            <span class="span">用户名：{{val.r_uid}}</span>
            <span class="span">挂号医生：{{val.r_did}}</span>
            <span class="span">挂号日期：{{val.r_time}}</span>
          </div></card>
        </Tab-pane>
        <Tab-pane label="往期挂号">
          <card v-for="(val,idx) in right" :key="idx"><div>
            <span class="span">用户名：{{val.r_uid}}</span>
            <span class="span">挂号医生：{{val.r_did}}</span>
            <span class="span">挂号日期：{{val.r_time}}</span>
            <span class="span">就诊情况：{{val.yorn}}</span>
          </div></card>
        </Tab-pane>
    </Tabs>
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
      left:[

      ],
      right:[

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
  },
  created() {
    getData().then(res => {
        this.Data = res.data.data;
        this.Data.forEach(val => {
          if(val.r_tag == "未过期"){
            this.left.push(val);
          }else{
            this.right.push(val);
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
