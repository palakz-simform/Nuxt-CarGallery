export default defineNuxtRouteMiddleware(async (to, from) => {
    const cars = await useFetchCars()
    const carDetailData = cars.value.data.find(data => data.id == to.params.id)
    if (!carDetailData) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car Not Found with id ${to.params.id}`,
        })
    }
})