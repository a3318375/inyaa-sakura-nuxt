<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
let pageNum = 1
const blogList = useState('blogList', () => [])

const params = {
  size: 10,
}
if (pageNum > 1) {
  params.page = pageNum;
}
if (route.params.title) {
  params.title = route.params.title;
}

console.log('params', params)
const nextPage = async () => {
  pageNum++
  params.page = pageNum;
  const {content} = await $fetch('/api/blog/list', {
    method: "GET",
    params: params,
  })
  blogList.value = [...blogList.value, ...content]
}

const {data} = await useAsyncData('blogList', () => $fetch('/api/blog/list', {
  method: "GET",
  params: params,
}))
blogList.value = data.value.content
</script>

<template>
  <div class="text-center">
    <div class="inline-grid gap-6 px-5 bg-white bg-opacity-80">
      <h1 class="pt-8 pb-2 pl-0">
        <div class="i-carbon-bookmark float-left h-6 w-6"/>
        <span class="float-left">Discovery</span></h1>
      <div v-for="(item, index) in blogList" :key="item.id" class="max-w-md mx-auto bg-white rounded-xl hover:shadow-lg overflow-hidden md:max-w-4xl">
        <div class="md:flex">
          <div :class="[index%2 === 0 ? 'md:flex-shrink-0': 'md:flex-shrink-0 order-last']">
            <img class="md:h-64 w-full object-cover md:w-112" :src="item.cover" alt="Man looking at item at a store">
          </div>
          <div class="p-8 md:w-112 relative">
            <div class="text-xs w-max">
              <div class="i-carbon-time text-sm float-left mr-1 bg-yellow-500"/>
              发布于 {{ nuxtApp.$dayjs(item.createTime).format("YYYY-MM-DD") }}
            </div>
            <a :href="'/article/' + item.id" class="block my-4 text-lg leading-tight font-medium text-black no-underline">{{
                item.title
              }}</a>
            <div class="text-xs">
              <span><div class="i-carbon-view text-sm mr-1 inline-block bg-yellow-500"/>{{ item.views }} 热度</span>
              <span class="mx-2"><div class="i-carbon-pending text-sm mr-1 inline-block bg-yellow-500"/>{{ item.comments }} 条评论</span>
              <span><div class="i-carbon-open-panel-top text-sm mr-1 inline-block bg-yellow-500"/>{{ item.typeName }}</span>
            </div>
            <p class="mt-4 text-gray-500">{{ item.summary }}</p>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"/>
          </div>
          <div class="relative flex justify-center">
            <button type="button" @click="nextPage" class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
