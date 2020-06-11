import React from 'react';
import {PageHeader} from "./PageHeader";

export const Page = ({ children }) => {
    return <div>
        <PageHeader />
        { children }
    </div>
}
