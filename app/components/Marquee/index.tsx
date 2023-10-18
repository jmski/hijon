import React from "react";

const Marquee = () => {
  function createLoopingElement(element, currentTranslation, speed) {
    let direction = true;
    let scrollTop = 0;
    let metric = 100;
    let lerp = {
      current: currentTranslation,
      target: currentTranslation,
      factor: 0.2,
    };

    function events() {
      let direction = 0;
      window.addEventListener("scroll", (e) => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        if (scrollY > scrollTop) {
          direction = 1;
          lerp.target += speed * 5;
        } else {
          direction = -1;
          lerp.target -= speed * 5;
        }
        scrollTop = scrollY <= 0 ? 0 : scrollY;
      });
    }

    function lerpFunc(current, target, factor) {
      lerp.current = current * (1 - factor) + target * factor;
    }

    function goForward() {
      lerp.target += speed;
      if (lerp.target > metric) {
        lerp.current -= metric * 2;
        lerp.target -= metric * 2;
      }
    }

    function goBackward() {
      lerp.target -= speed;
      if (lerp.target < -metric) {
        lerp.current -= -metric * 2;
        lerp.target -= -metric * 2;
      }
    }

    function animate() {
      direction ? goForward() : goBackward();
      lerpFunc(lerp.current, lerp.target, lerp.factor);

      if (element) {
        element.style.transform = `translateX(${lerp.current}%)`;
      }
    }

    events();

    return {
      animate,
    };
  }

  let elements = document.querySelectorAll(".item");

  const loopingElement1 = createLoopingElement(elements[0], 0, 0.08);
  const loopingElement2 = createLoopingElement(elements[1], -100, 0.08);

  let imagesArray = document.querySelectorAll(".images-wrapper");

  const loopingElement3 = createLoopingElement(imagesArray[0], 0, 0.1);
  const loopingElement4 = createLoopingElement(imagesArray[1], -100, 0.1);

  function render() {
    loopingElement1.animate();
    loopingElement2.animate();
    loopingElement3.animate();
    loopingElement4.animate();
    window.requestAnimationFrame(render);
  }

  render();

  return (
    <section className="overflow-hidden pt-20 h-56 w-full relative z-30">
      <div className="flex whitespace-nowrap text-7xl font-voga tracking-widest rotate-6">
        <div className="bg-white text-black absolute item">
          You know you&apos;re in love when you can&apos;t fall asleep&nbsp;
        </div>
        <div className="absolute text-white item">
          because reality is finally better than your dreams.&nbsp;
        </div>
        {/* <div className="bg-red-500 text-white absolute item">
        Suck the deep.
      </div> */}
      </div>
    </section>
  );
};

export default Marquee;
