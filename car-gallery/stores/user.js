import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        email: '',
        role: '',
        password: '',
        age: '',
        dob: '',
        gender: '',
        login: null
    }),
    getters: {
        isLoggedIn(state) {
            if (state.login === null) {
                // If the login state is not yet initialized, check the localStorage
                if (process.client) {
                    const loggedIn = localStorage.getItem('loggedIn');
                    return loggedIn === 'true';
                }
            }
            // Return the current login state
            return state.login === 'true';
        }
    },
    actions: {
        async logInUser(user) {
            try {
                const res = await useNuxtApp().$axios.get('https://testapi.io/api/dartya/resource/users')
                const data = await res.data.data
                if (res.status == 200) {
                    const userData = data.find(udata => udata.email == user.email)
                    if (!userData) {
                        alert("Invalid Email!! Please try again")
                        return false
                    }
                    if (userData.password == user.password) {
                        this.name = userData.name,
                            this.email = userData.email,
                            this.role = userData.role,
                            this.password = userData.password,
                            this.age = userData.age,
                            this.dob = userData.dob,
                            this.gender = userData.gender
                        this.login = "true"
                        try {
                            const res = await useNuxtApp().$axios.post('https://reqres.in/api/login', {
                                email: "eve.holt@reqres.in",
                                password: "cityslicka"
                            })
                            if (process.client) {
                                localStorage.setItem('token', res.data.token)
                                localStorage.setItem('loggedIn', true)
                            }

                        }
                        catch (err) {
                            if (process.client) {
                                localStorage.setItem('token', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`)
                                localStorage.setItem('loggedIn', true)
                            }
                        }
                        navigateTo('/')
                    }
                    else {
                        alert("Invalid Password!! Please try again")
                    }
                }
            }
            catch (err) {
                alert("Error occured!! Please try again")
            }
        },
        async registerUser(data) {
            try {
                const res = await useNuxtApp().$axios.post('https://testapi.io/api/dartya/resource/users', {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    password: data.password,
                    age: data.age,
                    dob: data.dob,
                    gender: data.gender
                })
                if (res.status === 201) {
                    alert(' User added Successfully: \n\nName: ' + data.name + '\nEmail: ' + data.email + '\nRole :' + data.role + '\nGender:' + data.gender + '\nAge:' + data.age + '\nDate of Birth:' + data.dob)
                    navigateTo('/login')
                }
            }
            catch (error) {
                alert("Error occured! Please try again")
            }
        },
        logout() {
            if (confirm("Do you really want to log out ?") == true) {
                if (process.client) {
                    localStorage.setItem('token', "")
                    localStorage.setItem("loggedIn", false)
                }
                navigateTo('/login')
                this.login = "false"
                setTimeout(() => {
                    alert("Logged Out Successfully")
                }, 500)

            }
        }
    }
})