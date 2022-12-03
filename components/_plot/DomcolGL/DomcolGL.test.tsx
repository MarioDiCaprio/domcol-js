import { mount } from "cypress/react";
import DomcolGL from "./DomcolGL";


const VALID_CODE =
`
vec2 plottedFunction(vec2 z) {
    return z;
}
`;

describe('<DomcolGL>', () => {

    it('should render correctly', () => {
        mount(<DomcolGL code={VALID_CODE}/>);
        cy.get(`[data-test="canvas"]`).should('be.visible');
    });

});
