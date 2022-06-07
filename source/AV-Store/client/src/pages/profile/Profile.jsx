import './profile.css'
import './profileResponsive.css'

import ProfileInfo from '../../components/profileInfo/ProfileInfo'
import ProfileOrder from '../../components/profileOrder/ProfileOrder'
import ProfilePassword from '../../components/profilePassword/ProfilePassword'
import ProfileSidebar from '../../components/profileSidebar/ProfileSidebar'

import { useState, useEffect } from 'react'

export default function Profile() {
    const [infoView, setInfoView] = useState(0)
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className="profile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4">
                        <ProfileSidebar 
                            infoView = {infoView}
                            setInfoView = {setInfoView}
                        />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-7">
                        {
                            infoView === 0 && (
                                <ProfileInfo />
                            )
                        }
                        {
                            infoView === 1 && (
                                <ProfileOrder />
                            )
                        }
                        {
                            infoView === 2 && (
                                <ProfilePassword />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
