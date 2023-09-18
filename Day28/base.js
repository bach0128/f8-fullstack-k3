var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)
var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
    var currentTime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".play-btn");
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;
var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});


// Karaoke
var dataSong = 
[
  {
    "words": [
      {
        "startTime": 46820,
        "endTime": 47340,
        "data": "Giờ"
      },
      {
        "startTime": 47340,
        "endTime": 47880,
        "data": "ta"
      },
      {
        "startTime": 47880,
        "endTime": 47880,
        "data": "chẳng"
      },
      {
        "startTime": 47880,
        "endTime": 48380,
        "data": "còn"
      },
      {
        "startTime": 48380,
        "endTime": 49460,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 49460,
        "endTime": 49980,
        "data": "Mãi"
      },
      {
        "startTime": 49980,
        "endTime": 49980,
        "data": "trắng"
      },
      {
        "startTime": 49980,
        "endTime": 50570,
        "data": "tay"
      },
      {
        "startTime": 50570,
        "endTime": 51090,
        "data": "mà"
      },
      {
        "startTime": 51090,
        "endTime": 52150,
        "data": "thôi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 52150,
        "endTime": 53210,
        "data": "Đời"
      },
      {
        "startTime": 53210,
        "endTime": 53760,
        "data": "bạc"
      },
      {
        "startTime": 53760,
        "endTime": 53760,
        "data": "gian"
      },
      {
        "startTime": 53760,
        "endTime": 54280,
        "data": "lắm"
      },
      {
        "startTime": 54280,
        "endTime": 55370,
        "data": "phũ"
      },
      {
        "startTime": 55370,
        "endTime": 57480,
        "data": "phàng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 57480,
        "endTime": 58040,
        "data": "Tiền"
      },
      {
        "startTime": 58040,
        "endTime": 58040,
        "data": "có"
      },
      {
        "startTime": 58040,
        "endTime": 58570,
        "data": "kiếm"
      },
      {
        "startTime": 58570,
        "endTime": 59100,
        "data": "như"
      },
      {
        "startTime": 59100,
        "endTime": 59620,
        "data": "nước"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 59620,
        "endTime": 59620,
        "data": "Rồi"
      },
      {
        "startTime": 59620,
        "endTime": 60170,
        "data": "cũng"
      },
      {
        "startTime": 60170,
        "endTime": 61200,
        "data": "sẽ"
      },
      {
        "startTime": 61200,
        "endTime": 61740,
        "data": "trôi"
      },
      {
        "startTime": 61740,
        "endTime": 62820,
        "data": "hết"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 62820,
        "endTime": 63350,
        "data": "Tay"
      },
      {
        "startTime": 63350,
        "endTime": 63890,
        "data": "không"
      },
      {
        "startTime": 63890,
        "endTime": 64410,
        "data": "trắng"
      },
      {
        "startTime": 64410,
        "endTime": 64410,
        "data": "tay"
      },
      {
        "startTime": 64410,
        "endTime": 64920,
        "data": "lại"
      },
      {
        "startTime": 64920,
        "endTime": 65470,
        "data": "về"
      },
      {
        "startTime": 65470,
        "endTime": 68130,
        "data": "không"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 68130,
        "endTime": 68670,
        "data": "Đời"
      },
      {
        "startTime": 68670,
        "endTime": 69190,
        "data": "phiêu"
      },
      {
        "startTime": 69190,
        "endTime": 69190,
        "data": "lưu"
      },
      {
        "startTime": 69190,
        "endTime": 69710,
        "data": "là"
      },
      {
        "startTime": 69710,
        "endTime": 70770,
        "data": "thế"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 70770,
        "endTime": 71290,
        "data": "Không"
      },
      {
        "startTime": 71290,
        "endTime": 71870,
        "data": "biết"
      },
      {
        "startTime": 71870,
        "endTime": 72390,
        "data": "đến"
      },
      {
        "startTime": 72390,
        "endTime": 72390,
        "data": "ngày"
      },
      {
        "startTime": 72390,
        "endTime": 73420,
        "data": "mai"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 73420,
        "endTime": 74510,
        "data": "Nên"
      },
      {
        "startTime": 74510,
        "endTime": 75030,
        "data": "giờ"
      },
      {
        "startTime": 75030,
        "endTime": 75030,
        "data": "đây"
      },
      {
        "startTime": 75030,
        "endTime": 75550,
        "data": "mới"
      },
      {
        "startTime": 75550,
        "endTime": 76080,
        "data": "đắng"
      },
      {
        "startTime": 76080,
        "endTime": 78750,
        "data": "cay"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 78750,
        "endTime": 79260,
        "data": "Ngồi"
      },
      {
        "startTime": 79260,
        "endTime": 79790,
        "data": "trước"
      },
      {
        "startTime": 79790,
        "endTime": 79790,
        "data": "tấm"
      },
      {
        "startTime": 79790,
        "endTime": 80330,
        "data": "gương"
      },
      {
        "startTime": 80330,
        "endTime": 80890,
        "data": "sáng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 80890,
        "endTime": 80890,
        "data": "Rọi"
      },
      {
        "startTime": 80890,
        "endTime": 81400,
        "data": "vào"
      },
      {
        "startTime": 81400,
        "endTime": 81930,
        "data": "đó"
      },
      {
        "startTime": 81930,
        "endTime": 82460,
        "data": "mới"
      },
      {
        "startTime": 82460,
        "endTime": 84080,
        "data": "thấy"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 84080,
        "endTime": 84080,
        "data": "Thân"
      },
      {
        "startTime": 84080,
        "endTime": 85120,
        "data": "xác"
      },
      {
        "startTime": 85120,
        "endTime": 85120,
        "data": "hoang"
      },
      {
        "startTime": 85120,
        "endTime": 85660,
        "data": "tàn"
      },
      {
        "startTime": 85660,
        "endTime": 86180,
        "data": "không"
      },
      {
        "startTime": 86180,
        "endTime": 86180,
        "data": "nhận"
      },
      {
        "startTime": 86180,
        "endTime": 89180,
        "data": "ra"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 89380,
        "endTime": 89900,
        "data": "Ta"
      },
      {
        "startTime": 89900,
        "endTime": 90450,
        "data": "mang"
      },
      {
        "startTime": 90450,
        "endTime": 90450,
        "data": "bao"
      },
      {
        "startTime": 90450,
        "endTime": 90950,
        "data": "tội"
      },
      {
        "startTime": 90950,
        "endTime": 92030,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 92030,
        "endTime": 92540,
        "data": "Nên"
      },
      {
        "startTime": 92540,
        "endTime": 93100,
        "data": "thân"
      },
      {
        "startTime": 93100,
        "endTime": 93100,
        "data": "ta"
      },
      {
        "startTime": 93100,
        "endTime": 93620,
        "data": "giờ"
      },
      {
        "startTime": 93620,
        "endTime": 94680,
        "data": "đây"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 94680,
        "endTime": 95220,
        "data": "Kiếp"
      },
      {
        "startTime": 95220,
        "endTime": 95730,
        "data": "sống"
      },
      {
        "startTime": 95730,
        "endTime": 96260,
        "data": "không"
      },
      {
        "startTime": 96260,
        "endTime": 96260,
        "data": "nhà,"
      },
      {
        "startTime": 96260,
        "endTime": 96830,
        "data": "không"
      },
      {
        "startTime": 96830,
        "endTime": 97400,
        "data": "người"
      },
      {
        "startTime": 97400,
        "endTime": 100060,
        "data": "thân"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 100060,
        "endTime": 100580,
        "data": "Ta"
      },
      {
        "startTime": 100580,
        "endTime": 100580,
        "data": "mang"
      },
      {
        "startTime": 100580,
        "endTime": 101120,
        "data": "bao"
      },
      {
        "startTime": 101120,
        "endTime": 101670,
        "data": "tội"
      },
      {
        "startTime": 101670,
        "endTime": 102190,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 102190,
        "endTime": 102710,
        "data": "Người"
      },
      {
        "startTime": 102710,
        "endTime": 103250,
        "data": "ơi"
      },
      {
        "startTime": 103250,
        "endTime": 103250,
        "data": "ta"
      },
      {
        "startTime": 103250,
        "endTime": 103760,
        "data": "đâu"
      },
      {
        "startTime": 103760,
        "endTime": 104310,
        "data": "còn"
      },
      {
        "startTime": 104310,
        "endTime": 105360,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 105360,
        "endTime": 105880,
        "data": "Xin"
      },
      {
        "startTime": 105880,
        "endTime": 106450,
        "data": "hãy"
      },
      {
        "startTime": 106450,
        "endTime": 106970,
        "data": "tránh"
      },
      {
        "startTime": 106970,
        "endTime": 107490,
        "data": "xa"
      },
      {
        "startTime": 107490,
        "endTime": 107490,
        "data": "kiếp"
      },
      {
        "startTime": 107490,
        "endTime": 108020,
        "data": "đỏ"
      },
      {
        "startTime": 108020,
        "endTime": 110690,
        "data": "đen"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 110690,
        "endTime": 111230,
        "data": "Giờ"
      },
      {
        "startTime": 111230,
        "endTime": 111750,
        "data": "ta"
      },
      {
        "startTime": 111750,
        "endTime": 111750,
        "data": "chẳng"
      },
      {
        "startTime": 111750,
        "endTime": 112260,
        "data": "còn"
      },
      {
        "startTime": 112260,
        "endTime": 113330,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 113330,
        "endTime": 113850,
        "data": "Mãi"
      },
      {
        "startTime": 113850,
        "endTime": 114400,
        "data": "trắng"
      },
      {
        "startTime": 114400,
        "endTime": 114400,
        "data": "tay"
      },
      {
        "startTime": 114400,
        "endTime": 114940,
        "data": "mà"
      },
      {
        "startTime": 114940,
        "endTime": 115990,
        "data": "thôi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 115990,
        "endTime": 117080,
        "data": "Đời"
      },
      {
        "startTime": 117080,
        "endTime": 117590,
        "data": "bạc"
      },
      {
        "startTime": 117590,
        "endTime": 118140,
        "data": "gian"
      },
      {
        "startTime": 118140,
        "endTime": 118650,
        "data": "lắm"
      },
      {
        "startTime": 118650,
        "endTime": 119170,
        "data": "phũ"
      },
      {
        "startTime": 119170,
        "endTime": 121310,
        "data": "phàng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 121310,
        "endTime": 121840,
        "data": "Tiền"
      },
      {
        "startTime": 121840,
        "endTime": 122350,
        "data": "có"
      },
      {
        "startTime": 122350,
        "endTime": 122350,
        "data": "kiếm"
      },
      {
        "startTime": 122350,
        "endTime": 122900,
        "data": "như"
      },
      {
        "startTime": 122900,
        "endTime": 123450,
        "data": "nước"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 123450,
        "endTime": 123970,
        "data": "Rồi"
      },
      {
        "startTime": 123970,
        "endTime": 124510,
        "data": "cũng"
      },
      {
        "startTime": 124510,
        "endTime": 125020,
        "data": "sẽ"
      },
      {
        "startTime": 125020,
        "endTime": 125540,
        "data": "trôi"
      },
      {
        "startTime": 125540,
        "endTime": 126630,
        "data": "hết"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 126630,
        "endTime": 127130,
        "data": "Tay"
      },
      {
        "startTime": 127130,
        "endTime": 127670,
        "data": "không"
      },
      {
        "startTime": 127670,
        "endTime": 128220,
        "data": "trắng"
      },
      {
        "startTime": 128220,
        "endTime": 128730,
        "data": "tay"
      },
      {
        "startTime": 128730,
        "endTime": 128730,
        "data": "lại"
      },
      {
        "startTime": 128730,
        "endTime": 129270,
        "data": "về"
      },
      {
        "startTime": 129270,
        "endTime": 131920,
        "data": "không"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 131920,
        "endTime": 132470,
        "data": "Đời"
      },
      {
        "startTime": 132470,
        "endTime": 132990,
        "data": "phiêu"
      },
      {
        "startTime": 132990,
        "endTime": 132990,
        "data": "lưu"
      },
      {
        "startTime": 132990,
        "endTime": 133520,
        "data": "là"
      },
      {
        "startTime": 133520,
        "endTime": 134590,
        "data": "thế"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 134590,
        "endTime": 135110,
        "data": "Không"
      },
      {
        "startTime": 135110,
        "endTime": 135660,
        "data": "biết"
      },
      {
        "startTime": 135660,
        "endTime": 135660,
        "data": "đến"
      },
      {
        "startTime": 135660,
        "endTime": 136180,
        "data": "ngày"
      },
      {
        "startTime": 136180,
        "endTime": 137240,
        "data": "mai"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 137240,
        "endTime": 138300,
        "data": "Nên"
      },
      {
        "startTime": 138300,
        "endTime": 138850,
        "data": "giờ"
      },
      {
        "startTime": 138850,
        "endTime": 139370,
        "data": "đây"
      },
      {
        "startTime": 139370,
        "endTime": 139900,
        "data": "mới"
      },
      {
        "startTime": 139900,
        "endTime": 139900,
        "data": "đắng"
      },
      {
        "startTime": 139900,
        "endTime": 142550,
        "data": "cay"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 142550,
        "endTime": 143110,
        "data": "Ngồi"
      },
      {
        "startTime": 143110,
        "endTime": 143610,
        "data": "trước"
      },
      {
        "startTime": 143610,
        "endTime": 144130,
        "data": "tấm"
      },
      {
        "startTime": 144130,
        "endTime": 144130,
        "data": "gương"
      },
      {
        "startTime": 144130,
        "endTime": 144660,
        "data": "sáng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 144660,
        "endTime": 145220,
        "data": "Rọi"
      },
      {
        "startTime": 145220,
        "endTime": 145740,
        "data": "vào"
      },
      {
        "startTime": 145740,
        "endTime": 146260,
        "data": "đó"
      },
      {
        "startTime": 146260,
        "endTime": 146800,
        "data": "mới"
      },
      {
        "startTime": 146800,
        "endTime": 147870,
        "data": "thấy"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 147870,
        "endTime": 148410,
        "data": "Thân"
      },
      {
        "startTime": 148410,
        "endTime": 148930,
        "data": "xác"
      },
      {
        "startTime": 148930,
        "endTime": 149440,
        "data": "hoang"
      },
      {
        "startTime": 149440,
        "endTime": 149990,
        "data": "tàn"
      },
      {
        "startTime": 149990,
        "endTime": 149990,
        "data": "không"
      },
      {
        "startTime": 149990,
        "endTime": 150510,
        "data": "nhận"
      },
      {
        "startTime": 150510,
        "endTime": 153180,
        "data": "ra"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 153180,
        "endTime": 153700,
        "data": "Ta"
      },
      {
        "startTime": 153700,
        "endTime": 154250,
        "data": "mang"
      },
      {
        "startTime": 154250,
        "endTime": 154250,
        "data": "bao"
      },
      {
        "startTime": 154250,
        "endTime": 154770,
        "data": "tội"
      },
      {
        "startTime": 154770,
        "endTime": 155830,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 155830,
        "endTime": 156350,
        "data": "Nên"
      },
      {
        "startTime": 156350,
        "endTime": 156890,
        "data": "thân"
      },
      {
        "startTime": 156890,
        "endTime": 157440,
        "data": "ta"
      },
      {
        "startTime": 157440,
        "endTime": 157440,
        "data": "giờ"
      },
      {
        "startTime": 157440,
        "endTime": 159030,
        "data": "đây"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 159030,
        "endTime": 159030,
        "data": "Kiếp"
      },
      {
        "startTime": 159030,
        "endTime": 159560,
        "data": "sống"
      },
      {
        "startTime": 159560,
        "endTime": 160090,
        "data": "không"
      },
      {
        "startTime": 160090,
        "endTime": 160610,
        "data": "nhà,"
      },
      {
        "startTime": 160610,
        "endTime": 161160,
        "data": "không"
      },
      {
        "startTime": 161160,
        "endTime": 161700,
        "data": "người"
      },
      {
        "startTime": 161700,
        "endTime": 164340,
        "data": "thân"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 164340,
        "endTime": 164340,
        "data": "Ta"
      },
      {
        "startTime": 164340,
        "endTime": 164870,
        "data": "mang"
      },
      {
        "startTime": 164870,
        "endTime": 165400,
        "data": "bao"
      },
      {
        "startTime": 165400,
        "endTime": 165920,
        "data": "tội"
      },
      {
        "startTime": 165920,
        "endTime": 166470,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 166470,
        "endTime": 166990,
        "data": "Người"
      },
      {
        "startTime": 166990,
        "endTime": 167510,
        "data": "ơi"
      },
      {
        "startTime": 167510,
        "endTime": 167510,
        "data": "ta"
      },
      {
        "startTime": 167510,
        "endTime": 168060,
        "data": "đâu"
      },
      {
        "startTime": 168060,
        "endTime": 168600,
        "data": "còn"
      },
      {
        "startTime": 168600,
        "endTime": 169640,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 169640,
        "endTime": 169640,
        "data": "Xin"
      },
      {
        "startTime": 169640,
        "endTime": 170180,
        "data": "hãy"
      },
      {
        "startTime": 170180,
        "endTime": 170740,
        "data": "tránh"
      },
      {
        "startTime": 170740,
        "endTime": 171260,
        "data": "xa"
      },
      {
        "startTime": 171260,
        "endTime": 171810,
        "data": "kiếp"
      },
      {
        "startTime": 171810,
        "endTime": 172370,
        "data": "đỏ"
      },
      {
        "startTime": 172370,
        "endTime": 175370,
        "data": "đen"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 198510,
        "endTime": 199070,
        "data": "Giờ"
      },
      {
        "startTime": 199070,
        "endTime": 199610,
        "data": "ta"
      },
      {
        "startTime": 199610,
        "endTime": 199610,
        "data": "chẳng"
      },
      {
        "startTime": 199610,
        "endTime": 200150,
        "data": "còn"
      },
      {
        "startTime": 200150,
        "endTime": 201230,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 201230,
        "endTime": 201770,
        "data": "Mãi"
      },
      {
        "startTime": 201770,
        "endTime": 202320,
        "data": "trắng"
      },
      {
        "startTime": 202320,
        "endTime": 202320,
        "data": "tay"
      },
      {
        "startTime": 202320,
        "endTime": 202830,
        "data": "mà"
      },
      {
        "startTime": 202830,
        "endTime": 203900,
        "data": "thôi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 203900,
        "endTime": 204940,
        "data": "Đời"
      },
      {
        "startTime": 204940,
        "endTime": 205480,
        "data": "bạc"
      },
      {
        "startTime": 205480,
        "endTime": 206040,
        "data": "gian"
      },
      {
        "startTime": 206040,
        "endTime": 206550,
        "data": "lắm"
      },
      {
        "startTime": 206550,
        "endTime": 207080,
        "data": "phũ"
      },
      {
        "startTime": 207080,
        "endTime": 209220,
        "data": "phàng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 209220,
        "endTime": 209740,
        "data": "Tiền"
      },
      {
        "startTime": 209740,
        "endTime": 210280,
        "data": "có"
      },
      {
        "startTime": 210280,
        "endTime": 210280,
        "data": "kiếm"
      },
      {
        "startTime": 210280,
        "endTime": 210800,
        "data": "như"
      },
      {
        "startTime": 210800,
        "endTime": 211310,
        "data": "nước"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 211310,
        "endTime": 211840,
        "data": "Rồi"
      },
      {
        "startTime": 211840,
        "endTime": 212390,
        "data": "cũng"
      },
      {
        "startTime": 212390,
        "endTime": 212930,
        "data": "sẽ"
      },
      {
        "startTime": 212930,
        "endTime": 213450,
        "data": "trôi"
      },
      {
        "startTime": 213450,
        "endTime": 214510,
        "data": "hết"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 214510,
        "endTime": 215070,
        "data": "Tay"
      },
      {
        "startTime": 215070,
        "endTime": 215620,
        "data": "không"
      },
      {
        "startTime": 215620,
        "endTime": 216150,
        "data": "trắng"
      },
      {
        "startTime": 216150,
        "endTime": 216670,
        "data": "tay"
      },
      {
        "startTime": 216670,
        "endTime": 216670,
        "data": "lại"
      },
      {
        "startTime": 216670,
        "endTime": 217200,
        "data": "về"
      },
      {
        "startTime": 217200,
        "endTime": 220200,
        "data": "không"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 220380,
        "endTime": 220380,
        "data": "Đời"
      },
      {
        "startTime": 220380,
        "endTime": 220920,
        "data": "phiêu"
      },
      {
        "startTime": 220920,
        "endTime": 221450,
        "data": "lưu"
      },
      {
        "startTime": 221450,
        "endTime": 221450,
        "data": "là"
      },
      {
        "startTime": 221450,
        "endTime": 222520,
        "data": "thế"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 222520,
        "endTime": 223040,
        "data": "Không"
      },
      {
        "startTime": 223040,
        "endTime": 223570,
        "data": "biết"
      },
      {
        "startTime": 223570,
        "endTime": 223570,
        "data": "đến"
      },
      {
        "startTime": 223570,
        "endTime": 224130,
        "data": "ngày"
      },
      {
        "startTime": 224130,
        "endTime": 225220,
        "data": "mai"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 225220,
        "endTime": 226280,
        "data": "Nên"
      },
      {
        "startTime": 226280,
        "endTime": 226800,
        "data": "giờ"
      },
      {
        "startTime": 226800,
        "endTime": 227330,
        "data": "đây"
      },
      {
        "startTime": 227330,
        "endTime": 227330,
        "data": "mới"
      },
      {
        "startTime": 227330,
        "endTime": 227840,
        "data": "đắng"
      },
      {
        "startTime": 227840,
        "endTime": 230840,
        "data": "cay"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 231050,
        "endTime": 231050,
        "data": "Ngồi"
      },
      {
        "startTime": 231050,
        "endTime": 231580,
        "data": "trước"
      },
      {
        "startTime": 231580,
        "endTime": 232130,
        "data": "tấm"
      },
      {
        "startTime": 232130,
        "endTime": 232130,
        "data": "gương"
      },
      {
        "startTime": 232130,
        "endTime": 232620,
        "data": "sáng"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 232620,
        "endTime": 233170,
        "data": "Rọi"
      },
      {
        "startTime": 233170,
        "endTime": 233710,
        "data": "vào"
      },
      {
        "startTime": 233710,
        "endTime": 234220,
        "data": "đó"
      },
      {
        "startTime": 234220,
        "endTime": 234760,
        "data": "mới"
      },
      {
        "startTime": 234760,
        "endTime": 236350,
        "data": "thấy"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 236350,
        "endTime": 236350,
        "data": "Thân"
      },
      {
        "startTime": 236350,
        "endTime": 236890,
        "data": "xác"
      },
      {
        "startTime": 236890,
        "endTime": 237410,
        "data": "hoang"
      },
      {
        "startTime": 237410,
        "endTime": 237970,
        "data": "tàn"
      },
      {
        "startTime": 237970,
        "endTime": 237970,
        "data": "không"
      },
      {
        "startTime": 237970,
        "endTime": 238520,
        "data": "nhận"
      },
      {
        "startTime": 238520,
        "endTime": 241520,
        "data": "ra"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 241730,
        "endTime": 241730,
        "data": "Ta"
      },
      {
        "startTime": 241730,
        "endTime": 242230,
        "data": "mang"
      },
      {
        "startTime": 242230,
        "endTime": 242770,
        "data": "bao"
      },
      {
        "startTime": 242770,
        "endTime": 242770,
        "data": "tội"
      },
      {
        "startTime": 242770,
        "endTime": 243830,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 243830,
        "endTime": 244350,
        "data": "Nên"
      },
      {
        "startTime": 244350,
        "endTime": 244900,
        "data": "thân"
      },
      {
        "startTime": 244900,
        "endTime": 244900,
        "data": "ta"
      },
      {
        "startTime": 244900,
        "endTime": 245440,
        "data": "giờ"
      },
      {
        "startTime": 245440,
        "endTime": 246480,
        "data": "đây"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 246480,
        "endTime": 247020,
        "data": "Kiếp"
      },
      {
        "startTime": 247020,
        "endTime": 247540,
        "data": "sống"
      },
      {
        "startTime": 247540,
        "endTime": 248070,
        "data": "không"
      },
      {
        "startTime": 248070,
        "endTime": 248640,
        "data": "nhà,"
      },
      {
        "startTime": 248640,
        "endTime": 248640,
        "data": "không"
      },
      {
        "startTime": 248640,
        "endTime": 249170,
        "data": "người"
      },
      {
        "startTime": 249170,
        "endTime": 251810,
        "data": "thân"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 251810,
        "endTime": 252350,
        "data": "Ta"
      },
      {
        "startTime": 252350,
        "endTime": 252860,
        "data": "mang"
      },
      {
        "startTime": 252860,
        "endTime": 253410,
        "data": "bao"
      },
      {
        "startTime": 253410,
        "endTime": 253410,
        "data": "tội"
      },
      {
        "startTime": 253410,
        "endTime": 254450,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 254450,
        "endTime": 254970,
        "data": "Người"
      },
      {
        "startTime": 254970,
        "endTime": 255550,
        "data": "ơi"
      },
      {
        "startTime": 255550,
        "endTime": 255550,
        "data": "ta"
      },
      {
        "startTime": 255550,
        "endTime": 256050,
        "data": "đâu"
      },
      {
        "startTime": 256050,
        "endTime": 256580,
        "data": "còn"
      },
      {
        "startTime": 256580,
        "endTime": 257650,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 257650,
        "endTime": 257650,
        "data": "Xin"
      },
      {
        "startTime": 257650,
        "endTime": 258160,
        "data": "hãy"
      },
      {
        "startTime": 258160,
        "endTime": 258710,
        "data": "tránh"
      },
      {
        "startTime": 258710,
        "endTime": 259260,
        "data": "xa"
      },
      {
        "startTime": 259260,
        "endTime": 259780,
        "data": "kiếp"
      },
      {
        "startTime": 259780,
        "endTime": 259780,
        "data": "đỏ"
      },
      {
        "startTime": 259780,
        "endTime": 262780,
        "data": "đen"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 262940,
        "endTime": 263480,
        "data": "Ta"
      },
      {
        "startTime": 263480,
        "endTime": 263480,
        "data": "mang"
      },
      {
        "startTime": 263480,
        "endTime": 264040,
        "data": "bao"
      },
      {
        "startTime": 264040,
        "endTime": 264560,
        "data": "tội"
      },
      {
        "startTime": 264560,
        "endTime": 265620,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 265620,
        "endTime": 265620,
        "data": "Nên"
      },
      {
        "startTime": 265620,
        "endTime": 266140,
        "data": "thân"
      },
      {
        "startTime": 266140,
        "endTime": 266650,
        "data": "ta"
      },
      {
        "startTime": 266650,
        "endTime": 266650,
        "data": "giờ"
      },
      {
        "startTime": 266650,
        "endTime": 267790,
        "data": "đây"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 267790,
        "endTime": 268340,
        "data": "Kiếp"
      },
      {
        "startTime": 268340,
        "endTime": 268850,
        "data": "sống"
      },
      {
        "startTime": 268850,
        "endTime": 269390,
        "data": "không"
      },
      {
        "startTime": 269390,
        "endTime": 269910,
        "data": "nhà,"
      },
      {
        "startTime": 269910,
        "endTime": 270470,
        "data": "không"
      },
      {
        "startTime": 270470,
        "endTime": 270470,
        "data": "người"
      },
      {
        "startTime": 270470,
        "endTime": 273150,
        "data": "thân"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 273150,
        "endTime": 273700,
        "data": "Ta"
      },
      {
        "startTime": 273700,
        "endTime": 274190,
        "data": "mang"
      },
      {
        "startTime": 274190,
        "endTime": 274740,
        "data": "bao"
      },
      {
        "startTime": 274740,
        "endTime": 274740,
        "data": "tội"
      },
      {
        "startTime": 274740,
        "endTime": 275810,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 275810,
        "endTime": 276320,
        "data": "Người"
      },
      {
        "startTime": 276320,
        "endTime": 276870,
        "data": "ơi"
      },
      {
        "startTime": 276870,
        "endTime": 276870,
        "data": "ta"
      },
      {
        "startTime": 276870,
        "endTime": 277380,
        "data": "đâu"
      },
      {
        "startTime": 277380,
        "endTime": 277920,
        "data": "còn"
      },
      {
        "startTime": 277920,
        "endTime": 279000,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 279000,
        "endTime": 279000,
        "data": "Xin"
      },
      {
        "startTime": 279000,
        "endTime": 279520,
        "data": "hãy"
      },
      {
        "startTime": 279520,
        "endTime": 280070,
        "data": "tránh"
      },
      {
        "startTime": 280070,
        "endTime": 280570,
        "data": "xa"
      },
      {
        "startTime": 280570,
        "endTime": 281090,
        "data": "kiếp"
      },
      {
        "startTime": 281090,
        "endTime": 281650,
        "data": "đỏ"
      },
      {
        "startTime": 281650,
        "endTime": 284290,
        "data": "đen"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 284290,
        "endTime": 284290,
        "data": "Ta"
      },
      {
        "startTime": 284290,
        "endTime": 284860,
        "data": "mang"
      },
      {
        "startTime": 284860,
        "endTime": 285410,
        "data": "bao"
      },
      {
        "startTime": 285410,
        "endTime": 285410,
        "data": "tội"
      },
      {
        "startTime": 285410,
        "endTime": 286490,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 286490,
        "endTime": 287010,
        "data": "Người"
      },
      {
        "startTime": 287010,
        "endTime": 287550,
        "data": "ơi"
      },
      {
        "startTime": 287550,
        "endTime": 287550,
        "data": "ta"
      },
      {
        "startTime": 287550,
        "endTime": 288070,
        "data": "đâu"
      },
      {
        "startTime": 288070,
        "endTime": 288620,
        "data": "còn"
      },
      {
        "startTime": 288620,
        "endTime": 289690,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 289690,
        "endTime": 290200,
        "data": "Xin"
      },
      {
        "startTime": 290200,
        "endTime": 290720,
        "data": "hãy"
      },
      {
        "startTime": 290720,
        "endTime": 290720,
        "data": "tránh"
      },
      {
        "startTime": 290720,
        "endTime": 291260,
        "data": "xa"
      },
      {
        "startTime": 291260,
        "endTime": 291820,
        "data": "kiếp"
      },
      {
        "startTime": 291820,
        "endTime": 291820,
        "data": "đỏ"
      },
      {
        "startTime": 291820,
        "endTime": 294820,
        "data": "đen"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 295020,
        "endTime": 295540,
        "data": "Ta"
      },
      {
        "startTime": 295540,
        "endTime": 296080,
        "data": "mang"
      },
      {
        "startTime": 296080,
        "endTime": 296080,
        "data": "bao"
      },
      {
        "startTime": 296080,
        "endTime": 296620,
        "data": "tội"
      },
      {
        "startTime": 296620,
        "endTime": 297140,
        "data": "lỗi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 297140,
        "endTime": 297690,
        "data": "Người"
      },
      {
        "startTime": 297690,
        "endTime": 297690,
        "data": "ơi"
      },
      {
        "startTime": 297690,
        "endTime": 298200,
        "data": "ta"
      },
      {
        "startTime": 298200,
        "endTime": 298730,
        "data": "đâu"
      },
      {
        "startTime": 298730,
        "endTime": 299280,
        "data": "còn"
      },
      {
        "startTime": 299280,
        "endTime": 300340,
        "data": "chi"
      }
    ]
  },
  {
    "words": [
      {
        "startTime": 300340,
        "endTime": 300340,
        "data": "Xin"
      },
      {
        "startTime": 300340,
        "endTime": 301400,
        "data": "hãy"
      },
      {
        "startTime": 301400,
        "endTime": 301400,
        "data": "tránh"
      },
      {
        "startTime": 301400,
        "endTime": 301910,
        "data": "xa"
      },
      {
        "startTime": 301910,
        "endTime": 302440,
        "data": "kiếp"
      },
      {
        "startTime": 302440,
        "endTime": 303000,
        "data": "đỏ"
      },
      {
        "startTime": 303000,
        "endTime": 304000,
        "data": "đen"
      }
    ]
  }
]

