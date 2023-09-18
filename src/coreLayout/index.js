import React from "react";
import { Route } from "react-router-dom";
import "@src/less/index.less";

class CoreLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      arrTop: [
        {
          src: "src/img/民国1.jpg",
        },
        {
          src: "src/img/民国2.jpg",
        },
        {
          src: "src/img/民国3.jpg",
        },
        {
          src: "src/img/民国4.jpg",
        },
        {
          src: "src/img/民国5.jpg",
        },
        {
          src: "src/img/民国6.jpg",
        },
        {
          src: "src/img/民国7.jpg",
        },
        {
          src: "src/img/民国1.jpg",
        },
        {
          src: "src/img/民国8.jpg",
        },
        {
          src: "src/img/民国9.jpg",
        },
      ],
      arrMid: [
        {
          src: "src/img/江边1.jpg",
        },
        {
          src: "src/img/江边2.jpg",
        },
        {
          src: "src/img/江边3.jpg",
        },
        {
          src: "src/img/江边4.jpg",
        },
        {
          src: "src/img/江边5.jpg",
        },
        {
          src: "src/img/江边6.jpg",
        },
        {
          src: "src/img/江边7.jpg",
        },
        {
          src: "src/img/江边8.jpg",
        },
        {
          src: "src/img/江边9.jpg",
        },
        {
          src: "src/img/江边10.jpg",
        },
        {
          src: "src/img/江边11.jpg",
        },
        {
          src: "src/img/江边12.jpg",
        },
      ],
      arrBottom: [
        {
          src: "src/img/森系1.jpg",
        },
        {
          src: "src/img/森系2.jpg",
        },
        {
          src: "src/img/森系3.jpg",
        },
        {
          src: "src/img/森系4.jpg",
        },
        {
          src: "src/img/森系5.jpg",
        },
        {
          src: "src/img/森系6.jpg",
        },
        {
          src: "src/img/森系7.jpg",
        },
        {
          src: "src/img/森系8.jpg",
        },
        {
          src: "src/img/森系9.jpg",
        },
        {
          src: "src/img/森系10.jpg",
        },
      ],
      bigImgSrc: "",
      showBigImg: false,
    };
  }
  render() {
    const { bigImgSrc, showBigImg, arrTop, arrMid, arrBottom } = this.state;

    return showBigImg ? (
      <img
        className="big-img"
        src={bigImgSrc}
        onClick={() => {
          this.setState({
            showBigImg: false,
            bigImgSrc: "",
          });
        }}
      />
    ) : (
      <div class="image-wrapper">
        {arrTop.map((item, index) => {
          return (
            <img
              src={item.src}
              className={`img-top-${index + 1}`}
              alt=""
              draggable="false"
              onClick={() => {
                this.setState({
                  showBigImg: true,
                  bigImgSrc: item.src,
                });
              }}
            />
          );
        })}
        {arrMid.map((item, index) => {
          return (
            <img
              src={item.src}
              className={`img-mid-${index + 1}`}
              alt=""
              draggable="false"
              onClick={() => {
                this.setState({
                  showBigImg: true,
                  bigImgSrc: item.src,
                });
              }}
            />
          );
        })}
        {arrBottom.map((item, index) => {
          return (
            <img
              src={item.src}
              className={`img-bot-${index + 1}`}
              alt=""
              draggable="false"
              onClick={() => {
                this.setState({
                  showBigImg: true,
                  bigImgSrc: item.src,
                });
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default CoreLayout;
