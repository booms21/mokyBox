import React, { useEffect, useState } from "react";
import { screenshot, querySelector as q, createButton } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import c from "../style/index.module.less";
import "react-toastify/dist/ReactToastify.css";

const DYTT_HOST = [
  "www.ygdy8.net",
  "www.dytt8.net",
  "www.ygdy8.com",
  "www.dydytt.net",
  "m.ygdy8.com",
];
const logo =
  "https://bpic.51yuansu.com/pic2/cover/00/38/48/5812aec370057_610.jpg";
const generateScreenshot = () => {
  toast("开始生成 稍等片刻～");
  const a = document.createElement("a");
  const url = location.href;
  a.download = true;
  a.href = "https://urlscan.io/liveshot/?url=" + url;
  a.click();
};

const screenshotCanvas = () => {
  screenshot("截图" + String(location.href) + Date.now());
};

const onCodeEditOn = () => {
  q("code, code *").forEach((item) =>
    item.setAttribute("contenteditable", true)
  );
  toast("可以复制了！");
};
const onCodeEditOff = () => {
  q("code, code *").forEach((item) =>
    item.setAttribute("contenteditable", false)
  );
  toast("暂时关闭复制！");
};

const showPassword = () => {
  q("input[type='password'")[0].setAttribute("type", "text");
  toast("密码已显示！");
};

const showDouBanButton = (poster) => {
  if (!poster) {
    return false;
  }
  const div = document.createElement("div");
  const title = q("meta[name=keywords][content]")[0].content.replace(
    "下载",
    ""
  );
  const searchBtnOnclick = () => {
    window.open(
      "https://search.douban.com/movie/subject_search?search_text=" +
        encodeURIComponent(title)
    );
  };
  const detailBtnOnclick = () => {
    window.open(
      "https://search.douban.com/movie/subject_search?toDeatil=1&search_text=" +
        encodeURIComponent(title)
    );
  };

  div.appendChild(createButton("直通豆瓣电影详情", detailBtnOnclick));
  div.appendChild(createButton("直通豆瓣搜索页", searchBtnOnclick));
  poster.after(div);
};

const Index = () => {
  const [isShow, setIsShow] = useState(true);
  const [translateUppercaseText, setTranslateUppercaseText] = useState("");

  const handleClose = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    console.log("mokyBox 开始运行");
    if (DYTT_HOST.includes(location.host)) {
      showDouBanButton(q("#Zoom > span > img")[0]);
      setTimeout(() => {
        showDouBanButton(q("#Zoom > span > p > img")[0]);
      }, 1000);
    }
    if (
      location.origin === "https://search.douban.com" &&
      location.search.indexOf("?toDeatil=1") > -1
    ) {
      for (let link of document.querySelectorAll(".item-root > a")) {
        if (link.href.indexOf("/subject/") > 1) {
          link.click();
          toast("正在跳转到详情页，稍等片刻～");
          break;
        }
      }
    }
  }, []);

  const translateUppercase = (toLowerOrUpper) => {
    toLowerOrUpper === "toUpper"
      ? setTranslateUppercaseText(translateUppercaseText.toUpperCase())
      : setTranslateUppercaseText(translateUppercaseText.toLowerCase());
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        style={{ display: isShow ? "block" : "none" }}
        className={c["mokyBox"]}
      >
        <header className={c["mokyBox-header"]}>
          <div className={c["title"]} onClick={handleClose}>
            mokyBox-辅助小工具
          </div>
          <span className={c["mokyBox-close-icon"]} onClick={handleClose}>
            — 隐藏
          </span>
        </header>
        <div className={c["mokyBox-main"]}>
          <ul>
            <li>
              <div>
                全网页截图：
                <button onClick={screenshotCanvas} className="mb-button">
                  截 图
                </button>
              </div>
            </li>
            <li>
              <div>
                截图质量有问题？
                <button onClick={generateScreenshot} className="mb-button">
                  urlscan.io生成截图
                </button>
                <div className={c["tip"]}>
                  注：urlscan远程截图不会截图你当前操作的网页状态
                </div>
              </div>
            </li>
            <li>
              <div>
                csdn免登录复制：
                <button onClick={onCodeEditOn} className="mb-button">
                  运行
                </button>
                <button onClick={onCodeEditOff} className="mb-button">
                  关闭
                </button>
              </div>
            </li>

            <li>
              <div>
                一键看密码:
                <button onClick={showPassword} className="mb-button">
                  看密码
                </button>
              </div>
            </li>
            <li>
              <div>电影天堂直通豆瓣详情页（方便看评分，默认开启）</div>
            </li>

            <li>
              <div>
                <div>一键转大小写:</div>
                <div>
                  <textarea
                    className={c["translateUppercase"]}
                    placeholder="一键转大小写"
                    onChange={(e) => setTranslateUppercaseText(e.target.value)}
                    value={translateUppercaseText}
                  ></textarea>
                </div>
                <button
                  onClick={translateUppercase.bind(this, "toUpper")}
                  className="mb-button"
                >
                  转大写
                </button>
                <button
                  onClick={translateUppercase.bind(this, "toLower")}
                  className="mb-button"
                >
                  转小写
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={c["mokyBox-hide"]}
        style={{ display: isShow ? "none" : "flex" }}
        onClick={handleClose}
      >
        <img
          src={logo}
          className={c["mokyBox-hide-logo"]}
          alt="logo"
          title="打开面板"
        />
        打开面板
      </div>
    </>
  );
};

export default Index;
