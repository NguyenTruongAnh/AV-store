import './header.css'
import { useSelector} from 'react-redux'
export default function Header() {
    const { username, avatar } = useSelector((state) => state.user.currentUser.others);
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-logo">
                    <div className="header-logo__img"></div>
                    <span className="d-none d-md-inline-block">Anh Vũ Store Admin</span>
                </div>
            </div>
            <div className="header-right">
                <span className="header-name">Xin chào, {username}</span>
                <img className="header-avatar" src={avatar} alt="Avatar" />
            </div>
        </div>
    )
}
