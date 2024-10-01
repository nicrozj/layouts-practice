export function Section(props: any) {
    let className = props.class;
    return(
        <section class="flex flex-col gap-8 my-8 w-[1240px] mx-auto">
            <h1 class="text-3xl font-semibold">{props.heading}</h1>
            <div class={className}>
                {props.children}
            </div>
        </section>
    );
}
