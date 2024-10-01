import { ArrowDown } from "./icons/ArrowDown"
import { ServiceItem } from "./ServiceItem"

export function ServicesBlock() {
    return(
        <section class="relative h-96 w-[100%] bg-[url(/src/assets/img/services-background.jpeg)] bg-cover bg-center pt-52 mt-20">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="relative z-10 flex justify-around text-white font-gilroy text-xl">
                <ServiceItem text="Услуги по ремонту"/>
                <ServiceItem text="Виды работ"/>
                <ServiceItem text="Дизайн интерьера"/>
                <ServiceItem text="Ремонт помещений"/>
            </div>
            <div class="relative mx-auto mt-6 w-max rounded-full border-2 border-white border-opacity-30 p-3 z-10 hover:border-opacity-100 transition-all duration-200 ease-in-out">
                <a href="#"><ArrowDown /></a>
            </div>
        </section>
    )
}
