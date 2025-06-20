import { useState } from 'react';

// react icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";


function Header() {
    const [liked, setLiked] = useState(false);

    const toggleHeart = () => {
        setLiked(!liked);
    };

    return <div className="card-header">
        <div className="back-link">
            <FaArrowLeftLong size={18} color="gray" /> <a href="#">Go back</a>
        </div>

        <div className="heart">
            {liked ? (
                <FaHeart className="heart-icon" size={20} color="red" onClick={toggleHeart} />
            ) : (
                <FaRegHeart className="heart-icon" size={20} onClick={toggleHeart} />
            )}
        </div>
    </div>
}

export default Header