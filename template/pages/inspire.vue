<template>
  <div :v-html="JSON.stringify(Store.items)">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '~/components/HelloWorld.vue'
import Store from "@/assets/ts/Store.class";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  Store:any = Store;
  storeItems:any = {};
  created():void{
    Store.watchItems(()=>this.storeItems = Store.items)
  }
}
</script>
