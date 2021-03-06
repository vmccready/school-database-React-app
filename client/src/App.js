import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import './App.css';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// import components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import Unexpected from './components/Unexpected';

// provide components with context
const HeaderWithContext = withContext(Header);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCourseWithContext = withContext(CreateCourse);
const CourseDetailWithContext = withContext(CourseDetail);
const UpdateCourseWithContext = withContext(UpdateCourse);

export default ()=> (
  <Router>
      <div id="root">
        <HeaderWithContext />
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/course/:id" component={CourseDetailWithContext} />
          <Route path="/signin" component={UserSignInWithContext} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/signout" component={UserSignOutWithContext} />
          <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
          <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
          <Route path="/error" component={Unexpected}></Route>
          <Route >    
            <div className="bounds">
              <h1>Page not found.</h1>
              <p>Sorry! That page doesn't exist.</p>
            </div>
          </Route>
        </Switch>
      </div>
  </Router>

);


