
    function checkSign(){
      var zodiacArray = [
      {
        sign: "aries",
        horoscope: "Adventurous, Energetic, Pioneering, Courageous, Enthusiastic, Dynamic, Quick-witted",
        symbol: "img/aries.png"
      },
      {
        sign: "taurus",
        horoscope: "Patient, Reliable, Warmhearted, Loving, Persistent, Determined, Placid, Security Loving",
        symbol: "img/taurus.png"
      },
      {
        sign: "gemini",
        horoscope: "Adabtable, Versatile, Communicative, Witty, Intellectual, Eloquent, Youthful, Lively",
        symbol: "img/gemini.png"
      },
      {
        sign: "cancer",
        horoscope: "Emotional, Loving, Intuitive, Imaginitive, Shrewd, Cautious, Protective, Sympathetic",
        symbol: "img/cancer.png"
      },
      {
        sign: "leo",
        horoscope: "Generous, Warmhearted, Creative, Enthusiastic, Broad-minded, Expansive, Faithful, Loving",
        symbol: "img/leo.png"
      },
      {
        sign: "virgo",
        horoscope: "Modest, Shy, Meticulous, Reliable, Practical, Diligent, Intelligent, Analytical",
        symbol: "img/virgo.png"
      },
      {
        sign: "libra",
        horoscope: "Diplomatic, Urbane, Romantic, Charming, Easygoing, Sociable, Idealistic, Peaceable",
        symbol: "img/libra.png"
      },
      {
        sign: "scorpio",
        horoscope: "Determined, Forceful, Emotional, Intuitive, Powerful, Passionate, Exciting, Magnetic",
        symbol: "img/scorpio.png"
      },
      {
        sign: "sagittarius",
        horoscope: "Optimistic, Freedom-loving, Jovial, Good-Humored, Honest, Straightforward, Intellectual",
        symbol: "img/sagittarius.png"
      },
      {
        sign: "capricorn",
        horoscope: "Practical, Prudent, Ambitious, Disciplined, Patient, Careful, Humorous, Reserved",
        symbol: "img/capricorn.png"
      },
      {
        sign: "aquarius",
        horoscope: "Friendly, Humanitarian, Honest, Loyal, Original, Inventive, Independent, Intellectual",
        symbol: "img/aquarius.png"
      },
      {
        sign: "pisces",
        horoscope: "Imaginitive, Sensitive, Compassionate, Kind, Selfless, Unwordly, Intuitive, Sympathetic",
        symbol: "img/pisces.png"
      },
      ]

      var userSign = document.getElementById("userSign").value



      for(i=0; i < zodiacArray.length; i++) {
        if (userSign == zodiacArray[i].sign) {
          document.getElementById("yourSign").innerHTML = ("What's up  " + userSign + "!!!!")
          document.getElementById("scope").innerHTML = zodiacArray[i].horoscope
          document.getElementById("icon").src = zodiacArray[i].symbol
          return
        }
      }
      alert("Incorrect sign.  Please try again")
    }




















