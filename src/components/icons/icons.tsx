import React from "react"
interface IIcons {
    size?: string,
    height?: number,
    strokeColor?: string,
    strokeWidth?: string,
    fillColor?: string,
}
const EyeClosedIcon: React.FC<IIcons> = ({size, strokeColor, fillColor}) => {
    return(
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
            <rect width="30" height="30" fill="none"/>
            <path d="M3 16C11 21.3333 19 21.3333 27 16" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M23.855 22.6524L22.54 19.0574" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M17.865 24.0574L17.45 20.2524" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M11.72 23.9875L12.22 20.1975" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M5.76501 22.4573L7.15501 18.8923" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>

    )
};

const EyeOpenIcon: React.FC<IIcons> = ({size, strokeColor, fillColor}) => {
    return(
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}  fill="none">
        <rect width="30" height="30" fill="none"/>
        <path d="M3.46237 15.8412C11.1858 10.1874 18.9093 10.1874 26.6328 15.8412C18.9093 21.4999 11.1858 21.4999 3.46237 15.8412Z" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.0476 20.1486C17.3182 20.1486 19.1588 18.3164 19.1588 16.0563C19.1588 13.7961 17.3182 11.9639 15.0476 11.9639C12.7771 11.9639 10.9364 13.7961 10.9364 16.0563C10.9364 18.3164 12.7771 20.1486 15.0476 20.1486Z" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.0476 18.2671C16.2743 18.2671 17.2686 17.2772 17.2686 16.0562C17.2686 14.8351 16.2743 13.8452 15.0476 13.8452C13.8209 13.8452 12.8265 14.8351 12.8265 16.0562C12.8265 17.2772 13.8209 18.2671 15.0476 18.2671Z" fill={fillColor}/>
        <path d="M2.09518 13.6637C10.7301 7.38424 19.3651 7.38424 28 13.6637" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M22.5648 18.668L23.1357 20.2247" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M17.4414 19.8618L17.6237 21.5093" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M12.1837 19.8044L11.9678 21.4471" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M7.09389 18.501L6.48944 20.0434" stroke={strokeColor} strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>


    )
}

const StapleIcon: React.FC<IIcons> = ({size, strokeColor, fillColor}) => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.4783 4H6.52174L0 18.0217H1.95655L7.62757 5.63057H22.3724L28.0434 18.0217H30L23.4783 4Z" fill={fillColor}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.78264 18.0217H0V25.1956H30V18.0217H19.5652L18.2609 20.6304H11.087L9.78264 18.0217Z" fill={fillColor}/>
        </svg>

    )
}


const OrderStrokedIcon: React.FC<IIcons> = ({size, strokeColor}) => {

    return(
        <svg width={size} height={size} viewBox={`0 0 30 30`} fill="none">
            <circle cx="3" cy="7" r="2.5" stroke={strokeColor}/>
            <circle cx="3" cy="15" r="2.5" stroke={strokeColor}/>
            <circle cx="3" cy="23" r="2.5" stroke={strokeColor}/>
            <rect x="8.5" y="5.5" width="21" height="3" rx="1.5" stroke={strokeColor}/>
            <rect x="8.5" y="13.5" width="21" height="3" rx="1.5" stroke={strokeColor}/>
            <rect x="8.5" y="21.5" width="21" height="3" rx="1.5" stroke={strokeColor}/>
        </svg>
    )
}


const LikeIcon: React.FC<IIcons> = ({size, fillColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
          <rect x="6" y="12.7527" width="3" height="10" rx="1.5" fill={fillColor}/>
          <path fillRule="evenodd" clipRule="evenodd" d="M16.3575 7.14809C16.5117 6.09276 15.1276 5.56132 14.5359 6.44874L10.1874 12.9715C10.0515 13.1754 10.0021 13.3983 10.021 13.6101C10.0074 13.6528 10 13.7001 10 13.7526V20.7535C10 21.8581 10.8954 22.7526 12 22.7526H20.4035C21.3373 22.7526 22.1469 22.1065 22.3538 21.1959L23.9447 14.1959C24.2292 12.9444 23.2779 11.7526 21.9945 11.7526H15.6844L16.3575 7.14809Z" fill={fillColor}/>
        </svg>

    )
}

