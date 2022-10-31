function Header(props) {


    return (
        <div className="header">
            <img src="https://www.squadhelp.com/img/logo.png" />
            {props.children}
        </div>
    )
}