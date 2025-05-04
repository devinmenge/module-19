
describe('Quiz Component', () => {


    it("should display a start quiz button at tht beginning", () => {
       cy.visit("http://localhost:3001/")


        cy.get("button").should("contain.text", "Start Quiz")


    })


    it("should display first question after clicking start quiz button", () => {
       cy.visit("http://localhost:3001/")
        cy.intercept({
            method: "GET",
            url: "/api/questions/random"
        }, {
            fixture: "questions.json",
            statusCode: 200
        })

        cy.get("button").should("contain.text", "Start Quiz").click()


        cy.get("h2").should("contain.text", "What is the keyword to define a class in Python?")

        // cy.get("div.alert").eq(0).should("contain.text", "function")
        // cy.get("div.alert").eq(1).should("contain.text", "def")

    })


    it("should display second question after clicking one of the answer buttons", () => {
       cy.visit("http://localhost:3001/")
        cy.intercept({
            method: "GET",
            url: "/api/questions/random"
        }, {
            fixture: "questions.json",
            statusCode: 200
        })

        cy.get("button").should("contain.text", "Start Quiz").click()


        // cy.get("button").contains("1").click()
        cy.get("button").eq(1).click()

        cy.get("h2").should("contain.text", "Which of the following is not a built-in data type in Python?")

    })


    it("should display Quiz Completed after clicking one of the answer buttons from second question", () => {
       cy.visit("http://localhost:3001/")
        cy.intercept({
            method: "GET",
            url: "/api/questions/random"
        }, {
            fixture: "questions.json",
            statusCode: 200
        })

        cy.get("button").should("contain.text", "Start Quiz").click()


        // cy.get("button").contains("1").click()
        cy.get("button").eq(1).click()

        cy.get("button").eq(0).click()

        cy.get("h2").should("contain.text", "Quiz Completed")
       

    })

    it("should show first question again after clicking take new quiz button", () => {
       cy.visit("http://localhost:3001/")
        cy.intercept({
            method: "GET",
            url: "/api/questions/random"
        }, {
            fixture: "questions.json",
            statusCode: 200
        })

        cy.get("button").should("contain.text", "Start Quiz").click()


        // cy.get("button").contains("1").click()
        cy.get("button").eq(1).click()

        cy.get("button").eq(0).click()

        cy.get("button").should("contain.text", "Take New Quiz").click()


        cy.get("h2").should("contain.text", "What is the keyword to define a class in Python?")

    })


})