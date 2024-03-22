describe('Register', () => {
    it('Register Validation', () => {
        cy.visit('https://quantum-service.id/auth/register');
        cy.get('input[type="checkbox"].mr-2').as('checkbox');
        cy.get('@checkbox').click();
        cy.get('.btn.btn-primary.btn-sm').click();
        cy.wait(1000)

        //PAGE 1
        cy.get('#username').type('Jaja Miharja');
        cy.get('#email').type('JajaMiharja@gmail.com');
        cy.get('#password').type('Qazwsx39');
        cy.get('#confirmation_password').type('Qazwsx39');
        cy.get('.btn-success > .flex').click();
        cy.wait(1000)


        //PAGE 2
        cy.get('#name').type('Jaja Miharja 12');
        cy.get('#gender').select('Male');
        cy.get('#phone_number').type('081234567891');
        cy.get('#job').type('Software Developer');
        cy.get(':nth-child(1) > .dp__main > :nth-child(1) > .dp__input_wrap > .dp__pointer').click()
        
        //  cy.get('#\\32 024-03-21 > .dp__cell_inner')
        // cy.get('dp__main dp__theme_light').find(".dp__outer_menu_wrap.dp--menu-wrapper").find(".dp__menu.dp__menu_index.dp__theme_light").find(".dp__instance_calendar").find(".dp__menu_inner").find(".dp__calendar").find(".dp__calendar").find(".dp__calendar_row")
         cy.get("dp__calendar_row").find('#2024-03-13').click()
         cy.get('#place_of_birth').type('Jakarta');


    });
});