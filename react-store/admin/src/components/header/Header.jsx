import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-logo">
                    <div className="header-logo__img"></div>
                    <span className="d-none d-md-inline-block">Anh Vũ Store Admin</span>
                </div>
            </div>
            <div className="header-right">
                <span className="header-name">Xin chào, Admin</span>
                <img className="header-avatar" src="https://st.quantrimang.com/photos/image/2021/09/23/AVT-Chibi-10.jpg" alt="Avatar" />
            </div>
        </div>
    )
}
