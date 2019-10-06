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
        <h3>There are {{ countLinks }} sites listed</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Stats',
  data: () => ({
    statusMessage: 'This is a separator for Status Count'
  }),
  computed: {
    ...mapGetters([
      'countLinks'
    ])
  }
};
</script>
