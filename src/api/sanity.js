import axios from "axios"

/**
 * Config
 */
import { sanity } from "@/services/config"

export const fetchArticles = async () => {
    try {
        const {
            data: { result: articles },
        } = await axios.get(
            `https://${sanity.id}.api.sanity.io/v1/data/query/production?query=*[_type == 'article'] { ..., section-> }`,
        )

        return articles
    } catch (error) {
        console.error(error)
        return {}
    }
}

export const fetchSections = async () => {
    try {
        const {
            data: { result: sections },
        } = await axios.get(
            `https://${sanity.id}.api.sanity.io/v1/data/query/production?query=*[_type == 'section']`,
        )

        return sections
    } catch (error) {
        console.error(error)
        return {}
    }
}
