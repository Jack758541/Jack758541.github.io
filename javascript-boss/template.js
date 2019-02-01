import number from 'number';

var rm = new Vue({
    el:'#app',
    data:{
        styleApp:{
            width: '1280px',
            height: '1372px',
            background: number.background

        },
        styleMain:{
            padding: '80px 85px'
        },
        styleFooter:{
            lineHeight: '18px',
            background: number.text,
            fontSize: '16px',
            color: number.background,
            textAlign: 'right',
            padding: '8px 85px',
            margin: 0,
            fontFamily: number.text
        },
        styleTitle:{

        },
        styleEnglish:{
            fontFamily: number.font,
            fontSize: '24px'
        }
    }
})