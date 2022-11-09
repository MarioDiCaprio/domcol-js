import { RouterContext } from "next/dist/shared/lib/router-context";
import "../styles/globals.scss";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';


export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    nextRouter: {
        Provider: RouterContext.Provider
    }
}
