module.exports = function check(str, bracketsConfig, arr=[]) {
    let reg;
    let array = [];
    
    label: for(let i = 0; i < bracketsConfig.length; i++){
    if(!str.match(/^-{0,1}\d+$/)){
        reg = new RegExp(`\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}`,'g');
    }else{
        reg = new RegExp(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`,'g');
    }
        array = str.match(reg);
        if(array!==null){
            str = str.replace(reg,'');
            arr.push(str);
            check(str, bracketsConfig,arr);
            break label;
        }
    }
    return arr[arr.length-1]==='';
}
