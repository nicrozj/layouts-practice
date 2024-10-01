import { Button } from "../Button";

export function ApplicationBlock() {
    return(
        <section class="mt-16 flex flex-col items-center">
            <h1 class="text-white font-gilroy font-black-outline-2 text-6xl text-center font-bold">
                <span class="text-primary font-outline-0">Ремонт</span> и <span class="text-primary font-outline-0">дизайн</span><br/>в Москве и Московской области
            </h1>
            <Button text="Оставить заявку"/>
        </section>
    );
}
