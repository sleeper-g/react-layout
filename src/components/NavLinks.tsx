import "./NavLinks.css"

interface NavLinksProps {
    children?: React.ReactNode;
}
export const NavLinks = ({ children }: NavLinksProps) => {
    return (
        <nav className="navLinks">
            {children}
        </nav>
    )
}