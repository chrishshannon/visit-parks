import states from '../data/states.json';
import { days } from '../data/constants';

export function stateFullNameFromAbbr(abbr) {
    return states[abbr];
}

export function dayValuesToObject(dayVals){
    return days.map((item) => {
        return { label : item, value : dayVals[item.toLowerCase()] }
    }, days);
}