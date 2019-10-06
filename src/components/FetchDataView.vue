<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >

      <v-flex
        xs12
        mb-5
      >

        <v-layout justify-center>
            <h1>{{ statusMessage }}</h1>
            <br>
        </v-layout>
      </v-flex>
     
    </v-layout>
     <v-layout justify-center>  
             <h4>{{ status }}</h4>
            <br>
        </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Kuha',
  data: () => ({
    statusMessage: 'This is for Getting data from API',
    status: ''
  }),
  created: function() {
      this.loadQoute();
  },
  methods: {
      loadQoute: function() {
          this.status = '...loading'
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response){
                this.status = response[0];
            })
            .catch(function (error) {
                this.status = 'An erro has occured' + error;
            });
      }
  },
  computed: {
   
  }
};
</script>
