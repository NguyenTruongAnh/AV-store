import './slider.css'
import './sliderResponsive.css'

export default function Slider() {
    return (
        <div className="slider">
            <div className="slider-titles">
                <span className="slider-title slider-title--lg">Anh Vũ Store</span>
                <span className="slider-title slider-title--sm">Chất lượng thay lời nói</span>
            </div>
            <img 
                className="slider-img" 
                // src="https://previews.123rf.com/images/fiphoto/fiphoto1312/fiphoto131200684/24280552-int%C3%A9rieur-de-magasin-de-v%C3%AAtements-europ%C3%A9en-dans-un-centre-commercial-moderne.jpg" 
                src="/images/home/home1.jpg"
                alt="Img" 
            />
        </div>
    )
}
