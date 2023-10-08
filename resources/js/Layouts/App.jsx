import React from "react";
import { Head } from "@inertiajs/react";
const App = ({ children, title }) => {
    return (
        <div className="min-h-screen w-full lg:w-96 mx-auto bg-gray-100">
            <Head title={title} />
            <div className="w-full">{children}</div>
        </div>
    );
};

export default App;
