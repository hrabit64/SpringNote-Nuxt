<template>
  <v-container class="fill-height fluid d-flex" v-motion-slide-bottom>
    <ClientOnly>
      <v-row v-if="!isUserLoaded" class="align-content-center justify-center text-center">
        <v-col cols="8">
          <v-progress-circular indeterminate :size="128" :width="12"></v-progress-circular>
        </v-col>
      </v-row>
    </ClientOnly>
<!--    login-->
    <v-row v-if="isUserLoaded" class="align-content-center justify-center text-center">
      <v-col cols="8">
        <h1 class="nanumsquare-bold text-lg-h3 text-primary d-inline">로그인이 필요한 페이지입니다.</h1>
      </v-col>
      <v-col cols="8">
        <h1 class="nanumsquare-normal text-body-2 d-inline">* 로그인을 진행하면 가입 약관에 동의하는 것으로 간주됩니다.</h1>
      </v-col>
      <v-col cols="8">
        <v-btn rounded="xl" color="white" @click="login('google');">
          <v-icon class="mr-4 ml-1">mdi-google</v-icon>
          <p class="ibm-plex-medium">구글로 시작하기</p>
        </v-btn>
      </v-col>
      <v-col cols="12" class="mx-2 my-2">
        <v-spacer></v-spacer>
        <v-snackbar color="primary"
                    v-model="raiseError "
                    :timeout="10000"
                    v-if="raiseError "
                    multi-line
        >
          {{ errorMsg }}

          <template v-slot:actions>
            <v-btn
                color="secondary"
                variant="text"
                @click="raiseError = false"
            >
              <v-icon>mdi-close-box</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import {signInRedirect} from "~/utils/firebase-client"
import {getRedirectResult} from "@firebase/auth";
import {
  useIsCurrentUserLoaded,
  useFirebaseAuth,
} from 'vuefire'
//
const raiseError  = ref(false)
const errorMsg = ref('')
const isUserLoaded = useIsCurrentUserLoaded();

// //login
const auth = useFirebaseAuth()!

const login = (provider: string) => {
  signInRedirect(provider)
}

const router = useRouter();

onMounted(() => {
  getRedirectResult(auth)
      .then((result) => {
        if (result !== null) {
          router.push({path: '/'})
        }
      })
      .catch((reason) => {
        errorMsg.value = "로그인 중에 알 수 없는 에러가 발생했어요. 다시 시도해주세요."
        console.error('Failed redirect result', reason)
      })
})
</script>

<style scoped>

</style>