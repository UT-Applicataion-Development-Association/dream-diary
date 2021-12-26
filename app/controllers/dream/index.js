const DreamServices = require("../../services").Dream
const { Response } = require("../../utils/response")

module.exports.getDreams = async (req, res) => {
    try {
        // Get request data
        const pagination = req.query.pagination;

        // Get dreams from services
        const dreamServices = new DreamServices()
        const dreams = await dreamServices.getDreams({ pagination });

        // Return response
        res.send(new Response({ entity: dreams }))
    } catch (err) {
        console.error(err)
        res.status(500).send(new Response({ msg: err, status: 500 }));
    }
}