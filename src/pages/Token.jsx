import { useParams } from "react-router-dom"

export const Token = () => {
    const { address } = useParams()
    return (
        <main>
            Hello { address }
        </main>
    )
}