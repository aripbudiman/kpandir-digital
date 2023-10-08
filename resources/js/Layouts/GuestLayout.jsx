import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full lg:w-96 lg:px-5 mx-auto flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <Icon
                        className="w-20 h-20 fill-current text-kuning"
                        icon="game-icons:village"
                    />
                    <h1 className="text-3xl font-semibold text-hijau">
                        Kampung Andir
                    </h1>
                </Link>
            </div>

            <div className="w-full max-w-md mt-6 px-6 py-4 bg-hijau shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
