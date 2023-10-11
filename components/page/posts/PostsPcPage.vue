<template>
  <v-container class="h-100" v-motion-slide-left>
    <v-card class="rounded-lg elevation-3">
      <v-card-item>
        <v-row class="align-center justify-center mt-10">
          <v-col cols="12" class="mt-10">
            <v-sheet
                elevation="10"
                class="px-1"
            >
              <v-row>
                <v-col cols="4">
                  <v-btn-toggle
                      rounded="xl"
                  >
                    <v-btn icon="mdi-format-align-left"></v-btn>
                    <v-btn icon="mdi-format-align-center"></v-btn>
                    <v-btn icon="mdi-format-align-right"></v-btn>
                    <v-btn icon="mdi-format-align-justify"></v-btn>
                  </v-btn-toggle>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      :loading="loading"
                      density="compact"
                      variant="solo"
                      label="Search templates"
                      append-inner-icon="mdi-magnify"
                      single-line
                      hide-details
                      @click:append-inner="onClick"
                  ></v-text-field>

                </v-col>
                <v-col cols="2">
                  <v-select
                      :items="['제목', '본문', '제목 + 본문']"
                  ></v-select>
                </v-col>
              </v-row>

            </v-sheet>
          </v-col>
          <v-col cols="12">
            <v-row>
              <template v-for="n in 16">
                <v-col cols="3">
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


  </v-container>
</template>

<script setup lang="ts">
import { motionShake } from "~/utils/motions";

const items = Array.from({ length: 6 }, (_, i) => i);
const page = ref(1)
</script>

<style scoped>

</style>