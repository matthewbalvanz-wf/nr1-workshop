import React from 'react';
import { Card, LineChart, PlatformStateContext, NerdletStateContext } from 'nr1';

const ACCOUNT_ID = 2361833;
const QUERY = "SELECT count(*) FROM Transaction SINCE 1 DAY AGO TIMESERIES AUTO";

export default class MyNerdlet extends React.Component {

    render() {
        return <Card>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
            <LineChart accountId={ACCOUNT_ID} query={QUERY}/>
        </Card>;
    }
}
