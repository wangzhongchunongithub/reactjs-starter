/**
 * Created by wangzhongchun on 7/27/2016.
 */
"use strict";
const utilities = {
    trimString:(str)=>{
        return str.split(' ').join('');
    },
    insertItemsBefore:(source,items)=>{
        return typeof source === 'array' && typeof items === 'array' ? items.contact(source) : [];
    },
    mergeByProp:(source,target,key)=>{
        if(typeof source !== 'array' || typeof target !== 'array'){
            throw new Error('appUtility->function mergeByProp:type of two params should be array.');
        }
        if(typeof key !== 'string'){
            throw new Error('appUtility->function mergeByProp::type of key should be string.');
        }
        let sourceLength = source.length,
            targetLength = target.length;

        if (sourceLength > 0 && targetLength > 0) {
            let newItems = [];
            source.forEach((sourceItem)=> {
                let foundInTarget = false;
                target.forEach((targetItem,index)=>{
                    if (target[index][key] === sourceItem[key]) {
                        foundInTarget = true;
                        return false;
                    }
                });
                if (!foundInTarget) {
                    newItems.push(source);
                }
            });
            return target.concat(newItems);
        } else if (targetLength === 0 && sourceLength > 0) {
            return source;
        } else {
            return target;
        }
    },
    someTest:()=>{
        let a = 10,
            b = 12;
        {
            let a = 11;
        }
        console.log(a);
        console.log(b);
    }
};
export default utilities;
