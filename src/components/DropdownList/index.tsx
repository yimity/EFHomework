
import {DicItem,GetItemValue} from '../dictionary';

export interface DropdownListProps {
    items: DicItem[];
    value: number;
    onSelChanged: (value: number) => void;
}

function DropdownList(props:DropdownListProps)
{
    const {items,value,onSelChanged}=props;

    const getValue = (key:number):string=>{
        return GetItemValue(items,value);
    };

    return (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {getValue(value)}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            {items.map(item => <li key={item.key} onClick={() => onSelChanged(item.key)}>
                <a className="dropdown-item" href="#">{item.value}</a>
            </li>)}
        </ul>
    </div>
    );  
}

export default DropdownList;