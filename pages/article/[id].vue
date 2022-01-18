<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
const { toOpen } = useDialog()
const { tocShow, updateTocShow, updateTocHide } = useTocMenuHide();
const {data} = await useAsyncData('blogInfo', () => $fetch('/blog/web/info', {
  parseResponse: JSON.parse,
  baseURL: 'https://www.inyaa.cn/inyaa-gateway/inyaa-admin',
  method: "GET",
  params: {
    id: route.params.id,
  },
}).then(r => {
  if (!r) {
    return {};
  }
  if (r.code && r.code === 200) {
    return r.data
  } else {
    return {};
  }
}))

useMeta({
  title: data.value? data.value.title : '瑶瑶的梦中小屋',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    { name: 'keywords', content: '瑶瑶,梦中小屋,瑶瑶的梦中小屋' },
    { name: 'description', content: '瑶瑶的梦中小屋，一个个人小站.' },
  ],
})
console.log(data.value.title)
onMounted(async () => {
  window.toCopy = toCopy
})

function toCopy(e) {
  navigator.clipboard.writeText(e.firstElementChild.innerHTML);
  toOpen()
}
const { articleMouseoverShow, updateArticleMouseoverShow, updateArticleMouseoverHide  } = useArticleMouseover();
updateArticleMouseoverShow()
</script>

<template>
  <InyaaNotifications/>
  <div class="pb-10 md:py-10 md:pt-17">
    <header>
      <div
          class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
          @mouseover="updateArticleMouseoverHide"
          @mouseleave="updateArticleMouseoverShow"
      >
        <div
            class="bg-cover bg-center bg-no-repeat h-96"
            :style="data.cover ? 'background-image: url(' + data.cover + ')' : ''"
        ></div>
        <div  :class="[articleMouseoverShow ? 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform': 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform md:top-3/4']">
          <h1 class="text-3xl text-white">{{ data.title }}<div class="i-carbon-copy hidden" /></h1>
          <p class="text-white">
            <span>
              <img
                  class="w-9 h-9 align-middle float-none inline rounded-full"
                  src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"
              />
            </span>
            <span> 瑶瑶 </span>
            <span>·</span><span v-if="data.createTime">发布于 {{nuxtApp.$dayjs(data.createTime).fromNow()}}</span> <span>·</span> {{ data.views }} 次阅读
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto">
        <!-- Replace with your content -->
        <div class="px-4 py-8 sm:px-0 bg-white bg-opacity-80">
          <div class="px-6 pt-4">
            <div class="entry-content" v-html="data.context ? nuxtApp.$markit.render(data.context): '' " >
            </div>
          </div>
          <div class="mt-6 px-6 md:px-0 md:pl-6 md:w-1/2 md:inline-block" v-if="data.previousBlog">
            <div class="h-150px bg-black">
              <a :href="'/article/' + data.previousBlog.id">
                <div class="w-full h-full text-center mt-4 bg-cover bg-center bg-no-repeat opacity-40"
                    :style="data.previousBlog.cover ? 'background-image: url(' + data.previousBlog.cover + ')' : ''">
                  <span>上一篇</span>
                  <div>
                    <h3>{{ data.previousBlog.title }}</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mt-6 px-6 md:px-0 md:pr-6 md:w-1/2 md:inline-block" v-if="data.nextBlog">
            <div class="h-150px bg-black">
              <a :href="'/article/' + data.nextBlog.id">
                <div class="w-full h-full text-center mt-4 bg-cover bg-center bg-no-repeat opacity-40"
                    :style="data.nextBlog.cover ? 'background-image: url(' + data.nextBlog.cover + ')' : ''">
                  <span class="text-white z-50">下一篇</span>
                  <div>
                    <h3 class="text-white z-50">{{ data.nextBlog.title }}</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <InyaaComment/>
        </div>
        <!-- 新目录 -->
        <div :class="[tocShow ? 'fixed z-888 bg-white -right-240px top-120px w-240px duration-300 transform -translate-x-240px' : 'fixed z-888 bg-white -right-240px top-120px w-240px duration-300']">
          <button type="button" class="absolute -left-39px bg-white pl-15px pr-10px py-10px rounded-bl-toc rounded-tl-toc focus:outline-none" @click="updateTocShow">
            <div class="i-carbon-repeat w-14px h-20px"/>
          </button>
          <div class="py-10px px-15px">文章目录</div>
          <div class="pb-15px px-15px" v-html="nuxtApp.$markit.topHtml"></div>
        </div>
      </div>

    </main>
  </div>
</template>
