<script setup>
import {useMobileMenuHide} from "../composables/mobileMenuHide";
const { tocShow, updateTocShow, updateTocHide } = useTocMenuHide();
const { show, updateShow, updateHide  } = useScroll();
function handleScroll() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
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
  if (window.innerWidth < 768) {

  }
});
//filter blur-sm
const { mobileMenuShow, updateMobileMenu, updateMobileMenuHide } = useMobileMenuHide();
</script>

<template>
  <image  @scroll="handleScroll" x="-5" y="-5" :class="[show ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover']" />
  <div class="Canvas hidden md:block" style="position: fixed; opacity: 1; right: -300px; bottom: -100px; pointer-events: none;" id="L2dCanvas"></div>
  <TailMenu />
  <div :class="[mobileMenuShow ? 'min-h-full transition duration-300 transform translate-x-250px' : 'min-h-full transition duration-300']" @click="updateMobileMenuHide">
    <slot />
    <InyaaFooter />
  </div>
</template>
