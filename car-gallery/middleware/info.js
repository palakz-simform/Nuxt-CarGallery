import { useCarStore } from "../stores/car"
const carStore = useCarStore()
export default defineNuxtRouteMiddleware((to, from) => {
    const car_data = carStore.cars_info.find(data => data.id == to.params.id)
    if (!car_data) {
        return navigateTo("/error")
    }
})