const TrippleDotIcon: React.FC<IIcons> = ({size, fillColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
            <circle cx="5" cy="15" r="3" fill={fillColor}/>
            <circle cx="15" cy="15" r="3" fill={fillColor}/>
            <circle cx="25" cy="15" r="3" fill={fillColor}/>
        </svg>


    )
}

const ChevronDownIcon: React.FC<IIcons> = ({size, strokeColor}) => {

    return(
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
         <path d="M2 12L15 21L28 12" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

const ChevronUpIcon: React.FC<IIcons> = ({size, strokeColor, strokeWidth='4'}) => {

    return(
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
         <path d="M28 18L15 9L2 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

const ChevronRightIcon: React.FC<IIcons> = ({size, strokeColor, strokeWidth='4'}) => {

    return(
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
         <path d="M12 28L21 15L12 2" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

const ChevronLeftIcon: React.FC<IIcons> = ({size, strokeColor, strokeWidth='4'}) => {

    return(
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
         <path d="M18 28L9 15L18 2" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

const PenIcon: React.FC<IIcons> = ({size, fillColor}) => {

    return(
    <svg width={size} height={size} viewBox="0 0 10 14" fill="none">
        <path d="M7.38397 0.871001C7.52204 0.631855 7.82784 0.549917 8.06698 0.687988L8.93301 1.18799C9.17216 1.32606 9.25409 1.63185 9.11602 1.871L8.86602 2.30401L7.13397 1.30401L7.38397 0.871001Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.36602 3.16992L6.63397 2.16992L1.63397 10.8302C1.63397 10.8302 1.06698 12.8122 1.5 13.0622C1.93301 13.3122 3.36602 11.8302 3.36602 11.8302L8.36602 3.16992Z" fill={fillColor}/>
    </svg>
    )
}

const FilterIcon: React.FC<IIcons> = ({size, strokeColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
            <line x1="1.5" y1="8.5" x2="28.5" y2="8.5" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
            <line x1="5.5" y1="15.5" x2="24.5" y2="15.5" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
            <line x1="11.5" y1="22.5" x2="18.5" y2="22.5" stroke={strokeColor} strokeWidth="3" strokeLinecap="round"/>
        </svg>
    )
}
const PlusIcon: React.FC<IIcons> = ({size, strokeColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
            <line x1="2.5" y1="14.5" x2="27.5" y2="14.5" stroke={strokeColor }stroke-width="3" stroke-linecap="round"/>
            <line x1="15" y1="2.5" x2="15" y2="27.5" stroke={strokeColor} stroke-width="3" stroke-linecap="round"/>
        </svg>

    )
}

const UploadFilesIcon: React.FC<IIcons> = ({size, fillColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6957 18H6.30435L0 31.5543H1.89135L7.37331 19.5763H21.6266L27.1086 31.5543H29L22.6957 18Z" fill={fillColor}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.45662 31.5544H0V38.4892H29V31.5544H18.913L17.6522 34.0761H10.7174L9.45662 31.5544Z" fill={fillColor}/>
            <rect x="12" y="8" width="5" height="10" rx="0.5" fill={fillColor}/>
            <path d="M14.933 24.25C14.7406 24.5833 14.2594 24.5833 14.067 24.25L10.1699 17.5C9.97742 17.1667 10.218 16.75 10.6029 16.75H18.3971C18.782 16.75 19.0226 17.1667 18.8301 17.5L14.933 24.25Z" fill={fillColor}/>
        </svg>

    )
}

const ImageIcon: React.FC<IIcons> = ({ height = 45, fillColor}) => {

    const width = height * 1.267;

    return(
        <svg width={width} height={height} viewBox="0 0 57 45" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7H4C1.79086 7 0 8.79083 0 11V41C0 43.2092 1.79086 45 4 45H46C48.2091 45 50 43.2092 50 41V40H9C6.79086 40 5 38.2092 5 36V7Z" fill={fillColor}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C7 1.79083 8.79086 0 11 0H53C55.2091 0 57 1.79083 57 4V34C57 36.2092 55.2091 38 53 38H11C8.79086 38 7 36.2092 7 34V4ZM28.25 16.5385C28.6817 15.6529 29.6942 15.2136 30.6359 15.5034L34.7823 16.7792C35.245 16.9216 35.6404 17.2269 35.895 17.6385L36.6237 18.8165C37.4824 17.9975 38.9154 18.0972 39.6341 19.1158L45.3013 27.1469C46.2362 28.4718 45.2887 30.3 43.6672 30.3H32.3328C31.9502 30.3 31.6051 30.1982 31.3134 30.0253C31.0065 30.2283 30.633 30.3501 30.212 30.3501H19.788C18.0849 30.3501 17.1611 28.3574 18.2617 27.0577L23.4737 20.9026C24.1882 20.0588 25.4275 19.9697 26.2528 20.6353L28.25 16.5385ZM32 11C33.6569 11 35 9.65686 35 8C35 6.34314 33.6569 5 32 5C30.3431 5 29 6.34314 29 8C29 9.65686 30.3431 11 32 11Z" fill={fillColor}/>
        </svg>
    )
}

const SearchIcon: React.FC<IIcons> = ({ size, strokeWidth, strokeColor}) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 31" fill="none">
        <path d="M18.6746 8.17958C20.5722 11.2881 19.4725 15.329 16.0953 17.1731C12.7181 19.0173 8.46822 17.8975 6.5707 14.7891C4.67318 11.6806 5.77282 7.63965 9.15002 5.7955C12.5272 3.95135 16.7771 5.0711 18.6746 8.17958Z" stroke={strokeColor} stroke-width={strokeWidth}/>
        <path d="M16.8768 18.4534L21.7692 26.4679" stroke={strokeColor} stroke-width={strokeWidth} stroke-linecap="round"/>
        </svg>
    )

}

const GrapDotIcon: React.FC<IIcons> = ({ size, fillColor }) => {

    return(
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
            <circle cx="9" cy="5" r="3" transform="rotate(90 9 5)" fill={fillColor}/>
            <circle cx="9" cy="15" r="3" transform="rotate(90 9 15)" fill= {fillColor}/>
            <circle cx="9" cy="25" r="3" transform="rotate(90 9 25)" fill= {fillColor}/>
            <circle cx="21" cy="5" r="3" transform="rotate(90 21 5)" fill= {fillColor}/>
            <circle cx="21" cy="15" r="3" transform="rotate(90 21 15)" fill= {fillColor}/>
            <circle cx="21" cy="25" r="3" transform="rotate(90 21 25)" fill= {fillColor}/>
        </svg>
    )

}

const LogOutIcon: React.FC<IIcons> = ({ size, strokeColor }) => {

    return(
        <svg width={size} height={size} viewBox="0 0 33 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H17C19.7615 32 22 29.7609 22 26.9996V26.9842V26.9688V26.9534V26.938V26.9226V26.9072V26.8918V26.8764V26.861V26.8456V26.8303V26.8149V26.7995V26.7842V26.7688V26.7535V26.7382V26.7228V26.7075V26.6922V26.6769V26.6616V26.6463V26.631V26.6157V26.6004V26.5851V26.5698V26.5546V26.5393V26.524V26.5088V26.4935V26.4783V26.463V26.4478V26.4326V26.4173V26.4021V26.3869V26.3717V26.3565V26.3413V26.3261V26.3109V26.2957V26.2806V26.2654V26.2502V26.2351V26.2199V26.2047V26.1896V26.1745V26.1593V26.1442V26.1291V26.1139V26.0988V26.0837V26.0686V26.0535V26.0384V26.0233V26.0082V25.9932V25.9781V25.963V25.9479V25.9329V25.9178V25.9028V25.8877V25.8727V25.8577V25.8426V25.8276V25.8126V25.7976V25.7825V25.7675V25.7525V25.7375V25.7226V25.7076V25.6926V25.6776V25.6626V25.6477V25.6327V25.6177V25.6028V25.5878V25.5729V25.558V25.543V25.5281V25.5132V25.4983V25.4834V25.4684V25.4535V25.4386V25.4237V25.4089V25.394V25.3791V25.3642V25.3493V25.3345V25.3196V25.3048V25.2899V25.2751V25.2602V25.2454V25.2306V25.2157V25.2009V25.1861V25.1713V25.1565V25.1416V25.1269V25.1121V25.0973V25.0825V25.0677V25.0529V25.0381V25.0234V25.0086V24.9939V24.9791V24.9643V24.9496V24.9349V24.9201V24.9054V24.8907V24.8759V24.8612V24.8465V24.8318V24.8171V24.8024V24.7877V24.773V24.7583V24.7436V24.729V24.7143V24.6996V24.685V24.6703V24.6556V24.641V24.6263V24.6117V24.5971V24.5824V24.5678V24.5532V24.5386V24.5239V24.5093V24.4947V24.4801V24.4655V24.4509V24.4363V24.4217V24.4072V24.3926V24.378V24.3634V24.3489V24.3343V24.3198V24.3052V24.2907V24.2761V24.2616V24.247V24.2325V24.218V24.2035V24.1889V24.1744V24.1599V24.1454V24.1309V24.1164V24.1019V24.0874V24.073V24.0585V24.044V24.0295V24.0151V24.0006V24H20V24.0006V24.0151V24.0295V24.044V24.0585V24.073V24.0874V24.1019V24.1164V24.1309V24.1454V24.1599V24.1744V24.1889V24.2035V24.218V24.2325V24.247V24.2616V24.2761V24.2907V24.3052V24.3198V24.3343V24.3489V24.3634V24.378V24.3926V24.4072V24.4217V24.4363V24.4509V24.4655V24.4801V24.4947V24.5093V24.5239V24.5386V24.5532V24.5678V24.5824V24.5971V24.6117V24.6263V24.641V24.6556V24.6703V24.685V24.6996V24.7143V24.729V24.7436V24.7583V24.773V24.7877V24.8024V24.8171V24.8318V24.8465V24.8612V24.8759V24.8907V24.9054V24.9201V24.9349V24.9496V24.9643V24.9791V24.9939V25.0086V25.0234V25.0381V25.0529V25.0677V25.0825V25.0973V25.1121V25.1269V25.1416V25.1565V25.1713V25.1861V25.2009V25.2157V25.2306V25.2454V25.2602V25.2751V25.2899V25.3048V25.3196V25.3345V25.3493V25.3642V25.3791V25.394V25.4089V25.4237V25.4386V25.4535V25.4684V25.4834V25.4983V25.5132V25.5281V25.543V25.558V25.5729V25.5878V25.6028V25.6177V25.6327V25.6477V25.6626V25.6776V25.6926V25.7076V25.7226V25.7375V25.7525V25.7675V25.7825V25.7976V25.8126V25.8276V25.8426V25.8577V25.8727V25.8877V25.9028V25.9178V25.9329V25.9479V25.963V25.9781V25.9932V26.0082V26.0233V26.0384V26.0535V26.0686V26.0837V26.0988V26.1139V26.1291V26.1442V26.1593V26.1745V26.1896V26.2047V26.2199V26.2351V26.2502V26.2654V26.2806V26.2957V26.3109V26.3261V26.3413V26.3565V26.3717V26.3869V26.4021V26.4173V26.4326V26.4478V26.463V26.4783V26.4935V26.5088V26.524V26.5393V26.5546V26.5698V26.5851V26.6004V26.6157V26.631V26.6463V26.6616V26.6769V26.6922V26.7075V26.7228V26.7382V26.7535V26.7688V26.7842V26.7995V26.8149V26.8303V26.8456V26.861V26.8764V26.8918V26.9072V26.9226V26.938V26.9534V26.9688V26.9842V26.9996C20 28.6566 18.6567 30 17 30H5C3.34315 30 2 28.6569 2 27V5C2 3.34315 3.34315 2 5 2H17C18.6568 2 20 3.34329 20 5.00021V5.03216V5.0641V5.09601V5.12789V5.15976V5.1916V5.22341V5.25521V5.28698V5.31873V5.35045V5.38215V5.41383V5.44549V5.47712V5.50873V5.54032V5.57188V5.60343V5.63495V5.66644V5.69792V5.72937V5.76081V5.79221V5.8236V5.85497V5.88631V5.91763V5.94893V5.98021V6.01147V6.0427V6.07391V6.1051V6.13627V6.16742V6.19855V6.22966V6.26074V6.29181V6.32285V6.35387V6.38487V6.41585V6.44681V6.47775V6.50867V6.53956V6.57044V6.6013V6.63213V6.66295V6.69374V6.72452V6.75527V6.78601V6.81672V6.84742V6.87809V6.90874V6.93938V6.96999V7.00059V7.03117V7.06172V7.09226V7.12278V7.15327V7.18375V7.21421V7.24465V7.27507V7.30547V7.33586V7.36622V7.39657V7.42689V7.4572V7.48749V7.51776V7.54801V7.57824V7.60846V7.63866V7.66883V7.69899V7.72913V7.75926V7.78936V7.81945V7.84952V7.87957V7.90961V7.93962V7.96962V7.9996V8.02956V8.05951V8.08944V8.11935V8.14924V8.17912V8.20898V8.23882V8.26864V8.29845V8.32824V8.35802V8.38777V8.41751V8.44724V8.47694V8.50663V8.53631V8.56596V8.59561V8.62523V8.65484V8.68443V8.71401V8.74357V8.77311V8.80264V8.83215V8.86165V8.89113V8.92059V8.95004V8.97948V9H22V8.97948V8.95004V8.92059V8.89113V8.86165V8.83215V8.80264V8.77311V8.74357V8.71401V8.68443V8.65484V8.62523V8.59561V8.56596V8.53631V8.50663V8.47694V8.44724V8.41751V8.38777V8.35802V8.32824V8.29845V8.26864V8.23882V8.20898V8.17912V8.14924V8.11935V8.08944V8.05951V8.02956V7.9996V7.96962V7.93962V7.90961V7.87957V7.84952V7.81945V7.78936V7.75926V7.72913V7.69899V7.66883V7.63866V7.60846V7.57824V7.54801V7.51776V7.48749V7.4572V7.42689V7.39657V7.36622V7.33586V7.30547V7.27507V7.24465V7.21421V7.18375V7.15327V7.12278V7.09226V7.06172V7.03117V7.00059V6.96999V6.93938V6.90874V6.87809V6.84742V6.81672V6.78601V6.75527V6.72452V6.69374V6.66295V6.63213V6.6013V6.57044V6.53956V6.50867V6.47775V6.44681V6.41585V6.38487V6.35387V6.32285V6.29181V6.26074V6.22966V6.19855V6.16742V6.13627V6.1051V6.07391V6.0427V6.01147V5.98021V5.94893V5.91763V5.88631V5.85497V5.8236V5.79221V5.76081V5.72937V5.69792V5.66644V5.63495V5.60343V5.57188V5.54032V5.50873V5.47712V5.44549V5.41383V5.38215V5.35045V5.31873V5.28698V5.25521V5.22341V5.1916V5.15976V5.12789V5.09601V5.0641V5.03216V5.00021C22 2.23885 19.7615 0 17 0H5Z" fill={strokeColor}/>
            <path d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17V15ZM32.7071 16.7071C33.0976 16.3166 33.0976 15.6834 32.7071 15.2929L26.3431 8.92893C25.9526 8.53841 25.3195 8.53841 24.9289 8.92893C24.5384 9.31946 24.5384 9.95262 24.9289 10.3431L30.5858 16L24.9289 21.6569C24.5384 22.0474 24.5384 22.6805 24.9289 23.0711C25.3195 23.4616 25.9526 23.4616 26.3431 23.0711L32.7071 16.7071ZM12 17H32V15H12V17Z" fill={strokeColor}/>
            <circle cx="21" cy="24" r="1" fill={strokeColor}/>
            <circle cx="21" cy="9" r="1" fill={strokeColor}/>
        </svg>

    )

}



export { EyeClosedIcon, EyeOpenIcon, StapleIcon, OrderStrokedIcon, LikeIcon, TrippleDotIcon, ChevronDownIcon, ChevronUpIcon, ChevronRightIcon, ChevronLeftIcon, PenIcon, FilterIcon, PlusIcon, UploadFilesIcon, ImageIcon, SearchIcon, GrapDotIcon, LogOutIcon};