
const container = document.createElement("div")
container.classList.add('container')

const btnRecognition = document.createElement('button')
btnRecognition.classList.add('btn-mic')
btnRecognition.innerText = 'Nhấp vào đây để nhận diện giọng nói'

const span = document.createElement('span')
span.innerHTML = `<i class="icon fa-solid fa-microphone"></i>`

btnRecognition.append(span)

container.append(btnRecognition)

document.body.append(container)

const btnMic = btnRecognition.querySelector(".icon")

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Tạo một thể hiện mới của SpeechRecognition
const recognition = new SpeechRecognition();

// Đặt một số thuộc tính cho việc nhận diện
recognition.lang = "vi-VN"; // Sử dụng tiếng Việt

// Bắt đầu nhận diện khi btn-mic được nhấp vào
btnRecognition.onclick = () => {
  recognition.start();
    span.style.display = 'block'
  console.log("Sẵn sàng nhận lệnh bằng giọng nói.");
};

// Xử lý sự kiện kết quả
recognition.onresult = (event) => {
    span.style.display = 'none'
  // Lấy chuỗi văn bản đã nhận diện được
    const text = (event.results[0][0].transcript).toLowerCase();
    if (text) {
        handleVoice(text)
    }
};

// Dừng nhận diện khi giọng nói kết thúc
recognition.onspeechend = () => {
  recognition.stop();
};

function wait1s (textVoice) {
        const textSearch = `Bạn đang muốn tìm kiếm ${textVoice}?`
        confirm(textSearch) 
} 

const handleVoice = async (text) => {
    const textVoice = text.slice(0, text.length - 1)
    const data = await wait1s(textVoice);
    console.log(textVoice);
    switch(textVoice) {
        case 'google':
            window.open("https://www.google.com/")
            break;

        case 'youtube':
            window.open("https://www.youtube.com/")
            break;

        case 'facebook':
            window.open("https://www.facebook.com/")
            break;

        case 'google drive':
            window.open("https://drive.google.com/")
            break;

        case 'google maps':
            window.open("https://www.google.com/maps")
            break;

        case 'sạc điện thoại':
            window.open("https://www.samsung.com/vn/")
            break;

        case 'chỉ đường vinhomes smart city tây mỗ':
            window.open("https://www.google.com/maps/dir//2P3R%2BVGF+Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97,+T%C3%A2y+M%E1%BB%97,+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0046874,105.738709,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x313453d4ead47a63:0x9af352cfc1f411a1!2m2!1d105.7412839!2d21.0046874?entry=ttu")
            break;

        case 'chỉ đường tới vinhomes smart city tây mỗ':
            window.open("https://www.google.com/maps/dir//2P3R%2BVGF+Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97,+T%C3%A2y+M%E1%BB%97,+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0046874,105.738709,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x313453d4ead47a63:0x9af352cfc1f411a1!2m2!1d105.7412839!2d21.0046874?entry=ttu")
            break;

        case 'tới vinhomes smart city tây mỗ':
            window.open("https://www.google.com/maps/dir//2P3R%2BVGF+Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97,+T%C3%A2y+M%E1%BB%97,+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0046874,105.738709,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x313453d4ead47a63:0x9af352cfc1f411a1!2m2!1d105.7412839!2d21.0046874?entry=ttu")
            break;

        case 'đường tới vinhomes smart city tây mỗ':
            window.open("https://www.google.com/maps/dir//2P3R%2BVGF+Vinhomes+Smart+City+T%C3%A2y+M%E1%BB%97,+T%C3%A2y+M%E1%BB%97,+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0046874,105.738709,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x313453d4ead47a63:0x9af352cfc1f411a1!2m2!1d105.7412839!2d21.0046874?entry=ttu")
            break;
        
        case 'bài hát ai chung tình được mãi':
            window.open("https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20tinh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i")
            break;
        
        case 'mở bài hát ai chung tình được mãi':
            window.open("https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20tinh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i")
            break;

        case 'nghe bài hát ai chung tình được mãi':
            window.open("https://zingmp3.vn/tim-kiem/tat-ca?q=ai%20chung%20tinh%20%C4%91%C6%B0%E1%BB%A3c%20m%C3%A3i")
            break;

            case 'video ai chung tình được mãi':
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            break;

            case 'mở video ai chung tình được mãi':
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            break;

            case 'xem video ai chung tình được mãi':
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            break;

        default:
            alert('Không thực hiện được yêu cầu')
    }
}





