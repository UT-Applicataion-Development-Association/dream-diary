const DreamServices = require("../../services").Dream
const { Response } = require("../../utils/response")

module.exports = {
    getDreams: async (req, res) => {
        try {
            // Get request data
            const pagination = req.query.pagination;

            // Get dreams from services
            const dreamServices = new DreamServices()
            const dreams = await dreamServices.getDreams({ pagination });

            // Return response
            res.send(new Response({ entity: { dreams } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
    },

    createDream: async (req, res) => {
        try {
            // FIXME: get user
            // Get request data
            // Method 1:
            // const { title, content, tags, image } = req.body

            // Method 2:
            const body = {
                title: req.body.title || "",
                content: req.body.content || "Does not have content",
                tags: req.body.tags || [],
                image: req.body.image || ""
            }

            // Method 3:
            // const fields = ['title', 'content', 'tags', 'image']
            // const body = {}
            // fields.forEach(field => {
            //     body[field] = req.body[field]
            // })

            // Create dreams in database
            const dreamServices = new DreamServices()
            const dream = await dreamServices.createDream(body.title, undefined, body.content, body.tags, body.image)

            // Return response
            res.send(new Response({ entity: { dream } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
    }
}