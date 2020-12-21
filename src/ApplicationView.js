import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./Home/Home";
//import { HomeProvider } from "./Home/HomeDataProvider";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/home">
                <HomePage />
            </Route>
        </>
    )
}