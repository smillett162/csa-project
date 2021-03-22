import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import EventsPage from "./EventsPage";
import OurPeoplePage from "./OurPeoplePage";
import LoginPage from "./LoginPage";



const Page = (props) => {

    return (
        <>
            <SearchBar/>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/events/" render={(props) => ( <EventsPage {...props} isAuthed={true} /> )} exact />
                <Route path="/our_team" render={(props) => ( <OurPeoplePage {...props} isAuthed={true} /> )} exact />
                <Route path="/admin" component={LoginPage} exact />

            </Switch>
            
        </>
    );
};

export default Page;