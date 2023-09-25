const getVariablesAndNonVariableNames = (urlFormat) => {
        
    const variableNames = [];
    const nonVariableNames = [];
    const urlSections = urlFormat.split('/');

    urlSections.forEach(element => {
        if (element.startsWith(':'))
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

const getVariablesValues = (urlInstance, nonVariableNames) => {

    const variablesString = urlInstance.split('?')[0];
    const variablesAndNonVariables = variablesString.split('/');
    const variablesValues = variablesAndNonVariables.filter(element => !nonVariableNames.includes(element));

    return variablesValues;
}
const getParametersObject = (urlInstance) => { 
    
    const parametersObject = {};
    const parametersString = urlInstance.split('?')[1];
    const paremetersSections = parametersString.split('&');
    

    paremetersSections.forEach(element => {
        const [key, value] = element.split('=');
        parametersObject[key] = isNaN(value) ? value : Number(value);
    })

    return parametersObject;
}
 
const getVariablesObject = (urlFormat, urlInstance) => {



    const variablesObject = {}
    const { variableNames, nonVariableNames } = getVariablesAndNonVariableNames(urlFormat)
    const variablesValues = getVariablesValues(urlInstance, nonVariableNames);
    
    for (let i = 0; i < variableNames.length; i++)
    {
        variablesObject[variableNames[i]] = isNaN(variablesValues[i]) ? variablesValues[i] : Number(variablesValues[i]);
    }

    return variablesObject

}

export const getUrlObject = (urlFormat, urlInstance) => { 

    if (typeof urlFormat !== 'string' || typeof urlInstance !== 'string')
    {
        throw new Error('Invalid types of arguments provided');
    }

    const variablesObject = getVariablesObject(urlFormat, urlInstance);
    const parametersObject = getParametersObject(urlInstance);

    return { ...variablesObject, ...parametersObject };
}