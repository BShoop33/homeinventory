import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./App";
import { AddItem } from "./AddItem";
import { ItemProvider } from "./AppDataProvider"
//import { EditItem } from "./EditItem"
import { ItemCard } from "./ItemCard"

import { TestPage } from "./Test"

export default function ApplicationViews() {
    return (
        <>
            <ItemProvider>
                <Route exact path="/">
                    <TestPage />
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

            <ItemProvider>
                <Route exact path="/edititem/:itemId(\d+)">
                    <AddItem />
                </Route>
            </ItemProvider>

            {/* <ItemProvider>
                <Route exact path="/edititem/:itemId(\d+)">
                    <ItemCard />
                </Route>
            </ItemProvider> */}


        </>
    );
}