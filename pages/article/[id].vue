<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();
const {toOpen} = useDialog()
const {tocShow, updateTocShow, updateTocHide} = useTocMenuHide();
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
  title: data.value ? data.value.title : '瑶瑶的梦中小屋',
  link: [
    {rel: 'icon', href: 'https://media.inyaa.cn/favicon.ico'}
  ],
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
    {name: 'keywords', content: data.value ? data.value.title : '瑶瑶的梦中小屋'},
    {name: 'description', content: data.value ? data.value.summary : '瑶瑶的梦中小屋，一个个人小站.'},
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

const {articleMouseoverShow, updateArticleMouseoverShow, updateArticleMouseoverHide} = useArticleMouseover();
updateArticleMouseoverShow()

const lastPrevBlur = useState("lastPrevBlur", () => true);
const nextPrevBlur = useState("nextPrevBlur", () => true);
function hideBlur(type) {
  if (type === 0) {
    lastPrevBlur.value = false;
  } else {
    nextPrevBlur.value = false;
  }
}
function showBlur(type) {
  if (type === 0) {
    lastPrevBlur.value = true;
  } else {
    nextPrevBlur.value = true;
  }
}
</script>
<style scoped>
.prev-bulr-hide {
  @apply absolute z-50 top-0 left-0 w-full h-full text-center bg-cover bg-center bg-no-repeat opacity-40;
}
.prev-bulr-show {
  @apply absolute z-50 top-0 left-0 w-full h-full text-center bg-cover bg-center bg-no-repeat opacity-40 filter blur-sm;
}
</style>
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
        <div :class="[articleMouseoverShow ? 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform': 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform md:top-3/4']">
          <h1 class="text-3xl text-white">{{ data.title }}
            <div class="i-carbon-copy hidden"/>
          </h1>
          <p class="text-white">
            <span>
              <img
                  class="w-9 h-9 align-middle float-none inline rounded-full"
                  src="https://media.inyaa.cn/99db72d3abaaef4beece7e9f94b3623.jpg"
              />
            </span>
            <span> 瑶瑶 </span>
            <span>·</span><span v-if="data.createTime">发布于 {{ nuxtApp.$dayjs(data.createTime).fromNow() }}</span> <span>·</span>
            {{ data.views }} 次阅读
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto">
        <!-- Replace with your content -->
        <div class="px-5 py-8 bg-white bg-opacity-80">
          <div class="pt-4">
            <div class="entry-content" v-html="data.context ? nuxtApp.$markit.render(data.context): '' ">
            </div>
          </div>
          <section class="overflow-hidden w-full mt-6 rounded-xl bg-gray-400 h-150px">
            <div :class="[ data.nextBlog ? 'md:float-left md:w-1/2': 'md:float-left md:w-full' ]" v-if="data.previousBlog">
              <a :href="'/article/' + data.previousBlog.id" class="w-full h-150px relative inline-block pt-40px px-40px"
                 @mouseover="hideBlur(0)"
                 @mouseleave="showBlur(0)">
                <div :class="[ lastPrevBlur ? 'prev-bulr-show' : 'prev-bulr-hide' ]"
                     :style="data.previousBlog.cover ? 'background-image: url(' + data.previousBlog.cover + ')' : ''"></div>
                <div class="absolute z-99 left-40px">
                  <span class="text-white z-99">上一篇</span>
                  <h3 class="text-white mt-5px">{{ data.previousBlog.title }}</h3>
                </div>
              </a>
            </div>
            <div :class="[ data.previousBlog ? 'md:float-left md:w-1/2': 'md:float-left md:w-full' ]" v-if="data.nextBlog">
              <a :href="'/article/' + data.nextBlog.id" class="w-full h-150px relative inline-block pt-40px px-40px"
                 @mouseover="hideBlur(1)"
                 @mouseleave="showBlur(1)">
                <div :class="[ nextPrevBlur ? 'prev-bulr-show' : 'prev-bulr-hide' ]"
                     :style="data.nextBlog.cover ? 'background-image: url(' + data.nextBlog.cover + ')' : ''"></div>
                <div class="absolute z-99 w-9/12 right-40px text-right">
                  <span class="text-white z-99">下一篇</span>
                  <h3 class="text-white mt-5px">{{ data.nextBlog.title }}</h3>
                </div>
              </a>
            </div>
          </section>
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
