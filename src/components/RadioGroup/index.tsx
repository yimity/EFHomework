import { Fragment } from 'react';
import {DicItem,GetItemValue} from '../dictionary';

export interface RadioGroupProps {
    items: DicItem[];
    value: number;
    groupName:string;
    OnSelChanged: (value: number) => void;
}

function RadioGroup(props:RadioGroupProps)
{
    const {items,value,groupName,OnSelChanged}=props;

    const getValue = (key:number):string=>{
        return GetItemValue(items,value);
    };

    return (
        <Fragment>
            {
                items.map(
                    item =>
                        <div key={item.key} className="form-check form-check-inline" onClick={()=>OnSelChanged(item.key)}>
                            <input className="form-check-input" type="radio" name={groupName} id={`${groupName}-${item.key}`} value={item.key} checked={value===item.key}/>
                            <label className="form-check-label" htmlFor={`${groupName}-${item.key}`} >{item.value}</label>
                        </div>
                )
            }
            {/* <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
            </div> */}
        </Fragment>        
    );  
}

export default RadioGroup;