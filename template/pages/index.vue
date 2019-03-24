<template>
  <div>
    <HelloWorld />
    <div :v-html="JSON.stringify(storeItems)"></div>
    <v-btn @click="toggleDark">Toggle Dark Mode</v-btn>
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
  storeItems:any = {};
  created():void{
    // this.storeItems = Store.proxy();
    this.storeItems = Store.items
    Store.watchItems(()=>this.storeItems = Store.items)
  }
  toggleDark():void{
    this.storeItems.dark = !this.storeItems.dark;
  }
}
</script>
