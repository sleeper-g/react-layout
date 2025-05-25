import "./Services.css"
import { ServiceWidget } from "./ServiceWidget";

/**
 * Renders a section of multiple service widgets like weather, maps, and news.
 * Each widget is a reusable `ServiceWidget` component with its own content.
 *
 * Used on home pages or dashboards to display key information blocks.
 *
 * @component
 *
 * @example
 * <Services />
 * // Will render:
 * // - "Погода" widget with current weather
 * // - "Карта Германии" widget with an image
 * // - "Новости" widget with a list of news
 */
export const Services = () => {
    return (
        <div className="servicesContainer">
            <ServiceWidget title="Погода">
                <p>Сейчас +18°, ясно, ветер 3 м/с</p>
            </ServiceWidget>

            <ServiceWidget title="Карта Германии">
                <img src="/map-germany.png" alt="Карта Германии" />
            </ServiceWidget>

            <ServiceWidget title="Новости">
                <ul>
                    <li>Новости 1</li>
                    <li>Новости 2</li>
                </ul>
            </ServiceWidget>

        </div>
    )
};