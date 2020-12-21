import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./App";
import { AddItem } from "./AddItem";

export default function ApplicationViews() {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/additem">
                <AddItem />
            </Route>
        </>
    );
}