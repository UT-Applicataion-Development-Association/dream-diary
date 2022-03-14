import * as api from "apis/dreams"

async function getDreams(component, pagination=1) {
    try {
        const entity = await api.getDreamsAPI({pagination})

        component.setState({dreams: entity.dreams})
        console.log(entity)
        return entity.dreams

    } catch (err) {
        console.error(err)
    }
}

export {
    getDreams
}