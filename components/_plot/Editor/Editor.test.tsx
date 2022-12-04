import { mount } from "cypress/react";
import Editor from "./Editor";


describe('<Editor>', () => {

    it('should be able to type code', () => {
        mount(<Editor />);

        cy.get(`[data-test="editor"]`)
            .should('be.visible')
            .click()
            .type('Hello, World!')
            .contains('Hello, World!');
    });

});
