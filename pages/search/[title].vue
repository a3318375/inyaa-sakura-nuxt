<script setup>
const route = useRoute();
const nuxtApp = useNuxtApp();

const { data } = await useFetch("/blog/web/archive/list", {
  baseURL: "https://api.inyaw.com/inyaa-admin",
  method: "GET",
});

useMeta({
  title: '搜索',
  link: [
    {rel: 'icon', href: 'https://media.inyaw.com/icon/favicon.ico'}
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'keywords', content: '搜索,包含关键字"' + route.params.title +'"的结果' },
    { name: 'description', content: '包含关键字"' + route.params.title +'"的结果' },
  ],
})
const { articleMouseoverShow, updateArticleMouseoverShow, updateArticleMouseoverHide  } = useArticleMouseover();
updateArticleMouseoverShow()
</script>

<template>
  <div class="py-10 pt-17">
    <header>
      <div
          class="max-w-5xl mx-auto bg-white bg-opacity-80 flex flex-col relative"
          @mouseover="updateArticleMouseoverHide"
          @mouseleave="updateArticleMouseoverShow"
      >
        <div
            class="bg-cover bg-center bg-no-repeat md:h-96"
        ></div>
        <div  :class="[articleMouseoverShow ? 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform': 'inset-0 mx-auto absolute flex flex-col text-center justify-center backdrop-filter backdrop-blur transition duration-500 ease-in-out transform md:top-3/4']">
          <h1 class="text-3xl text-white">包含关键字"{{route.params.title}}"的结果</h1>
          <p class="text-white">
            <span>
              <img
                  class="w-9 h-9 align-middle float-none inline rounded-full"
                  src="https://media.inyaw.com/icon/99db72d3abaaef4beece7e9f94b3623.jpg"
              />
            </span>
            <span> bymoye </span>
            <span>·</span>2021-02-28 <span>·</span>684 次阅读
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-5xl mx-auto">
        <!-- Replace with your content -->
        <div class="py-8 sm:px-0 bg-white bg-opacity-80">
          <InyaaContent />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
