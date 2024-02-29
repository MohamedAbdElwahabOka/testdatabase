const { default: axiosClient } = require('./axiosClient');



const getLatestProducts = () => axiosClient.get('/imgs?populate=*')
// const getProductById = (id) => axiosClient.get(`/imgs/${id}?populate=*`)


// const getProductsByCategory = (category) => axiosClient.get(`/imgs?filters[category][$eq]=${category}&populate=*`)
export default {
    getLatestProducts,


}