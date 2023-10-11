<template>
  <v-sheet class="rounded-lg bg-transparent">
    <v-row>
      <v-col cols="12">
        <v-img src="https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_1280.jpg" cover class="rounded-lg elevation-3" max-height="500" max-weight="500">
          <v-row class="fill-height py-0 my-0">
            <v-col :cols="postSheetCol" class="opacity-8" >
              <v-sheet height="100%" width="100%" class="bg-transparent">
                <v-row>
                  <v-col cols="12">
                    <v-chip :size="seriesChipSize" class="nanumsquare-normal">시리즈 | Spring </v-chip>
                  </v-col>
                  <v-col cols="12" class="mx-4">
                    <p class="text-subtitle-2"><v-icon>mdi-calendar-range</v-icon> 2023/03/02</p>
                  </v-col>
                  <v-col cols="12">
                    <h1 :class="postTitleClass">{{title}}</h1>
                  </v-col>

                </v-row>
              </v-sheet>
            </v-col>

          </v-row>
        </v-img>

      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>

  </v-sheet>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Spring Boot + ZMQ로 MSA 시스템 연동을 해보자'
  },
  thumbnail: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  seriesId: {
    type: Number,
    required: true
  },
  postId: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'default'
  },

})

const seriesChipSize = computed(() => {
  if (props.type === 'large') {
    return 'x-large'
  } else if (props.type === 'small'){
    return 'default'
  }
  else {
    return 'large'
  }
})

const postSheetCol = computed(() => {
  if (props.type === 'large') {
    return 8
  } else {
    return 12
  }
})

const postTitleClass = computed(() => {
  if (props.type === 'large') {
    return 'text-xl-h2 text-lg-h4 ma-xl-5 px-xl-5 ma-lg-2 px-lg-2  nanumsquare-bold'
  } else if (props.type === 'small'){
    return 'text-body-1 ma-2 p-2 text-center nanumsquare-bold'
  }
  else {
    return 'text-xl-h4 text-lg-h6 ma-xl-5 px-xl-5 ma-lg-2 px-lg-2  text-center nanumsquare-bold'
  }
})
</script>

<style scoped>
.opacity-8 {
  background-color: rgba( 18, 18, 18, 0.8 );
}
</style>