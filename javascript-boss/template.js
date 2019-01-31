import { bgColor,textColor,textFont } from 'number';
//import * as number from 'number.js';

let rm = new Vue({
    el:'#app',
    data:{
        styleApp:{
            width: '1280px',
            height: '1372px',
            background: bgColor

        },
        styleMain:{
            padding: '80px 85px'
        },
        styleFooter:{
            lineHeight: '18px',
            background: textColor,
            fontSize: '16px',
            color:number.bgColor,
            textAlign: 'right',
            padding: '8px 85px',
            margin: 0,
            fontFamily: textFont
        },
        styleTitle:{

        },
        styleEnglish:{
            fontFamily: textFont,
            fontSize: '24px'
        }
    }
})