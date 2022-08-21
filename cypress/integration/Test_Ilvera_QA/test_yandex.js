describe('Тестирование Yandex', function () {
   it('Проверка, что при поисковом запросе Яндекс в поисковой выдаче предлагать посмотреть картинки', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('котята').type('{enter}');
        cy.contains('Картинки по запросу');
    })
})

