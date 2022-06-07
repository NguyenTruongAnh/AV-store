import './home.css'
import './homeResponsive.css'

export default function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Anh Vũ Store</h1>
            <h4 className="home-sub-title">Nhà sáng lập</h4>
            <ul className="home-founders">
                <li className="home-founder">
                    <img src="http://localhost:5000/images/founder1.jpg" alt="Avatar" />
                    <span>Nguyễn Trường Anh</span>
                </li>
                <li className="home-founder">
                    <img src="http://localhost:5000/images/founder2.jpg" alt="Avatar" />
                    <span>Nguyễn Võ Hoàng Vũ</span>
                </li>
            </ul>
        </div>
    )
}
