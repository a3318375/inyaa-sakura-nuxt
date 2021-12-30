export function useArticleMouseover() {
    const articleMouseoverShow = useState('articleMouseover', () => true)

    function updateArticleMouseoverShow() {
        articleMouseoverShow.value = true
    }
    function updateArticleMouseoverHide() {
        articleMouseoverShow.value = false
    }

    return {
        articleMouseoverShow,
        updateArticleMouseoverShow,
        updateArticleMouseoverHide,
    }
}
