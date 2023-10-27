<template>
    <v-layout>
      <v-main>
        <span class="bg"></span>
        <ClientOnly>
        <v-container class="fill-height fluid d-flex justify-center" v-motion-slide-bottom>
          <v-card class="pa-5 rounded-xl cardColor">
            <v-card-title>
             <h1 class="text-h1 text-center text-primary nanumsquare-bold">{{errorCode}}</h1>
            </v-card-title>
            <v-card-text>
              <p class="text-subtitle-1 nanumsquare-normal">{{errormessage}}</p>
            </v-card-text>
            <v-card-item class="text-center">
              <v-btn class="rounded-xl" @click.stop="goPage('/')"><p class="nanumsquare-normal">메인 페이지로</p></v-btn>
            </v-card-item>
          </v-card>
        </v-container>
        </ClientOnly>
      </v-main>
    </v-layout>

</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
});
const error = props.error;
const errorCode = ref(error.statusCode)
const errormessage = ref("알 수 없는 에러입니다.")

if (error.statusCode === 404) {
  errormessage.value = "이런! 해당 페이지를 찾지 못했어요. 대신 귀여운 오목눈이를 드릴께요.";
} else if (error.statusCode === 403) {
  errormessage.value = "해당 페이지에 접근할 권한이 없는 것 같아요. 하지만 귀여운 오목눈이는 드릴 수 있죠.";
} else {
  errormessage.value = "죄송해요. 서버에 알 수 없는 문제가 생겼어요. 대신 귀여운 오목눈이를 드릴께요.";
}

const router = useRouter();
const goPage = (target:string) => {
  router.push({path: target})
}

</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url( '/image/error.jpg') no-repeat center center;
  background-size: cover;
  background-color: black;
  transform: scale(1.1);
  z-index: -1;
}
.cardColor {
  background-color: rgba(0, 0, 0, 0.8) !important;
  border-color: black !important;
}
</style>