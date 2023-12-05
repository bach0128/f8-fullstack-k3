import "../assets/css/home.scss";
import f8 from "../assets/image/f8.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div>
        <section className="home mt-16">
          <div className="container m-2">
            <div className="row">
              <h2 className="content-header text-center text-3xl">
                Fullstack.edu.vn F8
              </h2>
              <div className="col-4">
                <div className="content">
                  <div className="img-f8">
                    <Image
                      src={f8}
                      style={{
                        maxWidth: "300px",
                        height: "auto",
                      }}
                    />
                  </div>
                  <h3 className="text-body-secondary text-2xl">
                    Các kỹ năng của tôi
                  </h3>
                  <p>
                    <span>Kỹ năng làm việc:</span>
                    REST API, React.js, Next.js, Redux, Context, CSS3, HTML5,
                    UI/UX, Figma, Photoshop...
                  </p>
                  <hr />
                  <p>
                    <span>Các kỹ năng khác:</span>
                    Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm
                    việc, kỹ năng làm việc nhóm tốt so với độ tuổi.
                  </p>
                  <h3 className="text-body-secondary fw-normal">Lịch sử</h3>
                  <p>
                    <span>2016:</span>
                    Trường Trung học Cơ sở nào đó
                  </p>
                  <hr />
                  <p>
                    <span>2017-2019:</span>
                    Các trường Trung học Cơ sở khác
                  </p>
                  <hr />
                  <p>
                    <span>2019-2021:</span>
                    Trường Trung học Phổ thông khác
                  </p>
                  <hr />
                  <p>
                    <span>2021-2023:</span>
                    Học đại học và làm trợ giảng tại F8
                  </p>
                  <hr />
                </div>
              </div>
              <div className="col-8">
                <section>
                  <h2 className="text-center text-body-secondary text-2xl">
                    Thông tin liên hệ
                  </h2>
                  <ul>
                    <li>
                      Phone:{" "}
                      <a target="_blank" href="tel:094368124">
                        094368124
                      </a>
                    </li>
                    <li>
                      Zalo:{" "}
                      <a target="_blank" href="https://zalo.me">
                        https://zalo.me
                      </a>
                    </li>
                    <li>
                      Email:{" "}
                      <a target="_blank" href="mailto:contact@fullstack.edu.vn">
                        contact@fullstack.edu.vn
                      </a>
                    </li>
                    <li>
                      Facebook:{" "}
                      <a
                        target="_blank"
                        href="https://www.facebook.com/groups/f8official"
                      >
                        https://www.facebook.com/groups/f8official
                      </a>
                    </li>
                    <li>
                      Youtube:{" "}
                      <a
                        target="_blank"
                        href="https://www.youtube.com/c/f8vnofficial"
                      >
                        https://www.youtube.com/c/f8vnofficial
                      </a>
                      <hr />
                    </li>
                  </ul>
                </section>
                <section className="border rounded">
                  <h2 className="text-center mt-2 text-body-secondary text-2xl">
                    Các dự án{" "}
                  </h2>
                  <ul>
                    <li>
                      <p className="fw-bold">Project Code snippet</p>
                      <p>Một dự án nhỏ hoàn thành trong vòng một ngày</p>
                      <p>
                        Một trang web đơn giản cho phép tạo và chia sẻ các đoạn
                        code. Sử dụng HTML, CSS, JS và custom elements.
                      </p>
                      <a href="https://codefast.vercel.app/" target="_blank">
                        Demo
                      </a>
                      <a
                        href="https://github.com/duongnguyenf8/demo_custom-element"
                        target="_blank"
                      >
                        Code
                      </a>
                    </li>
                    <hr />
                    <li>
                      <p className="fw-bold">Project blog</p>
                      <p>Một dự án nhỏ hoàn thành trong vòng ba ngày</p>
                      <p>
                        Một trang web blog social với các bài viết về lập trình
                        và học tập. Sử dụng React.js.
                      </p>
                      <a
                        href="https://code-exercise-blog.vercel.app/"
                        target="_blank"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/duongnguyenf8/code_exercise-blog"
                        target="_blank"
                      >
                        Code
                      </a>
                    </li>
                    <hr />
                    <li>
                      <p className="fw-bold">Project 20f8</p>
                      <p>Một dự án hoàn thành trong vòng một ngày</p>
                      <p>
                        Một trò chơi giải đố dựa trên trò chơi 2048. Sử dụng
                        Next.js và Tailwind CSS.
                      </p>
                      <a
                        href="http://f8-2048.sanphamkythuat.online:880/"
                        target="_blank"
                      >
                        Demo
                      </a>
                      <a href="https://codefast.vercel.app/" target="_blank">
                        Code
                      </a>
                    </li>
                    <hr />
                    <a href="https://github.com/duongnguyenf8" target="_blank">
                      https://github.com/duongnguyenf8
                    </a>
                  </ul>
                </section>
                <section>
                  <h2 className="text-center mt-2 text-body-secondary text-2xl">
                    Sở thích cá nhân
                  </h2>
                  <ul>
                    <li>
                      Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ
                      Khác,…
                    </li>
                    <li>
                      Đọc Sách, Học Hỏi Thêm Về Các Ngôn Ngữ Lập Trình Mới Mẻ.
                      Hiện Tại, Tôi Đang Tự Học Python
                    </li>
                    <li>
                      Theo Dõi Các Xu Hướng Công Nghệ, Tin Tức Về Các Sản Phẩm
                      Nổi Tiếng Như Iphone, Huawei, GoogleAI,…
                    </li>
                  </ul>
                </section>
              </div>
              <p className="text-center" style={{ color: "#c2410c" }}>
                © 2023 Fullstack.edu.vn F8. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
