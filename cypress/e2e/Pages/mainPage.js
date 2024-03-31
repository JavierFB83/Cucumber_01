import { CommonPage } from "./commonPage";

export class MainPage extends CommonPage {

    typeSomething(text, placeholder) {
        this.getInputByPlaceholder(placeholder).type(text);
    }
}
