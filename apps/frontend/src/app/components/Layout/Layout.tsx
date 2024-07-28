import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Menu } from "./Menu"

type Props = {}

export const Layout = (props: Props) => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}

