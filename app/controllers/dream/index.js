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
            const dreamer = req.params.user_id
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
            const dream = await dreamServices.createDream(body.title, dreamer, body.content, body.tags, body.image)

            // Return response
            res.send(new Response({ entity: { dream } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
    },

    deleteDream: async (req, res) => {
        // TODO:
        const id = req.params.dream_id
        try{
            const dreamServices = new DreamServices()
            const removal_result = await dreamServices.deleteDream(id)

            // return response
            res.send(new Response({ entity: { removal_result } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
        

    }, 

    getDream: async (req, res) => {
        // TODO:
        const id = req.params.dream_id
        try{
            const dreamServices = new DreamServices()
            const dream = await dreamServices.getDream(id)

            // return response
            res.send(new Response({ entity: { dream } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
    }, 

    updateDream: async (req, res) => {
        // FIXME: If a field is not provided, you will overwrite the original content
        const id = req.params.dream_id
        const updates = {
        }
        if (req.body.title !== undefined){
            updates["title"] = req.body.title
        }
        if (req.body.content !== undefined){
            updates["content"] = req.body.content
        }
        if (req.body.tags !== undefined){
            updates["tags"] = req.body.tags
        }
        if (req.body.image !== undefined){
            updates["image"] = req.body.image
        }
        console.log(updates)
        try{
            const dreamServices = new DreamServices()
            const updated_dream = await dreamServices.updateDream(id, updates)

            // return response
            res.send(new Response({ entity: { updated_dream } }))
        } catch (err) {
            console.error(err)
            res.status(500).send(new Response({ msg: err, status: 500 }));
        }
    }, 
}