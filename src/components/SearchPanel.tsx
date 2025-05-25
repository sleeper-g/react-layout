import "./SearchPanel.css";
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
