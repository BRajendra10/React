// User image path
import userImage from "../assets/User-1.png"

function User(){
    return(
        <div className="rounded-full bg-slate-900 w-[90px] h-[90px] absolute top-[88px] left-8 border-4 border-violet-50">
          <img src={userImage} className="w-full rounded-full" alt="user-image" />
        </div>
    )
}

export default User;