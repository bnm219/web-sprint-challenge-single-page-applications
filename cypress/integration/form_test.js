describe('Form', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=name]')
    it('checkes the input in the Name input area', () =>{
        nameInput()
            .should('exist')
            .should('have.value', '')
            .type('Amy')
            .should('have.value', 'Amy')
    })

})