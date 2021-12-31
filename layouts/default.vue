<script setup>
import {useMobileMenuHide} from "../composables/mobileMenuHide";

const { show, updateShow, updateHide  } = useScroll();
function handleScroll() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const myTop = document.body.scrollHeight;
  if (scrollTop > myTop / 10) {
    updateHide()
  } else {
    updateShow()
  }
}

onMounted(async () => {
  document.addEventListener("scroll", handleScroll);
  initAudio();
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
function initAudio() {
  // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    audio: [ // 歌曲列表
      {
        name: "星茶会",
        artist: "灰澈-星茶会",
        url: "https://media.inyaa.cn/test_music.mp3",
        cover: "http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg",
        lrc: "",
        theme: "#baf",
      },
    ]
  });
}
const { mobileMenuShow, updateMobileMenu, updateMobileMenuHide } = useMobileMenuHide();
</script>

<template>
  <img  @scroll="handleScroll" :class="[show ? 'fixed w-full h-full object-cover -z-999 hidden md:block' : 'fixed filter blur-sm w-full h-full object-cover -z-999 hidden md:block']" src="https://media.inyaa.cn/cover/7037ade43b1e484eac903a111b7ea709.jpg" >
  <img  @scroll="handleScroll" :class="[show ? 'fixed w-full h-full object-cover -z-999 md:hidden' : 'fixed filter blur-sm w-full h-full object-cover -z-999 md:hidden']" src="https://media.inyaa.cn/cover/14db2cf6e4b441368243b23722d212c9.png" >
  <div id="aplayer" class="hidden md:block"></div>
  <div class="Canvas hidden md:block" style="position: fixed; opacity: 1; right: -300px; bottom: -100px; pointer-events: none;" id="L2dCanvas"></div>
  <InyaaMenu />
  <div :class="[mobileMenuShow ? 'min-h-full transition duration-300 transform translate-x-250px' : 'min-h-full transition duration-300 transform translate-x-0']" @click="updateMobileMenuHide">
    <slot />
    <InyaaFooter />
  </div>
</template>
