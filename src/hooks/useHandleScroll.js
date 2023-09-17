import { useEffect, useState } from "react"
export const useHandleScroll = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < 20 ) {
                setScroll(false)
            }
            else {
                setScroll(true)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return {scroll}
}