export const cutString = (str:String, len:number):String  => {
    if (str.length <= len) {
        return str;
    } else {
        return str.slice(0, len) + '...';
    }
}