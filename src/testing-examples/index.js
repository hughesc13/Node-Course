export const getPropertyWithDefault = (propertyName, defaultValue, obj) => {
    return obj[propertyName] || 'N/A';//if obj[propertyName] doesnt exist, it returns 'n/a'
}

export const someOtherFunction = () => {
    return 3;
}