import React from "react";
import Avatar from "./Avatar";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-20 px-2 bg-gelap text-stabilo">
            <h1 className="text-2xl font-semibold">Kampung Andir Digital</h1>
            <Avatar />
        </div>
    );
};

export default Header;
