
import './App.css';
import Header from './components/Header/Header';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Calories from './components/Calories/Calories';
import MernayaTab from './components/MernayaTab/MernayaTab';
import PageNotFound from './components/404/404';
import Recipts from './components/Recipts/Recipts';
import ReciptsDetail from './components/Recipts/ReciptsDetail/ReciptsDetail';
import PostListProvider from './contexts/PostListContext';


function App() {
  return (

    <PostListProvider>
       <BrowserRouter>
       <Header />
       <div className="container py-5">
    <Routes>
      <Route path="/" element={<Recipts/>}/>
      <Route path ="/:id" element={<ReciptsDetail />} />
          <Route path="/calories" element={<Calories />} />
          <Route path="/mernayatab" element={<MernayaTab />} />
          <Route path="*" element={<PageNotFound />} />
    </Routes>
    
    </div>
    
  </BrowserRouter>   
 </PostListProvider>
 
  
  );
}

export default App;

