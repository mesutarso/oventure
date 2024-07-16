import Logo from "../shared/logo"

function Header() {
    return (
        <header className="py-3 absolute l z-20 container">
            <div className="container">
                <Logo />
            </div>
        </header>
    )
}

export default Header