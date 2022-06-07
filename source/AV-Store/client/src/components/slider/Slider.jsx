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
                src="http://localhost:5000/images/home1.jpg" 
                alt="Img" 
            />
        </div>
    )
}
