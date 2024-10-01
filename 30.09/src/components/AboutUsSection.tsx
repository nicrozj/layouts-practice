import { Section } from "./Section"
import { TextBlock } from "./TextBlock";
import ImageAboutUs from "../assets/img/peoples.jpeg"

export function AboutUsSection() {
    return(
        <Section heading="О нас" class="flex gap-8">
            <TextBlock
                class="basis-1/4"
                upperText="Примерно 60-70% того, что вы ежедневно выбрасываете в мусорное ведро, можно сдать на переработку. Зачем это делать? "
                bottomText="Чтобы избавить планету от ковра мусора, который с каждым годом становится все больше."
            />
            <TextBlock
                class="basis-1/4"
                upperText="Все что вам нужно: перестать выбрасывать вместе с остальным мусором пластик, бумагу, конмервы, аллюминиевые банки, полиэтиленовые мешки и связаться с нами. Мы приедем, заберем ваш мусор и отправим его на переработку."
                bottomText="Единственное условие — мусор должен быть чистым и отсортированным."
            />
            <div class="rounded-xl basis-1/2">
                <img class="rounded-xl" src={ImageAboutUs} alt="" />
            </div>
        </Section>
    );
}
