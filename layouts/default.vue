<script setup>
const { tocShow, updateTocShow, updateTocHide } = useTocMenuHide();
const { show, updateShow, updateHide  } = useScroll();
function handleScroll() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const myTop = document.body.scrollHeight;
  if (scrollTop > myTop / 10) {
    updateHide()
    document.getElementsByClassName('aplayer-title')[0].style.color = '#666'
    document.getElementsByClassName('aplayer-author')[0].style.color = '#666'
    document.getElementsByClassName('aplayer-time-narrow')[0].style.color = '#666'
    document.getElementsByClassName('aplayer-icon-volume-down')[0].firstChild.firstChild.style.fill = '#666'
  } else {
    updateShow()
    document.getElementsByClassName('aplayer-title')[0].style.color = '#fff'
    document.getElementsByClassName('aplayer-author')[0].style.color = '#fff'
    document.getElementsByClassName('aplayer-time-narrow')[0].style.color = '#fff'
    document.getElementsByClassName('aplayer-icon-volume-down')[0].firstChild.firstChild.style.fill = '#fff'
  }
  updateTocHide()
}

onMounted(async () => {
  document.addEventListener("scroll", handleScroll);
  new l2dViewer({
    el: document.getElementById('L2dCanvas'), // 要添加Live2d的元素, 支持dom选择器和jq选择器
    basePath: 'https://www.inyaa.cn/lv2d/live2d/model', // 模型根目录
    width: 800,
    height: 600,
    modelName: 'xuefeng_3', // 模型名称
    sounds: [ // 触摸播放声音
      'sounds/demo.mp3', // 相对路径是相对于模型文件夹
      'https://cdn.jsdelivr.net/npm/live2dv3@latest/assets/biaoqiang_3/sounds/demo.mp3' // 也可以是网址
    ]
  })
});
//filter blur-sm
const { mobileMenuShow, updateMobileMenu, updateMobileMenuHide } = useMobileMenuHide();

function toTop() {
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
  const frameFunc = () => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop -= 40;
      rAF(frameFunc)
    }
  }
  rAF(frameFunc)
}
</script>

<template>
  <image  @scroll="handleScroll" :class="[show ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover']" />
  <div class="Canvas hidden md:block" style="position: fixed; opacity: 1; left: -200px; bottom: -100px; pointer-events: none;" id="L2dCanvas"></div>
  <div class="hidden md:block fixed right-0 bottom-0 transform translate-x-7px translate-y-7px duration-300 hover:translate-x-0 hover:translate-y-0 z-999"><img class="cursor-pointer" src="https://cdn.jsdelivr.net/gh/HCLonely/blog.hclonely.com@1.2.0/img/TopLamuLeimu/lamuA.png" @click="toTop"/></div>
  <TailMenu />
  <div :class="[mobileMenuShow ? 'min-h-full transition duration-300 transform translate-x-250px' : 'min-h-full transition duration-300']" @click="updateMobileMenuHide">
    <slot />
    <InyaaFooter />
  </div>
</template>
