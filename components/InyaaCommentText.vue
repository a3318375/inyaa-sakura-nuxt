<script setup>
const user = useCookie('user')
const route = useRoute();
const commentText = useState('commentText', () => '')
const subComment = async() => {
  if (!user || !user.value) {
    alert('请先登陆')
  }
  await $fetch('/blog/comment/save', {
    baseURL: 'https://api.inyaw.com/inyaa-web',
    credentials: "include",
    method: 'POST',
    body: {
      userId: user.value.id,
      toUserId: 0,
      content: commentText.value,
      blogId: route.params.id,
    },
  })
  console.log(commentText)
  commentText.value = ''
  window.location.reload();
}
</script>
<template>
  <div class="flex pt-4 items-start space-x-4 pb-">
    <div class="flex-shrink-0">
      <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    </div>
    <div class="min-w-0 flex-1">
      <form action="#" class="relative">
        <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <label for="comment" class="sr-only">请输入你的评论</label>
          <textarea rows="3" name="comment" v-model="commentText" id="comment" class="block w-full py-3 border-0 resize-none sm:text-sm focus:outline-none focus:border-2 focus:border-pink-300" placeholder="Add your comment..." />

          <!-- Spacer element to match the height of the toolbar -->
          <div class="py-2" aria-hidden="true">
            <!-- Matches height of button in toolbar (1px border + 36px content height) -->
            <div class="py-px">
              <div class="h-9" />
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
          <div class="flex items-center space-x-5">
          </div>
          <div class="flex-shrink-0">
            <button type="button" @click="subComment" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              发送
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
