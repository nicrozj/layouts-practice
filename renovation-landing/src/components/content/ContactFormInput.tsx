interface ContactFormProps {
    name: string,
    text: string,
    placeholder: string,
}

export function ContactFormInput(props: ContactFormProps) {

    return(
        <div class="mt-6">
            <label class="text-xs" for={props.name}>{props.text}</label>
            <div>
                <input class="text-[#909090] font-light focus:outline-none" type={props.name} placeholder={props.placeholder} />
                <div class="bg-[#EBEBEB] mt-1 h-[1px]"></div>
            </div>
        </div>
    );
}
