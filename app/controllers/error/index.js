const handleError = (res, err) => {
    if (err instanceof ResourceNotFoundException) {
        res.status(404).send(response.NOT_FOUND)
    } else if (err instanceof AuthenticationException) {
        res.status(401).send(response.FORBIDDEN)
    } else {
        res.status(500).send(new Response({ msg: err.message, status: 500 }))
    }
}
