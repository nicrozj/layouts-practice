import { ApplicationBlock } from "./content/ApplicationBlock";
import { AdvantagesBlock } from "./content/AvantagesBlock";
import { ServicesBlock } from "./content/ServicesBlock";
import { PortfolioBlock } from "./content/PortfolioBlock";
import { ContactsBlock } from "./content/ContactsBlock";


export function Content() {
    return(
        <main>
            <ApplicationBlock/>
            <ServicesBlock />
            <AdvantagesBlock />
            <PortfolioBlock />
            <ContactsBlock />
        </main>
    );
}
