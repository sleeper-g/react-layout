import "./ServiceWidget.css"
interface ServiceWidgetProps {
    title: string,
    children?: React.ReactNode;
}

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