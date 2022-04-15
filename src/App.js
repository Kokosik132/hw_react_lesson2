import {Route, Routes, Navigate} from "react-router-dom"
import {MeinLayot} from "./Layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";

function App() {
    return (
       <Routes>
           <Route path={'/'} element={<MeinLayot/>}>
               <Route index element={<Navigate to={'/home'}/>}/>
               <Route path={'home'} element={<HomePage/>}/>
               <Route path={'users'} element={<UsersPage/>}>
                   <Route path={':id'} element={<SingleUserPage/>}>
                       <Route path={'posts'} element={<PostsPage/>}/>
                   </Route>
               </Route>
               <Route path={'posts'} element={<PostsPage/>}>
                   <Route path={':id'} element={<SinglePostPage/>}/>
               </Route>
               <Route path={'about'} element={<AboutPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
       </Routes>
    );
}

export default App;
