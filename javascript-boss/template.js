import Color from 'number';

let rm = new Vue({
    el:'#app',
    data:{
        styleApp:{
            width: '1280px',
            height: '1372px',
            background: Color.background

        },
        styleMain:{
            padding: '80px 85px'
        },
        styleFooter:{
            lineHeight: '18px',
            background: Color.text,
            fontSize: '16px',
            color: Color.background,
            textAlign: 'right',
            padding: '8px 85px',
            margin: 0,
            fontFamily: Color.text
        },
        styleTitle:{

        },
        styleEnglish:{
            fontFamily: Color.font,
            fontSize: '24px'
        }
    }
})