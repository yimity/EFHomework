
import {DicItem,GetItemValue} from '../dictionary';

export interface SelectBoxProps {
    items: DicItem[];
    value: number;
    onSelChanged: (value: number) => void;
}

function SelectBox(props:SelectBoxProps)
{
    const {items,value,onSelChanged}=props;

    const getValue = (key:number):string=>{
        return GetItemValue(items,value);
    };

    return (
        <select className="form-select" aria-label="Default select example">
            {/* <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}
            {
                items.map(item=><option key={item.key} selected={value===item.key} value={item.key} onClick={()=>onSelChanged(item.key)}>{item.value}</option>)
            }
        </select>
    );  
}

export default SelectBox;