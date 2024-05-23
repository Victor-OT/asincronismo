import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(urlApi) {
    const resolve = await fetch(urlApi)
    const data = await resolve.json()
    return data
}

async function callData(urlApi) {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`)
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`)

        console.log(products)
        console.log(product.title)
        console.log(category.name)

    } catch (error) {
        console.error(error)
    }
}

callData(API)