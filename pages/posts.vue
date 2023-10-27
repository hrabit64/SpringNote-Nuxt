<template>
  <v-container class="h-100" v-motion-slide-left>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="10">
        <v-card class="rounded-lg elevation-0 mt-10  bg-transparent">
          <v-card-item>
            <v-row class="align-center justify-center mt-10">
              <v-col cols="12">
                <v-row>
                  <template v-for="n in 16">
                    <v-col md="1" lg="4">
                      <PostCard type="small"></PostCard>
                    </v-col>
                  </template>

                </v-row>
              </v-col>
              <v-col cols="12">
                <v-pagination
                    v-model="page"
                    :length="100"
                    rounded="circle"
                    :total-visible="5"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>



  </v-container>
</template>

<script setup lang="ts">
import { motionShake } from "~/utils/motions";

const items = Array.from({ length: 6 }, (_, i) => i);
const page = ref(1)
</script>

<style scoped>

</style>