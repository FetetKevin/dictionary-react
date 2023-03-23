export default function Header(props) {
    return (
        <header>
            <i className="fa fa-book logo"></i>

            <select name="fonts" id="fonts" onChange={props.chooseFont}>
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans-Serif</option>
                <option value="monospace">Monospace</option>
            </select>

            <div className="btn">
                <div className={props.theme ? "slider dark" : "slider"} onClick={props.toggle}>
                    <div className="circle"></div>
                </div>
            </div>

            {props.theme
                ? <i className="fa fa-moon-o icon"></i>
                : <i className="fa fa-sun-o icon"></i>}
        </header>
    );
}
