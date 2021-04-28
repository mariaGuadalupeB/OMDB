import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import HeaderContainer from "./HeaderContainer"
import SingleView from "../views/movies/SingleView"
import AllTypeList from "../views/movies/AllTypeList"
import NewUser from "../views/users/NewUser";
import Footer from "../views/Footer";
import Error from "../views/Error";
import UserLogin from "../views/users/UserLogin";
import BodyContainer from "./BodyContainer"
import User from "../views/users/User"


const Main = () => {

  const history = useHistory();
  
  React.useEffect (() => {
      history.push("/body");
  }, [])
  
  
  return (
          <div>
            <HeaderContainer />
            
            <section className="section is-small">
              <Switch>
                <Route path="/body" component={BodyContainer}/>

                <Route path="/login" component={UserLogin} />
                <Route path="/register" component={NewUser} />
                <Route path="/user" component={User} />
                
                <Route path="/movie" component={SingleView} />
                
                <Route path="/general" component={AllTypeList} />
                
                <Route path="/error" component={Error} />

                <Redirect to="/body" />
              </Switch>
            </section>
            
            <Footer/>
          </div>
    )
};

export default Main;