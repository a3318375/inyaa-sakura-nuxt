export function useLogin() {
  const isLogin = useState('login', () => false)

  function login() {
    isLogin.value = true
  }
  function logout() {
    isLogin.value = false
  }

  return {
    isLogin,
    login,
    logout,
  }
}
