import "./NavLinks.css"

interface NavLinksProps {
    children?: React.ReactNode;
}
/**
 * Navigation container that wraps any custom nav elements.
 * Use this to group top-level site links or sections.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Nav items.
 *
 * @example
 * <NavLinks>
 *   <a href="/news">Новости</a>
 *   <a href="/maps">Карты</a>
 * </NavLinks>
 */
export const NavLinks = ({ children }: NavLinksProps) => {
    return (
        <nav className="navLinks">
            {children}
        </nav>
    )
}