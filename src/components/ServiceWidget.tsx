import "./ServiceWidget.css"
interface ServiceWidgetProps {
    title: string,
    children?: React.ReactNode;
}
/**
 * A reusable widget block with a title and arbitrary content.
 * Commonly used for cards like "Погода", "Карта Германии", etc.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Title of the widget.
 * @param {React.ReactNode} props.children - Inner content of the widget.
 *
 * @example
 * <ServiceWidget title="Погода">
 *   <p>+18°, ясно</p>
 * </ServiceWidget>
 */
export const ServiceWidget = ( { title, children }: ServiceWidgetProps ) => {
    return (
        <>
            <section className="serviceWidget">
                <h3 className="serviceWidget__title">{title}</h3>
                <div className="serviceWidget__content">{children}</div>
            </section>
        </>
    )
};