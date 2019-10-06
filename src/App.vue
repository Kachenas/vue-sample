<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <form @submit.prevent="addLink">
          <input class="link-input" type="text" placeholder="Enter a link website" v-model="newLink"/>
      </form>
      <HelloWorld/>
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(link,index) in links" :key="index">{{ link }}</li>
      </ul>
      <Stats />
      <Kuha />
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Stats from './components/Stats';
import Kuha from './components/FetchDataView';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data: () =>  {
    return {
      newLink: ''
    }
  },
  components: {
    HelloWorld,
    Stats,
    Kuha
  },
  computed: {
    ...mapState([
      'title',
      'links',
    ])
  },
  methods: {
    ...mapMutations([
      'ADD_LINK'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    }
  }
};
</script>
