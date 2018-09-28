<template>
    <Card style="width:500px;height:600px">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            养生文章
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
           张三   2018,9.1
        </a>
 <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.

</p>

<div style="text-align :center">
 <Button type="primary" >点击修改</Button>
</div>

    </Card>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    changeLimit () {
      function getArrayItems (arr, num) {
        const temp_array = []
        for (let index in arr) {
          temp_array.push(arr[index])
        }
        const return_array = []
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length)
            return_array[i] = temp_array[arrIndex]
            temp_array.splice(arrIndex, 1)
          } else {
            break
          }
        }
        return return_array
      }
    }
  },
  mounted () {
    this.changeLimit()
  }
}
</script>
