const deepCloneObject = (src) => {
    const cloned = {};
    // 
    // 1. 모든 키를 순회한다.
    // 2. 키의 값 타입을 체크한다.
    //    2.1 privitive type일 경우 : 값을 복사 하고 다음 키로 넘어간다.
    //    2.2 reference type일 경우 : 주소값이 가르키는 객체의 키들을 대상으로 '1'의 과정을 진행한다.
    const keys = Object.keys(src);
    for(let k of keys) {
        if(isRefType(src[k])) {
            cloned[k] = deepCloneObject(src[k]);
        } else {
            cloned[k] = src[k]
        }
    }

    return cloned;
}

const isRefType = data => data !== null && typeof data === 'object';

export {
    deepCloneObject
};