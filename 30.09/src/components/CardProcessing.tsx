import LeftArrowIcon from "../assets/icons/left-arrow.svg"

interface Props {
    icon: any,
    heading: string
    description: string,
}

export function CardProcessing(props) {
    return(
        <div class="flex flex-col gap-10 basis-1/5 items-center group cursor-pointer">
            <div class="relative rounded-full bg-accent bg-opacity-20 size-24">
                <img class="absolute -bottom-4 -right-2" src={props.icon} alt="" />
            </div>
            <div class="flex flex-col items-center gap-2">
                <span class="text-lg font-semibold group-hover:visible group-hover:text-accent text-center">{props.heading}</span>
                <p class="invisible text-sm font-light group-hover:visible text-opacity-50 text-center">{props.description}</p>
                <img class="invisible group-hover:visible" src={LeftArrowIcon} alt="" />
            </div>
        </div>
    );
}
