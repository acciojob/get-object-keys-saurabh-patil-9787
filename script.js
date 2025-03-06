() => {
    cy.visit(baseUrl + "/main.html"); // Always check this visit is set to baseUrl + "/main.html"
    
    cy.document().then(doc => {
        const script = doc.querySelector('script[src="./script.js"]');
        const scriptUrl = script.getAttribute("src");

        cy.readFile(scriptUrl).then(jsCode => {
            // Execute the JavaScript code dynamically using eval
            eval(jsCode);

            // Define the object with the getKeys method
            const myObj = {
                name: "John",
                age: 30,
                city: "New York",
                getKeys: function() {
                    return Object.keys(this);
                }
            };

            // Test the getKeys method
            const keys = myObj.getKeys();
            expect(keys).to.deep.equal(["name", "age", "city"]);
        });
    });
}
