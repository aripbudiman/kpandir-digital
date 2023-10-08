import React from "react";
import { usePage } from "@inertiajs/react";

const Avatar = () => {
    const user = usePage().props.auth.user;
    console.log(user);
    return (
        <div className="avatar" title={user.name}>
            <div className="w-12 rounded-full ring ring-stabilo">
                <img src={user.photo_profile} />
            </div>
        </div>
    );
};

export default Avatar;
