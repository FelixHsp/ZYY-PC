<template>
  <div>
    <Tabs type="card">
        <Tab-pane label="当前挂号">
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
          </div>
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
          </div>
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
          </div>
        </Tab-pane>
        <Tab-pane label="往期挂号">
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
            <span class="span">就诊情况：已就诊</span>
          </div>
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
            <span class="span">就诊情况：已就诊</span>
          </div>
          <div class="card">
            <span class="span">用户名：ccc </span>
            <span class="span">挂号医生：ccc</span>
            <span class="span">挂号日期：...</span>
            <span class="span">就诊情况：未就诊</span>
          </div>
        </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
export default {

}
</script>

  </div>
</template>

<script>
import qqFans from '@/assets/images/qq-fance.jpg'
export default {
  name: 'join_page',
  data () {
    return {
      qqFans
    }
  }
}
</script>

<style>
.card{
  width: 800px;
  height: 50px;
  background: #cccccc;
  line-height: 50px;
  margin-bottom: 30px;
}
.span{
  margin-right: 50px;
  font-size: 20px;
}
</style>
