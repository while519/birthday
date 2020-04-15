// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hi Jo",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Today is your 80 years old birthday",
        "I wish you enjoy this special day",
        "Enjoy every moment",
        "In English corner",
        "There were so much joy and laughters all around",
        "Those years are like treasures to me",
        "and to everybody",
        "I wish we would have another life to do that again",
        "Thank you so much!",
        "May you a day filled with great fun",
        "and a year filled with true happiness!",
        "Thank you for everything!!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Hi Jo": "./imgs/20151211_182431.jpg",
       // "Today is your 80 years old birthday": "./imgs/20150731_192013.jpg",
      //  "I wish you enjoy this special day": 
        "Enjoy every moment": "./imgs/20150731_192013.jpg",
      //  "In English corner":
     //   "There were so much joy and laughters all around": "./imgs/",
        "Those years are like treasures to me": "./imgs/20160816_180707.jpg",
        "and to everybody": "./imgs/FB_IMG_1467757516309.jpg",
     //   "I wish we would have another life to do that again": "./imgs/"
        "Thank you so much!": "./imgs/FB_IMG_1469965977716.jpg",
      //      "May you a day filled with great fun":
          "and a year filled with true happiness!": "./imgs/FB_IMG_1469966017190.jpg",
        "Thank you for everything!!": "./imgs/FB_IMG_1467795946508.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "TURN ON LIGHTS",
        play: "PLAY MUSIC",
        bannar_coming: "LET'S DECORATE",
        balloons_flying: "FLYING WITH BALLOONS",
        cake_fadein: "MOST DELICIOUS CAKE EVER",
        light_candle: "LIGHT CANDLE",
        wish_message: "HAPPY BIRTHDAY",
        story: "A MESSAGE FOR YOU FROM FELIX",
    }
};
