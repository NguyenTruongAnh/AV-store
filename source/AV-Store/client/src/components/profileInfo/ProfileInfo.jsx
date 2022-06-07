import './profileInfo.css'
import './profileInfoResponsive.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { update } from '../../redux/apiCalls'
export default function ProfileInfo() {
    const user = useSelector(state => state.user.currentUser.others)
    const {isFetching, error, success} = useSelector(state => state.user)
    const [avatar, setAvatar] = useState(user.avatar)
    const [file, setFile] = useState(null)
    const [name, setName] = useState(user.name)
    const [phone, setPhone] = useState(user.phone)
    const [birthday, setBirthday] = useState(user.birthday)
    const [gender, setGender] = useState(user.gender)
    const [messError, setMessError] = useState("")
    const [messSuccess, setMessSuccess] = useState("")
    const dispatch = useDispatch();
    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
            setAvatar(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleUpdate = () => {
        if(file && name && phone && birthday && gender) {
            const info = {
                avatar: file,
                name,
                phone,
                birthday,
                gender
            }
            setMessError(false)
            setMessSuccess(false)
            update(dispatch, info, user._id)
        } else {
            setMessError('Vui lòng nhập đầy đủ thông tin và chọn hình ảnh đại diện!')
        }
    }

    useEffect(() => {
        if(success) {
            setMessSuccess(success)
            setMessError(false)
            setTimeout(() => {
                setMessSuccess(false)
            }, 2000)
        }
    }, [success])

    useEffect(() => {
        if(error) {
            setMessError(error)
            setMessSuccess(false)
        }
    }, [error])

    return (
        <div className="profile-info">
            <h2 className="profile-info__title">Thông tin tài khoản</h2>
            <div className="profile-info__avatar">
                <img
                    className="profile-info__avatar-view"
                    src={avatar}
                    alt="Avatar"
                />
                <label htmlFor="profile-info__avatar-file" className="profile-info__avatar-icon">
                    <i className="fas fa-camera"></i>
                </label>
                <input
                    type="file"
                    id="profile-info__avatar-file"
                    className="profile-info__avatar-file"
                    accept="image/*"
                    onChange={handleChangeImage}
                />
            </div>
            <ul className="profile-info__list">
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Họ và tên</span>
                    <input type="text" className="profile-info__item-input" 
                        placeholder="Họ và tên của bạn" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Email</span>
                    <input type="email" className="profile-info__item-input" 
                            placeholder="Email của bạn" disabled 
                            value={user.email} 
                    />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Số điện thoại</span>
                    <input type="number" className="profile-info__item-input" 
                            placeholder="Số điện thoại của bạn" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                    />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Ngày sinh</span>
                    <input type="date" className="profile-info__item-input" 
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                    />
                </li>
                <li className="profile-info__item">
                    <span className="profile-info__item-title">Giới tính</span>
                    <div className="profile-info__item-radio">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" 
                                    value="Nam" checked={gender === "Nam"}
                                    onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" 
                                    value="Nữ" checked={gender === "Nữ"}
                                    onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                        </div>
                    </div>
                </li>
            </ul>
            
            { messSuccess && <div className="text-success text-center mb-2">{messSuccess}</div> }
            { messError && <div className="text-danger text-center mb-2">{messError}</div> }
            <button className="profile-info__update btn btn-success" 
                onClick={handleUpdate} disabled={isFetching}>
                    Cập nhật tài khoản
            </button>
        </div>
    )
}
