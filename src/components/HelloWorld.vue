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
            <h1>{{ msg }}</h1>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    msg: 'This is my message to VUE'
  }),
};
</script>
