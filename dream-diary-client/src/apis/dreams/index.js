import * as http from "utils/http"

const STATUS_OK = 200

async function getDreamsAPI(query = {}) {
    try {
        const { response, body } = await http.get("/api/dreams", query)
        // The server did not return proper list of dreams
        if (body.status !== STATUS_OK) {
            throw new Error(body.msg)
        }
        
        return body.entity
    } catch (err) {
        // Error happens to fetch or json function
        console.error(err)
        throw new Error("Server error")
    }
}


export {
    getDreamsAPI
}