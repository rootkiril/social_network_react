import React from "react";
import s from "./Profile.module.css";
import LeftBar from "./LeftBar/LeftBar"
import MainSection from "./MainSection/MainSection";


const Profile = () => {
    return (
        <div className={s.wrapper}>
            {/* eslint-disable-next-line react/style-prop-object */}
            <section className={s.coverSec} style={{backgroundImage: "url('/img/background.jpg')"}}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            </section>
            <main>
                <div className={s.mainSection}>
                    <div className="container">
                        <div className={s.mainSectionData}>
                            <div className="row">
                                <LeftBar/>
                                <MainSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile