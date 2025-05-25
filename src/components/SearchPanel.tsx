import "./SearchPanel.css";
/**
 * A compact search bar component with logo, input, and submit button.
 * Typically used in a header or search interface.
 *
 * @component
 *
 * @example
 * <SearchBar />
 */
export const SearchPanel = () => {

    return (
        <> 
        <form className="searchBar">
            <img src="/src/assets/react.svg" alt="company logo" />
            <input type="text" placeholder=""/>
            <button type="submit">Найти</button>
        </form>
        <div className="searchPanelComment">Найдется все</div>
        </>
    )
};
