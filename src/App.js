import {useState} from "react";

import {Posts, UserInfo, Users} from "./components";


function App() {
    const [user, setUser] = useState(null);
    const [userIdForPosts, setUserIdForPosts] = useState(null);

    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts}/>}
            </div>
            {userIdForPosts && <Posts userId={userIdForPosts}/>}
        </div>
    );
}

export default App;
