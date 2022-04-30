import { useEffect, useState } from "react"

const useProduct = id => {
    const [laptop, setLaptop] = useState({})
    useEffect(() => {
        const url = `http://localhost:3000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptop(data))
    }, [id])

    return [laptop, setLaptop]
}
export default useProduct