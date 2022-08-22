describe('Тестирование Staya', function () {
   it('Проверка, что авторизация работает', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('ilvera.krasnova@yandex.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('Flatron25');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
        })
})


