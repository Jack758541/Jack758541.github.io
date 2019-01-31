import * as number from 'number.js';

let rm = new Vue({
    el:'#app',
    data:{
        styleApp:{
            width: '1280px',
            height: '1372px',
            background: number.bgColor

        },
        styleMain:{
            padding: '80px 85px'
        },
        styleFooter:{
            lineHeight: '18px',
            background: number.textColor,
            fontSize: '16px',
            color: number.bgColor,
            textAlign: 'right',
            padding: '8px 85px',
            margin: 0,
            fontFamily: number.textFont
        },
        styleTitle:{

        },
        styleEnglish:{
            fontFamily: number.textFont,
            fontSize: '24px'
        }
    }
})