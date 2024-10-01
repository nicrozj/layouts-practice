import HalfStar from "./stars/half-star";
import Star from "./stars/star";

export default function Header() {
    return(
        <header class="bg-[#D2E6E4] relative pt-10">
            <nav class="flex items-center justify-between w-[1250px] mx-auto">
                <div class="flex text-primary items-center">
                    <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.0087 35.4591L54.0087 19.5945C54.0087 19.5945 41.7705 21.1549 31.2334 26.3801C20.6962 21.1549 8.45805 19.5945 8.45805 19.5945L8.45805 35.4591C4.86693 36.2629 1.96095 37.2323 2.41136e-09 38.3435C6.61524 36.2629 18.121 34.868 31.2097 34.868C44.2985 34.868 55.8043 36.2393 62.4195 38.3435C60.4822 37.2323 57.5998 36.2629 54.0087 35.4591Z" fill="#0B7077"/>
                        <path d="M11.7894 17.8921L11.7894 20.1382C16.1365 20.9657 24.0748 22.8099 31.2334 26.38C22.7754 19.7363 11.7894 17.8921 11.7894 17.8921Z" fill="#0B7077"/>
                        <path d="M50.701 17.8921C50.701 17.8921 39.715 19.7363 31.257 26.38C38.4156 22.8335 46.3539 20.9657 50.701 20.1382L50.701 17.8921Z" fill="#0B7077"/>
                        <path d="M31.2571 18.105C30.8082 19.098 30.123 19.9728 29.3198 20.6584L31.2335 23.9921L33.1944 20.6584C32.3675 19.9728 31.706 19.098 31.2571 18.105Z" fill="#0B7077"/>
                        <path d="M25.4452 15.6225C26.721 15.6225 27.7841 14.5822 27.7841 13.2818C27.7841 12.0051 26.7446 10.9412 25.4452 10.9412C24.1694 10.9412 23.1062 11.9815 23.1062 13.2818C23.1062 14.5822 24.1457 15.6225 25.4452 15.6225ZM24.6655 11.6505C25.1617 11.6505 25.5633 12.0524 25.5633 12.5489C25.5633 13.0454 25.1617 13.4473 24.6655 13.4473C24.1694 13.4473 23.7677 13.0454 23.7677 12.5489C23.7677 12.0524 24.1694 11.6505 24.6655 11.6505Z" fill="#0B7077"/>
                        <path d="M34.7064 13.2818C34.7064 14.5586 35.7459 15.6225 37.0217 15.6225C38.2975 15.6225 39.3606 14.5822 39.3606 13.2818C39.3606 12.0051 38.3211 10.9412 37.0217 10.9412C35.7695 10.9648 34.7064 12.0051 34.7064 13.2818ZM37.3052 12.5489C37.3052 13.0454 36.9036 13.4473 36.4074 13.4473C35.9113 13.4473 35.5096 13.0454 35.5096 12.5489C35.5096 12.0524 35.9113 11.6505 36.4074 11.6505C36.9036 11.6505 37.3052 12.0524 37.3052 12.5489Z" fill="#0B7077"/>
                        <path d="M20.9798 17.8685C22.1375 19.0034 23.7204 19.689 25.4451 19.689C27.9967 19.689 30.2175 18.1758 31.257 16.0007C32.2729 18.1758 34.4938 19.689 37.069 19.689C38.8173 19.689 40.3766 18.9797 41.5343 17.8685C42.0304 18.5778 42.4557 19.3344 42.8101 20.1146C44.2513 19.5708 45.5743 19.1689 46.732 18.8378C45.9759 17.2774 44.7946 15.8825 43.3062 14.7003C43.4007 14.2511 43.4716 13.7546 43.4716 13.2817C43.4716 12.336 43.259 11.4375 42.8809 10.61C42.4321 9.28601 41.7469 8.05656 40.8728 6.96898L40.8255 0.65625L35.5806 3.11514C34.2103 2.59499 32.7455 2.33492 31.257 2.33492C29.7686 2.33492 28.3038 2.59499 26.9335 3.11514L21.6649 0.65625L21.6177 6.96898C20.7672 8.05656 20.082 9.26236 19.6331 10.5627C19.2551 11.3902 19.0188 12.3123 19.0188 13.2817C19.0188 13.7782 19.0661 14.2511 19.1842 14.7003C17.6958 15.8825 16.5381 17.2774 15.7821 18.8378C16.9161 19.1689 18.2628 19.5944 19.704 20.1146C20.0584 19.3344 20.4836 18.5778 20.9798 17.8685ZM42.1013 13.2817C42.1013 16.0716 39.8332 18.3413 37.0454 18.3413C34.2575 18.3413 31.9894 16.0716 31.9894 13.2817C31.9894 10.4918 34.2575 8.22207 37.0454 8.22207C39.8332 8.24571 42.1013 10.5155 42.1013 13.2817ZM31.2334 3.68258C34.4465 3.68258 37.3761 5.07752 39.3843 7.32362C38.6519 7.03991 37.8486 6.87441 37.0217 6.87441C34.4701 6.87441 32.2493 8.38757 31.2098 10.5627C30.1939 8.38757 27.973 6.87441 25.3978 6.87441C24.5709 6.87441 23.7676 7.03991 23.0589 7.32362C25.1143 5.07752 28.0203 3.68258 31.2334 3.68258ZM25.4451 8.24571C28.2329 8.24571 30.501 10.5155 30.501 13.3053C30.501 16.0952 28.2329 18.365 25.4451 18.365C22.6572 18.365 20.3891 16.0952 20.3891 13.3053C20.3891 10.5155 22.6572 8.24571 25.4451 8.24571Z" fill="#0B7077"/>
                    </svg>
                    <span class="logo text-3xl">onlearn</span>
                </div>
                <div>
                    <ul class="flex justify-between gap-[84px] font-raleway text-lg">
                        <li><a class="hover:text-secondary" href="#">Home</a></li>
                        <li><a class="hover:text-secondary" href="#">Careers</a></li>
                        <li><a class="hover:text-secondary" href="#">Blog</a></li>
                        <li><a class="hover:text-secondary" href="#">About Us</a></li>
                    </ul>
                </div>
                <div class="flex gap-8">
                    <button class="rounded-md bg-white font-raleway text-center uppercase text-primary text-base py-5 px-10">
                        log in
                    </button>
                    <button class="rounded-md bg-primary font-raleway text-center uppercase text-white text-base py-5 px-10">
                        sign up
                    </button>
                </div>
            </nav>    

            <section class="flex w-[1230px] mx-auto mt-24 items-center">
                <div class="flex flex-col basis-1/2">
                    <div class="rounded-lg bg-white text-center w-52 px-6 py-1">
                        <span class="text-lg">Never stop learning</span>
                    </div>
                    <div>
                        <h1 class="text-6xl font-bold leading-[80px] text-primary tracking-[.056em]">
                            Grow up your skills by online courses with Onlearning
                        </h1>
                    </div>
                    <div class="flex gap-3 mt-7 items-center">
                        <button class='bg-secondary rounded-lg text-white px-8 py-5 uppercase'>
                            explore path
                        </button>
                        <div class="flex items-center ">
                            <div class="rounded-full items-center">
                                <img class="size-14 rounded-full object-cover border-2 border-primary" src="src/assets/img/header/person1.png" alt="" />
                            </div>
                            <div class="rounded-full items-center -translate-x-5">
                                <img class="size-14 rounded-full object-cover border-2 border-primary" src="src/assets/img/header/person2.png" alt="" />
                            </div>
                            <div class="rounded-full items-center -translate-x-10">
                                <img class="size-14 rounded-full object-cover border-2 border-primary" src="src/assets/img/header/person3.png" alt="" />
                            </div>
                            <div class="items-center -translate-x-8">
                                <div class="flex items-center">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <HalfStar />
                                </div>
                                <span class="font-raleway text-sm ">( 10k+ Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex basis-1/2">
                    <img d src="src/assets/img/header/right-person.png" alt="" />
                </div>
            </section>
            <div class="absolute -bottom-28 right-0 left-0 mx-auto flex items-center rounded-full size-60 bg-[#D2E6E4]">
                <div class="flex mx-auto rounded-full justify-center items-center bg-primary size-4/5">
                    <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5217 19.6051C44.2898 21.7806 44.2899 27.2194 40.5217 29.3949L8.72826 47.7509C4.96015 49.9264 0.249998 47.207 0.249998 42.856L0.249999 6.14403C0.25 1.79298 4.96014 -0.926425 8.72826 1.2491L40.5217 19.6051Z" fill="white"/>
                    </svg>
                </div>
            </div>

        </ header>
    );
}