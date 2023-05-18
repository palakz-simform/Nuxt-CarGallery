import { useCarStore } from "../stores/car"
const carStore = useCarStore()
export default defineNuxtRouteMiddleware((to, from) => {
    console.log("here")
    const car_data = carStore.cars_info.find(data => data.id == to.params.id)
    if (!car_data) {
        console.log("no data")
        // throw createError({
        //     statusCode: 404,
        //     statusMessage: `Car Not Found with id ${to.params.id}`,
        //     fatal: true
        // })
    }
})