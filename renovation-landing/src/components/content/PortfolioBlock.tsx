import { Button } from "../Button";

export function PortfolioBlock() {
    return(
        <section class="w-9/12 mx-auto">
            <div class="flex items-center gap-10">
                <div class="bg-primary w-8 h-[1px]"></div>
                <h2 class="text-black text-4xl font-gilroy text-center">
                    Примеры <span class="text-transparent font-black-outline-1">выполненных </span>работ
                </h2>
            </div>
            <section class="grid grid-cols-3 gap-5 my-12">
                <div class="col-span-2 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-1.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Новостройка</p>
                </div>
                <div class="row-span-2 relative h-120 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-2.jpeg)] bg-center bg-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Новостройка</p>
                </div>
                <div class="col-span-1 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-3.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Вторичка</p>
                </div>
                <div class="col-span-1 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-4.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                   <p class="text-white text-xl m-8 font-gilroy">Вторичка</p>
                </div>
                <div class="row-span-2 relative h-120 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-5.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Новостройка</p>
                </div>
                <div class="col-span-1 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-6.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Вторичка</p>
                </div>
                <div class="row-span-1 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-7.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Вторичка</p>
                </div>
                <div class="col-span-2 relative h-60 w-[100%] bg-[url(/src/assets/img/grid/service-card-image-1.jpeg)] bg-center bg-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                    <p class="text-white text-xl m-8 font-gilroy">Новостройка</p>
                </div>
            </section>
            <div class="flex justify-center">
                <Button text="Все проекты"></Button>
            </div>
        </section>
    );
}
