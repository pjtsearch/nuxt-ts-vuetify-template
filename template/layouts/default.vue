<template>
  <v-app :dark="$store.state.settings.dark">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

interface PagePath {
  icon:string;
  title:string;
  to:string;
}
@Component({
  components: {

  }
})
export default class Home extends Vue {
  clipped:boolean = false
  drawer:boolean = false
  fixed:boolean = false
  temporary:boolean = false
  items:Array<PagePath> = [
    {
      icon: 'apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'bubble_chart',
      title: 'Inspire',
      to: '/inspire'
    }
  ];
  title:string = 'Vuetify.js'
  created():void{
  }
  toggleDark(): void {
    this.$store.commit("settings/toggle", { item: "dark" });
  }
  @Watch("$mq")
  sizeChange(newValue, oldValue){
    console.log(newValue, oldValue)
    if (newValue === "mobile"){
      this.temporary = true;
      this.drawer = false;
    }else if (newValue !== "mobile"){
      this.temporary = false;
      this.drawer = true;
    }
  }
}
</script>

<style lang="scss">
</style>
