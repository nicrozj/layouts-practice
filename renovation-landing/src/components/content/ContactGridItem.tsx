export function ContactGridItem(props) {
    return(
        <div>
            <h3 class="font-gilroy text-lg text-primary">{props.heading}</h3>
            <p class="text-md text-primary mt-2">{props.text}</p>
        </div>
    );
}
