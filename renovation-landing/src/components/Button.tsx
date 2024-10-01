export function Button(props) {
    return(
        <div class="relative">
            <button class="border-[1px] border-opacity-30 border-primary px-12 py-2 font-gilroy text-primary w-max mt-14 hover:border-opacity-100 transition-all duration-300 ease-in-out">
                { props.text }
            </button>
            <div class="absolute bottom-5 -left-4 w-8 bg-primary h-[1px]"></div>
        </div>
    );
}
