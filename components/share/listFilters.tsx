// @flow
import * as React from 'react';
import {Checkbox} from "@/components/ui/checkbox";

type Item = {
    item: string
}

type Props = {
   list: Item[];
};
export const ListFilters = (props: Props) => {
    return (
        <ul>

            <label>

                {props.list.map((item,index) => {return (
                    <label key={index}>
                        <Checkbox />
                        <li key={index}>{item.item}</li>
                    </label>)}
                )}
            </label>
        </ul>
    );
};