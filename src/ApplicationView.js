import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./App";
import { AddItem } from "./AddItem";
import { ItemProvider } from "./AppDataProvider"
import { ItemCard } from "./ItemCard"

export default function ApplicationViews() {
    return (
        <>
            <ItemProvider>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </ItemProvider>

            {/* <ItemProvider>
                <Route exact path="/">
                    <ItemCard />
                </Route>
            </ItemProvider> */}

            <ItemProvider>
                <Route exact path="/additem">
                    <AddItem />
                </Route>
            </ItemProvider>
        </>
    );
}