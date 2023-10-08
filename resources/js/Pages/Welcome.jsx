import { Link, Head } from "@inertiajs/react";
import App from "@/Layouts/App";
import Header from "@/Daisyui/Header";
export default function Welcome({ auth }) {
    return (
        <App title="Welcome">
            <Header />
            <div className="flex w-full bg-white">
                <div className="flex h-20 flex-col items-center justify-center w-1/2 bg-white">
                    <h1 className="font-semibold text-gray-400">Saldo Kas</h1>
                    <p className="text-gelap font-medium">Rp 5.000.000</p>
                </div>
                <div className="divider divider-horizontal mx-0 my-2"></div>
                <div className="flex h-20 flex-col w-1/2 bg-white justify-center items-center">
                    <h1 className="font-semibold text-gray-400">Total Warga</h1>
                    <p className="text-gelap font-medium">1000</p>
                </div>
            </div>
            <div>
                <h1>
                    Wilujeung Sumping{" "}
                    <span className="text-hijau font-semibold">
                        {auth.user.name}
                    </span>
                </h1>
            </div>
        </App>
    );
}
