interface Props{
    upperText: string;
    bottomText: string;
    class: string;
}

export function TextBlock(props: Props) {
    return(
        <div class={`${props.class} flex flex-col gap-4`}>
            <p class="text-base opacity-80">
                {props.upperText}
            </p>
            <p class="text-accent font-semibold">
                {props.bottomText}
            </p>
        </div>
    );
}
