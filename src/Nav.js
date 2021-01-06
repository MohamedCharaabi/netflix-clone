import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (


        <div className={`nav ${show && "nav_black"}`}>

            <img
                className="nav_logo"
                src="https://img.cinemablend.com/filter:scale/quill/9/a/9/6/6/b/9a966bc199e31e17df14a7c9bdbc45f557f8fd6a.jpg?mw=600"
                alt="netflix logo"
            />

            <img
                className="nav_avatar"
                src="https://banner2.cleanpng.com/20180615/rtc/kisspng-avatar-user-profile-male-logo-profile-icon-5b238cb002ed52.870627731529056432012.jpg"
                alt="avatar logo"
            />

        </div>


    );
}

export default Nav;