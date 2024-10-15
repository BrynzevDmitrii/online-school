// @flow
import * as React from 'react';
import {Search} from "@/components/share/search";
import {ListFilters} from "@/components/share/listFilters";
export const LeftFilter = () => {
    return (
        <div className={'left-filter'}>
            <Search />
            <ListFilters list={[{item: "1"}, {item: "2"}, {item: "3"}]} />
        </div>
    );
};