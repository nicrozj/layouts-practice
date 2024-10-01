import { ContactGridItem } from "./ContactGridItem";
import { ContactFormInput } from "./ContactFormInput";
import { Button } from "../Button";
import { InstagramLogo } from "./icons/InstagramLogo";
import { VkLogo } from "./icons/VkLogo";
import { FacebookLogo } from "./icons/FacebookLogo";

export function ContactsBlock() {
    return(
        <section class="mt-32 w-9/12 mx-auto">
            <div class="flex items-center gap-10">
                <div class="bg-primary w-8 h-[1px]"></div>
                <h2 class="text-black text-4xl font-gilroy text-center">
                    Связаться <span class="text-transparent font-black-outline-1">с нами </span>
                </h2>
            </div>

            <section class="flex gap-16">
                <div>
                    <div class="basis-2/3 grid grid-cols-2 gap-8 pt-12">
                        <ContactGridItem heading="Офис" text="Москва, ул. Уличная, д. 1, оф. 1"/>
                        <ContactGridItem heading="Режим работы" text="Пн-Вт: 10:00 — 19:00; Сб-Вс: 10:00 — 15:00"/>
                        <ContactGridItem heading="E-mail" text="company@company.ru"/>
                        <ContactGridItem heading="Телефон" text="8 (800) 900-00-00"/>
                    </div>
                    <div class="w-max">
                        <h3 class="font-gilroy text-lg text-primary mt-12">Социальные сети</h3>
                        <div class="flex items-center justify-between">
                            <a href=""><VkLogo/></a>
                            <a href=""><FacebookLogo/></a>
                            <a href=""><InstagramLogo/></a>
                        </div>
                    </div>
                </div>

                <div class="basis-1/3 pt-12">
                    <h3 class="font-gilroy text-lg text-primary">Остались вопросы?</h3>
                    <ContactFormInput text="Ваше имя" name="name" placeholder="Иван Иванов"/>
                    <ContactFormInput text="Телефон / E-mail" name="name" placeholder="example@example.com"/>
                    <ContactFormInput text="Ваше сообщение" name="name" placeholder="Текст обращения"/>
                    <p class="mt-6 font-light text-[#909090]">Нажимая на кнопку «Получить консультацию», вы соглашаетесь на <a href="" class="text-black underline underline-offset-8 decoration-dotted hover:text-blue-700 transition-all duration-200 ease-in-out">обработку персональных данных</a></p>
                    <Button text="Получить консультацию"/>
                </div>
            </section>

        </section>
    );
}
