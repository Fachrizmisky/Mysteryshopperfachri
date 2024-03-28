describe('Register', () => {

    let nextYearButton = 'form > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.dp__main.dp__theme_light > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.dp__month_year_row > div > button:nth-child(1)'
    let nextYearButton2 = 'form > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.dp__main.dp__theme_light > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.dp__month_year_row > div > div > div > div:nth-child(2) > div:nth-child(1) > div'

    let nextMonthButton = 'form > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.dp__main.dp__theme_light > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.dp__month_year_row > div > button:nth-child(2)'
    let nextMonthButton2 = 'form > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.dp__main.dp__theme_light > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div > div.dp__month_year_row > div > div > div > div:nth-child(34) > div:nth-child(3) > div'

    it('Register Validation', () => {
        cy.visit('https://quantum-service.id/auth/register');
        cy.get('input[type="checkbox"].mr-2').as('checkbox');
        cy.get('@checkbox').click();
        cy.get('.btn.btn-primary.btn-sm').click();
        cy.wait(1000)

        //PAGE 1
        cy.get('#username').type('Jaja Mharja');
        cy.get('#email').type('JajaMihaja@gmail.com');
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
        
        //  cy.get('#\\32 024-03-21 > .dp__cell_inner').click();

        //year 
        cy.get(`${nextYearButton}`).click();
        cy.get(`${nextYearButton2}`).click();

        cy.get(`${nextMonthButton}`).click();
        cy.get(`${nextMonthButton2}`).click();

        cy.get('#\\31 998-01-13 > div').click();
         cy.get('#place_of_birth').type('Jakarta');
         cy.get('#picture[type="file"]').selectFile('cypress/fixtures/ martinus.jpeg')
         cy.get('.btn-success > .flex').click();

        //  //PAGE 3
         cy.get('#province').click(); 
         cy.contains('.choice-list', 'BANTEN').click(); 
         cy.get('#city').click(); 
         cy.contains('.choice-list', 'KOTA TANGERANG SELATAN').click();  
         cy.get('#district').click(); 
         cy.contains('.choice-list', 'PAMULANG').click(); 
         cy.get('#village').click(); 
         cy.contains('.choice-list', 'KEDAUNG').click(); 
         cy.get('#address').type('Jalan raya banten kota tangerang selatan pamulang kedaung');
         cy.get('#postcode').type('126456');
         cy.get('.btn-success > .flex').click();

        //  //PAGE4
         cy.get('#bank').click(); 
         cy.contains('.choice-list', 'BANK BRI').click(); 
         cy.get('#account_number').type('831247823');
         cy.get('.btn-success > .flex').click();

         //PAGE 5
         cy.get('#type').select('1');
         //year of vehicle here
         cy.get('#brand').type('Honda');
         cy.get('.btn-success > .flex').click();
         cy.get('.btn-action.btn-primary').click();
 

    });
});
