import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import qZoon1 from '../../../assets/qZone1.png'
import qZoon2 from '../../../assets/qZone2.png'
import qZoon3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="">Login Without</h2>
                <button className="btn text-2xl w-full">
                <FcGoogle />
                Google
                </button>
                
                <button className="btn text-2xl w-full">
                <RxGithubLogo />
                GitHub
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                <FaFacebook className="mr-3"/>
                <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border-x ">
                <FaTwitter className="mr-3"/>
                <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
                <FaInstagram className="mr-3"/>
                <span>Instagram</span>
                </a>
            </div>
            {/* q  zone*/}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="">Q Zone</h2>
                <img src={qZoon1}/>
                <img src={qZoon2}/>
                <img src={qZoon3}/>
            </div>
        </div>
    );
};

export default RightSideNav;