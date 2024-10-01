import AdvantagesImgPath from "../../assets/img/advantages.png"
import AdvatagesImgRightPath from "../../assets/img/advantages-right.png"

export function AdvantagesBlock() {
    return(
        <section class="w-9/12 mx-auto my-40">
            <div class="relative w-full h-64">
                <img class="object-cover w-full h-full z-10" src={AdvantagesImgPath} alt="" />
                <div></div>
                <h2 class="absolute left-6 top-28 text-white text-4xl font-gilroy z-30"><span class="text-transparent font-white-outline-1">Наши</span> <br/>преимущества</h2>
                <div class="absolute -top-8 -right-10 z-20">
                    <img src={AdvatagesImgRightPath} alt="" />
                    <div class="absolute top-20 left-20 z-40 w-1/2">
                        <h1 class="text-6xl font-gilroy text-transparent font-white-outline-2">01</h1>
                        <p class=" mt-3 text-white font-light">С другой стороны реализация намеченных плановых заданий требуют анализа соответствующий условий</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
