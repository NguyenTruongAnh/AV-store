import './profile.css'
import './profileResponsive.css'

import ProfileInfo from '../../components/profileInfo/ProfileInfo'
import ProfileOrder from '../../components/profileOrder/ProfileOrder'
import ProfilePassword from '../../components/profilePassword/ProfilePassword'
import ProfileSidebar from '../../components/profileSidebar/ProfileSidebar'

import { useState } from 'react'

export default function Profile() {
    const [infoView, setInfoView] = useState(0)

    return (
        <div className="profile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4 offset-xl-1 col-xl-3">
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
