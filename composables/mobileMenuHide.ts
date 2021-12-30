export function useMobileMenuHide() {
    const mobileMenuShow = useState('mobileMenuHide', () => false)

    function updateMobileMenu() {
        if (mobileMenuShow.value) {
            mobileMenuShow.value = false
        } else {
            mobileMenuShow.value = true
        }
    }

    function updateMobileMenuHide() {
        mobileMenuShow.value = false
    }

    return {
        mobileMenuShow,
        updateMobileMenu,
        updateMobileMenuHide
    }
}
