import { apollo } from "@/apollo"

/**
 * GQL: Queries
 */
import {
    getAllEvents,
    getTopEvents,
    getEventById,
    getEventsBySymbol,
    getEventParticipants,
} from "@/graphql/queries/events"

export const fetchAllEvents = async () => {
    try {
        const { data } = await apollo.query({
            query: getAllEvents,
        })

        return data.event
    } catch (error) {
        console.error(
            `Error during fetching all events \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}

export const fetchEventsBySymbol = async ({ id, status }) => {
    try {
        const { data } = await apollo.query({
            query: getEventsBySymbol,
            variables: { id, status },
        })

        return data.event
    } catch (error) {
        console.error(
            `Error during fetching events by id \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}

export const fetchEventById = async ({ id }) => {
    try {
        const { data } = await apollo.query({
            query: getEventById,
            variables: { id },
        })

        return data.eventByPk
    } catch (error) {
        console.error(
            `Error during fetching event by id \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}

export const fetchEventParticipants = async ({ id }) => {
    try {
        const { data } = await apollo.query({
            query: getEventParticipants,
            variables: { id },
        })

        return data.event[0].positions
    } catch (error) {
        console.error(
            `Error during fetching event participant \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}

export const fetchTopEvents = async ({ limit }) => {
    try {
        const { data } = await apollo.query({
            query: getTopEvents,
            variables: { limit },
        })

        return data.event
    } catch (error) {
        console.error(
            `Error during fetching top events \n\n ${error.name}: ${error.message}`,
        )
        return []
    }
}
