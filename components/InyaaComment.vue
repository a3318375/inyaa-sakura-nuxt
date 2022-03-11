<script setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
const nuxtApp = useNuxtApp();
const route = useRoute();
const commonts = await $fetch('/blog/comment/list', {
  baseURL: 'https://api.inyaw.com/inyaa-web',
  credentials: "include",
  method: 'GET',
  params: {
    blogId: route.params.id,
  },
})
const commontList = [...commonts.data.content]
</script>
<template>
  <div class="pt-8 px-6">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"/>
      </div>
      <div class="relative flex justify-center">
      <span class="px-2 bg-white bg-opacity-0 text-sm text-gray-500">
        评论
      </span>
      </div>
    </div>
    <div class="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0 pt-4">
      <div>
        <ul role="list">
          <li v-for="item in commontList" class="py-4">
            <div class="flex space-x-3">
              <img class="h-10 w-10 rounded-full" :src="item.avatar" alt=""/>
              <div class="flex-1 space-y-1">
                <div class="flex items-center">
                  <h3 class="text-sm font-medium">{{ item.nickname }}</h3>
                  <p class="text-sm text-gray-500 pl-2">{{ nuxtApp.$dayjs(item.createTime).fromNow() }}</p>
                </div>
                <p class="text-sm text-gray-500">{{ item.content }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <InyaaCommentText/>
  </div>
</template>
