import JackTest from './module/jacktest.js';

var rm = new Vue({
    el:'#app',
    data:{
        styleApp:{
            width: '1280px',
            height: '1372px',
            background: JackTest.background

        },
        styleMain:{
            padding: '80px 85px',
            display: 'flex'
        },
        styleFooter:{
            lineHeight: '18px',
            background: JackTest.text,
            fontSize: '16px',
            color: JackTest.background,
            textAlign: 'right',
            padding: '8px 85px',
            margin: 0,
            fontFamily: JackTest.text
        },
        styleTitle:{

        },
        styleEnglish:{
            fontFamily: JackTest.font,
            fontSize: '24px',
            fontWeight:'bolder',
            color:JackTest.text
        },
        styleNine:{
            fontFamily: 'PingFang TC',
            fontSize: '56px',
            fontWeight:'bolder',
            color:JackTest.text
        },
        styleAround:{

        },
        styleCenter:{
            padding: '0 30px'
        }
    }
})