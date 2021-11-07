import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapPrac() {
  const wrapperRef = useRef(null);
  const textBoxRef = useRef([]);
  textBoxRef.current = [];

  useEffect(() => {
    gsap.set(wrapperRef.current, {
      //<--이거 붙이니 갑자기 고정이 되기 시작??? 길이와 관련? + 텍스트 속도는.. 길이와 관련있는건가?
      height: `${(textBoxRef.current.length - 1) * 100}vh` //ㅇ\원래 다름..어레이라
    });

    let tl = gsap.timeline();

    const hide = (index) => {
      tl.fromTo(
        textBoxRef.current[index], //이렇게 접근하니 개별 엘리먼트들이 이동!
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -100
        },
        index === 0 ? 0 : ">"
      );
    };
    const show = (index) => {
      tl.fromTo(
        textBoxRef.current[index],
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0
        },
        index === 0 ? 0 : ">"
      );
    };

    textBoxRef.current.forEach((_, index) => {
      if (index === 0) {
        hide(index);
      } else if (index === 1) {
        show(index);
      } else {
        hide(index - 1);
        show(index);
      }
    });

    textBoxRef.current.forEach((pannel, i) => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        animation: tl, //이거 넣어주니 스크롤트리거 적용됨,
        start: "top top",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true
      });
    });

    return () => tl.scrollTrigger.kill();
  }, []);

  const addToRefs = (el) => {
    if (el && !textBoxRef.current.includes(el)) {
      textBoxRef.current.push(el);
    }
  };
  return (
    <>
      <Container></Container>
      <MainBox ref={wrapperRef}>
        <Pin>
          <Content ref={addToRefs}>
            <div>
              <p>Helloooooo</p>
            </div>
          </Content>
          <Content ref={addToRefs}>
            <div>
              <p>sfsdfssfsffsoooo</p>
            </div>
          </Content>
          <Content ref={addToRefs}>
            <div>
              <p>Pleaseeeeeeeeeeee</p>
            </div>
          </Content>
        </Pin>
        <Finish />
      </MainBox>
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.section`
  position: relative;
  margin-bottom: 100vh;
  overflow: visible;
`;
const Pin = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  border: 1px solid greenyellow;
`;
const Content = styled.div`
  /*absoulte로 한포지션에 다 몰구*/
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 3rem;
  > div {
    border: 1px solid hotpink;
    width: 100%;
    padding: 4rem 0;
    > p {
      transform-origin: 0 0 -500px;
      width: 100%;
      max-width: 500px;
      border: 1px solid aqua;
      color: white;
      /* opacity: 0; */
    }
  }
`;
const Finish = styled.div`
  width: 300px;
  height: 200px;
  background-color: yellow;
`;
