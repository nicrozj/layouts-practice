import { Section } from "./Section";
import { CardProcessing } from "./CardProcessing";
import TrashIcon from "../assets/icons/trash.svg";
import CargoIcon from "../assets/icons/cargo.svg";
import BoxIcon from "../assets/icons/box.svg";
import FilterIcon from "../assets/icons/filter.svg";
import ReuseIcon from "../assets/icons/reuse.svg";

export function ProcessingSection() {
    return(
        <Section heading=<>Как мы <br/> обрабатываем?</> class="grid grid-cols-5">
            <div>
                <CardProcessing heading="Собираем" icon={TrashIcon} description="Распределяем весь собранный вами мусор по группам "/>
            </div>
            <div>
                <CardProcessing heading="Забираем" icon={CargoIcon} description="Увозим ваш мусор в сортировочный цех"/>
            </div>
            <div>
                <CardProcessing heading="Храним" icon={BoxIcon} description="До сортировки весь мусор хранится на нашем складе"/>
            </div>
            <div>
                <CardProcessing heading="Сортируем" icon={FilterIcon} description="Финальный этап подготовки к переработке"/>
            </div>
            <div>
                <CardProcessing heading="Отправляем" icon={ReuseIcon} description="Все собранные вещи отправляются на переработку"/>
            </div>
        </Section>
    );
}
