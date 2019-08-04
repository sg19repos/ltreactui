import React from "react";
import { Route, Switch } from "react-router-dom";

// import Home from './Home/homeComponent';
// import Home from "./Home/Containers/homeContainer";
import Home from "../home";
import UserSearchField from '../search'
import TrackList from '../common/tracksList'
// import SearchContainer from "./SearchUser/Containers/searchUserContainer";

// your components
// const Home = () => <span>Home</span>;

const List = () => <span>List</span>;
// const Search = () => <span>Search</span>;
const Account = () => <span>Account</span>;
const MissingPage = () => <span>404</span>;

const routes = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/trackList" component={TrackList} />
        <Route path="/search" component={UserSearchField} />
        <Route path="/account" component={Account} />
        <Route component={MissingPage} />
    </Switch>
);

export default routes;
