async function postData() { 
    const apiName = 'MyApiName';
    const path = '/path';
    const myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {}, // OPTIONAL
    };

    return await API.post(apiName, path, myInit);
}

postData();