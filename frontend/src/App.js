/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddReview from "./components/AddReview";
import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import Login from "./components/Login";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);

    async function login(user = null) {
        // default user to null
        setUser(user);
    }

    async function logout() {
        setUser(null);
    }

    return (
        <div className='App'>
            <Navbar bg='light' expand='lg'>
                <Navbar.Brand>Movie Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/movies'>
                            <Nav.Link>Movies</Nav.Link>
                        </LinkContainer>
                        {true ? (
                            <LinkContainer to='/login' onClick={logout}>
                                <Nav.Link>Logout User</Nav.Link>
                            </LinkContainer>
                        ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route
                    exact
                    path={["/", "/movies"]}
                    component={MoviesList}
                ></Route>
                <Route
                    path='/movies/:id/review'
                    render={props => <AddReview {...props} user={user} />}
                ></Route>
                <Route
                    path='/movies/:id/'
                    render={props => <Movie {...props} user={user} />}
                ></Route>
                <Route
                    path='/login'
                    render={props => <Login {...props} login={login} />}
                ></Route>
            </Switch>
        </div>
    );
}
export default App;
