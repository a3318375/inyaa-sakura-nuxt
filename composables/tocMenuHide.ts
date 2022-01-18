export function useTocMenuHide () {
    const tocShow = useState('tocShow', () => false)

    function updateTocShow() {
        if (tocShow.value) {
            tocShow.value = false
        } else {
            tocShow.value = true
        }
    }

    function updateTocHide() {
        tocShow.value = false
    }

    return {
        tocShow,
        updateTocShow,
        updateTocHide
    }
}