var karaoke = document.querySelector(".karaoke");
var karaokeBtn = document.querySelector(".open-karaoke button");
var karaokeClose = karaoke.querySelector(".close");
var karaokeLyric = karaoke.querySelector(".karaoke-lyric");
var container = document.querySelector('.container')

var lyricArr = [];
var songInfor = document.createElement('div')
songInfor.innerHTML = `<p>Kiếp đỏ đen - Duy Mạnh</p>`
// đưa tất cả lời vào 1 mảng mới 
dataSong.forEach(function(param) {  
    lyricArr.push(param.words);
});
// "words": [
//   {
//     "startTime": 46820,
//     "endTime": 47340,
//     "data": "Giờ"
//   },
//   {
//     "startTime": 47340,
//     "endTime": 47880,
//     "data": "ta"
//   },
//   {
//     "startTime": 47880,
//     "endTime": 47880,
//     "data": "chẳng"
//   },
//   {
//     "startTime": 47880,
//     "endTime": 48380,
//     "data": "còn"
//   },
//   {
//     "startTime": 48380,
//     "endTime": 49460,
//     "data": "chi"
//   }
// ]
  var showLyric = function(time) {
    var checkTimeInParam = lyricArr.findIndex(function(item) {
      if (time >= item[0].startTime && time <= item[item.length - 1].endTime) return true;
  });
  // check đoạn dạo nhạc đầu và cuối bài hát
  if (time < lyricArr[0][0].startTime - 1000 || time > lyricArr[lyricArr.length - 1][lyricArr[lyricArr.length - 1].length - 1].endTime + 1000) {
    karaokeLyric.innerText = "";
    karaokeLyric.append(songInfor);
  }
  if (checkTimeInParam !== -1) {
  // check đoạn nhạc dạo giữa bài hát 
      var checkTimeInParam2 = lyricArr.findIndex(function(item, index) {
        if (lyricArr[index + 1] && lyricArr[index + 1][0].startTime - lyricArr[index][lyricArr[index].length - 1].endTime  < 6000) {
          return true
        } 
      })
      if (checkTimeInParam2 !== -1) {
        karaokeLyric.innerText = "";
        param = document.createElement('p')
        var spanParam = document.createElement("span");
          lyricArr.find(function(item, index) {
            if (item[0].startTime < time && time < item[item.length - 1].endTime) {
              item.forEach(function(item2) {
                spanParam.innerText += item2.data + ` `
              })
            }
          })
        param.append(spanParam)
        karaokeLyric.append(param)
      } else {
          karaokeLyric.innerText = "";
          karaokeLyric.append(songInfor);
        }
    }
  }


karaokeBtn.addEventListener('click', function() {
  karaoke.classList.add('show')
})

karaokeClose.addEventListener('click', function() {
  karaoke.classList.remove('show')
})

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);
    handleUpdateValue(value);

    showLyric(audio.currentTime * 1000);
  }
});