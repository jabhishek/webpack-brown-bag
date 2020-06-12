import {Page} from "../components/Page";
import React, {useEffect, useState} from "react";
import {get} from 'lodash';
import {useParams} from "react-router";
import {MOCK_STORES} from "../MOCK_DATA";

const storeData = {
    content: {
        code: '0567',
        name: 'London Colney'
    }
}

const useFetchStoreData = (code) => {
    const [store, setStore] = useState(null);

    useEffect(() => {
        const storeData = MOCK_STORES.find((store) => {
            return store.code === code;
        });
        setTimeout(() => {
            setStore(storeData);
        }, 1000);
    }, [code]);

    return {store};
}

export const StorePage = () => {
    const {code} = useParams();
    const {store} = useFetchStoreData(code);

    console.log('code', code);

    return <Page>
        <h1>Store Details</h1>
        {
            store ?
                <p>Showing details for <b>{get(store, 'name')}</b></p> :
                <h3>Fetching Store Data...</h3>
        }
    </Page>
};
