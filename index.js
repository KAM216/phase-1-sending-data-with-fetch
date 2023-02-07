 function submitData (name, email) {
    let formData = {
        name: name,
        email: email 
    };
}

configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application.json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData)
};