// React icons
import { FaBeer } from 'react-icons/fa';
import { IoMdLink } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

function Body() {
    return (
        <div className=" w-full relative top-[77px] px-3">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">Kartik Khorwal</h3>
                    <h5 className="text-zinc-600">@Kartikk</h5>
                </div>

                <button className="bg-blue-500 text-zinc-50 py-2 px-7 rounded-full">Follow</button>
            </div>

            <p className="text-zinc-600 mt-3">Building Websites and Webapps with seamless User Experience Acroos Devices.</p>

            <div className="flex justify-start items-center gap-5 mt-3">
                <span className="flex items-center gap-2">
                    <div className="text-lg font-semibold">238</div>
                    <div className="text-lg text-zinc-600">Following</div>
                </span>

                <span className="flex items-center gap-2">
                    <div className="text-lg font-semibold">84</div>
                    <div className="text-lg text-zinc-600">Follwers</div>
                </span>
            </div>

            <div className="mt-2">
                <a href="#" className="flex justify-start items-center gap-2 text-blue-500 block">
                    <IoMdLink />
                    <span>kartikkhorwal.com</span>
                </a>
                <a href="#" className="flex justify-start items-center gap-2 text-zinc-700">
                    <IoLocationOutline />
                    <span>India</span>
                </a>
            </div>
        </div>
    )
}


export default Body