const getVariablesAndNonVariableNames = (urlFormat) =>  {
    const urlSections = urlFormat.split('/');

    
    const variableNames = [];
    const nonVariableNames = [];

    urlSections.forEach(element => {
        if (element.substring(0, 1) === ':')
        {
            variableNames.push(element.substring(1, element.length));
        }
        else
        {
            nonVariableNames.push(element);
         }
    });

    return { variableNames, nonVariableNames };
} 
const getParametersObject = (urlInstance) => { 
    const parametersString = urlInstance.split('?')[1];
    const paremetersSections = parametersString.split('&');
    const parametersObject = {};

    paremetersSections.forEach(element => {
        const [key, value] = element.split('=');
        parametersObject[key] = isNaN(value) ? value : Number(value);
    })

    return parametersObject;
}
 
const getVariablesObject = (urlFormat, urlInstance) => {
    const { variableNames, nonVariableNames } = getVariablesAndNonVariableNames(urlFormat)
    const variablesObject = {}

    const variablesString = urlInstance.split('?')[0];
    const variablesAndNonVariables = variablesString.split('/');

    const variablesValues = variablesAndNonVariables.filter(element => !nonVariableNames.includes(element));
    
    for (let i = 0; i < variableNames.length; i++)
    {
        variablesObject[variableNames[i]] = isNaN(variablesValues[i]) ? variablesValues[i] : Number(variablesValues[i]);
    }

    return variablesObject

}

export const getUrlObject = (urlFormat, urlInstance) => { 
    const variablesObject = getVariablesObject(urlFormat, urlInstance);
    const parametersObject = getParametersObject(urlInstance);

    return { ...variablesObject, ...parametersObject };
}