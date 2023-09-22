import NavBar from "../components/NavBar/NavBar"

export const OuterLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}