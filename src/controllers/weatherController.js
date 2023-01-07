const {endpointInfo} = require('../util/url')
const axios = require('axios')

const getAll = async (request, resp) => {
    try {
        const params = request.params.data;
       const response = await axios
                .get(`${endpointInfo(params)}`)
                .then(function (response) {
                    return response.data  
                })
            resp.json(response)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAll,

}