import { useState } from 'react';

function User_card({ name, avatar, posts }) {
    const [followers, setFollowers] = useState(60880);
    const [isFollowing, setIsFollowing] = useState(false);

    function handleClick() {
        if (!isFollowing) {
            setFollowers(followers => followers + 1);
            setIsFollowing(true);
        } else {
            setFollowers(followers => followers - 1);
            setIsFollowing(false);
        }
    }

    return (
        <div className="w-full max-w-[720px] bg-white border rounded-xl shadow-xl px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-[160px] h-[160px] rounded-full overflow-hidden shadow-md">
                        <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                        <p className="text-gray-600 mt-1 text-sm">@{name}</p>
                    </div>
                </div>

                <button
                    className="border border-gray-300 px-5 py-2 text-sm rounded-md hover:bg-gray-200 hover:shadow transition font-medium"
                    onClick={handleClick} >
                    {isFollowing ? "Following" : "Follow"}
                </button>
            </div>

            <div className="flex justify-center gap-20 mt-6">
                <div className="text-center">
                    <h3 className="text-md font-semibold text-gray-700">Posts</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{posts}</p>
                </div>
                <div className="text-center">
                    <h3 className="text-md font-semibold text-gray-700">Followers</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{followers}</p>
                </div>
            </div>
        </div>
    );
}

export default User_card;
