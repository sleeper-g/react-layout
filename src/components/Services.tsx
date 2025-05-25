import "./Services.css"
import { ServiceWidget } from "./ServiceWidget";

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