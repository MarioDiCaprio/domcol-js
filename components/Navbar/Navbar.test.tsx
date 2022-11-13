import { mount } from "cypress/react";
import Navbar from "./Navbar";
import * as NextRouter from "next/router";


describe('<Navbar>', () => {

    let currentUrl = '';

    beforeEach(() => {
        mount(<Navbar />);
        cy.stub(NextRouter, 'useRouter', () => {
            return {
                pathname: cy.url(),
                push: (url: string) => {currentUrl = url}
            }
        })
    });

    it('title is visible', () => {
        cy.get(`[data-test="title"]`).should('be.visible');
    });

    /*
    it('links work', () => {
        cy.get(`[data-test="Home"]`).should('be.visible').click();
        //expect(currentUrl).to.equal('/');

        cy.get(`[data-test="Plot"]`).should('be.visible').click();
        //expect(currentUrl).to.equal('/plot');

        cy.get(`[data-test="Learn"]`).should('be.visible').click();
        //expect(currentUrl).to.equal('/learn');
    });
     */

});