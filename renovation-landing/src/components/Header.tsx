import { MapIcon } from "./header/icons/MapIcon";
import { LogoIcon } from "./header/icons/LogoIcon";
import { PhoneIcon } from "./header/icons/PhoneIcon";
import { NavLink } from "./header/NavLink";

export function Header() {
    return(
        <header>
            <nav class="flex mx-auto items-center h-20">
                <div class="basis-[5%] flex justify-center items-center h-[100%] border-[1px] border-gray-300 border-collapse">
                    <a href="#"><MapIcon /></a>
                </div>
                <div class="flex basis-[90%] justify-center items-center h-[100%] border-[1px] border-gray-300 border-collapse">
                    <ul class="flex basis-[45%] justify-center gap-16">
                        <li><NavLink text="Главная"/></li>
                        <li><NavLink text="О компании"/></li>
                        <li><NavLink text="Услуги"/></li>
                    </ul>
                    <div class="basis-[10%] flex justify-center">
                        <a href="#"><LogoIcon /></a>
                    </div>
                    <ul class="flex basis-[45%] justify-center gap-16">
                        <li><NavLink text="Цены"/></li>
                        <li><NavLink text="Портфолио"/></li>
                        <li><NavLink text="Контакты"/></li>
                    </ul>
                </div>
                <div class="flex basis-[5%] justify-center items-center h-[100%] border-[1px] border-gray-300 border-collapse">
                    <a href="tel: 00"><PhoneIcon /></a>
                </div>
            </nav>
        </header>
    );
}
