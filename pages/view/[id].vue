<template>
  <v-container class="h-100" v-motion-slide-left>
    <v-row class="mt-15">
      <v-spacer></v-spacer>
      <v-col cols="12"  class="mt-15 px-2" >
        <v-card class="rounded-xl">
          <v-img cover :src="post.thumbnail" max-height="300" class="rounded-xl">
            <v-row class="fill-height py-0 my-0 justify-center align-content-center">
              <v-col class="opacity-8">
                <v-sheet height="100%" width="100%" class="bg-transparent  text-center">
                  <v-row>
                    <v-col cols="12" class="mt-15">
                      <NuxtLink class="text-lg-h5 nanumsquare-bold text-primary"  :to="'/series/'+post.series.id" style="text-decoration-line: none"> 시리즈 | {{post.series.title}} </NuxtLink>
                    </v-col>

                    <v-col cols="12" class="my-15">
                      <h1 class="text-lg-h2 nanumsquare-bold" >{{post.title}}</h1>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
          </v-img>
          <v-card-text>
            <v-row class="ma-2 pa-lg-2 pa-sm-1">
              <v-col cols="12">
                <div class="markdown-body nanumsquare-light text-lg-h6 text-md-body-1  pa-10" v-html="markdown.render(post.content)" style="line-height: 3;">
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {getPost} from "~/api/post";
import type {PostResponse} from "~/utils/api-response";
const route = useRoute();
const postId = route.params.id
import Markdown from 'vue3-markdown-it';

const post:PostResponse = await getPost(postId).then((res) => {
  if(typeof res === 'string'){
    throw showError({
      statusCode: 404,
      fatal: true,
      message: "해당 포스트가 없습니다."
    })
  }
  console.log(res)
  return res
});
import MarkdownIt from "markdown-it";
import MarkdownItAbbr from "markdown-it-abbr";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItFootnote from "markdown-it-footnote";
import MarkdownItHighlightjs from "markdown-it-highlightjs";
import MarkdownItSub from "markdown-it-sub";
import MarkdownItSup from "markdown-it-sup";
import MarkdownItTasklists from "markdown-it-task-lists";
import 'highlight.js/styles/github-dark.css';

const plugin = [
  {

  }
]

const markdown = new MarkdownIt()
    .use(MarkdownItAbbr)
    .use(MarkdownItAnchor)
    .use(MarkdownItFootnote)
    .use(MarkdownItHighlightjs)
    .use(MarkdownItSub)
    .use(MarkdownItSup)
    .use(MarkdownItTasklists)

const goPage = (target:string) => {
  router.push({path: target})
}

</script>

<style scoped>
.opacity-8 {
  background-color: rgba( 18, 18, 18, 0.8 );
}
</style>