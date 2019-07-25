<template>
  <div class="sun">
    <div class="face">
      <div class="pupil-left"></div>
      <div class="pupil-right"></div>
      <div class="smile"></div>
    </div>

    <div class="ray">
      <div class="beam r1"></div>
      <div class="beam r2"></div>
      <div class="beam r3"></div>
      <div class="beam r4"></div>
      <div class="beam r5"></div>
      <div class="beam r6"></div>
      <div class="beam r7"></div>
      <div class="beam r8"></div>
      <div class="beam r9"></div>
      <div class="beam r10"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    //raindrops

  }
};
</script>

<style lang="stylus" scoped>
$powder-blue = #B5DBE0;
$white = #F4F4F4;
$yellow = #FFF054;

.box {
  position: fixed;
  margin: auto;
  display: block;
  top: 15%;
  left: 10px;
}

/* sun */
.sun {
  position: fixed;
  background: $yellow;
  transform: scale(0.8);
  top: 1%;
  left: 1%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 0px 0px 30px 15px lighten($yellow, 20%);
  animation: pulse 2s infinite;
}

.face {
  position: absolute;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    background: #000000;
    border-radius: 50%;
    z-index: 5;
  }

  &:before {
    top: 20px;
    left: 60px;
  }

  &:after {
    top: 20px;
    left: 100px;
  }
}

.smile {
  position: absolute;
  top: 27px;
  left: 79px;
  width: 10px;
  height: 10px;
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent #000 #000 transparent;
  transform: rotate(45deg);
}

.pupil-left {
  position: absolute;
  border-radius: 50%;
  height: 3px;
  width: 3px;
  left: 63px;
  top: 20px;
  background: #ffffff;
  z-index: 7;
}

.pupil-right {
  position: absolute;
  border-radius: 50%;
  height: 3px;
  width: 3px;
  left: 104px;
  top: 20px;
  background: #ffffff;
  z-index: 7;
}

/* ray */
.ray {
  position: absolute;
  margin: auto;
  width: 150px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: spin 15s linear infinite;
}

.beam {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0), $yellow 40%, $yellow);
  margin-left: 10px;
  border-radius: 50% 50% 0 0;
  position: absolute;
  opacity: 0.2;
}

.r1 {
  height: 120px;
  width: 40px;
  transform: rotate(180deg);
  top: -120px;
  left: 42px;
}

.r2 {
  height: 120px;
  width: 30px;
  transform: rotate(210deg);
  top: -100px;
  right: -5px;
}

.r3 {
  height: 120px;
  width: 50px;
  transform: rotate(255deg);
  top: -30px;
  right: -65px;
}

.r4 {
  height: 120px;
  width: 24px;
  transform: rotate(300deg);
  top: 60px;
  left: 150px;
}

.r5 {
  height: 120px;
  width: 40px;
  top: 135px;
  left: 40px;
}

.r6 {
  height: 120px;
  width: 30px;
  transform: rotate(-35deg);
  top: 115px;
  right: -12px;
}

.r7 {
  height: 120px;
  width: 45px;
  transform: rotate(45deg);
  top: 100px;
  left: -45px;
}

.r8 {
  height: 130px;
  width: 20px;
  transform: rotate(75deg);
  top: 40px;
  left: -70px;
}

.r9 {
  height: 120px;
  width: 50px;
  transform: rotate(-255deg);
  top: -30px;
  left: -80px;
}

.r10 {
  height: 130px;
  width: 20px;
  transform: rotate(150deg);
  top: -110px;
  left: -20px;
}

/* cloud */
.cloud {
  position: absolute;
  background: $white;
  width: 250px;
  height: 100px;
  top: 40%;
  left: 25%;
  border-radius: 100px;
}

.cloud-right {
  width: 100px;
  height: 100px;
  top: -50%;
  right: 15%;
  background: $white;
  border-radius: 50%;
  position: absolute;
}

.cloud-left {
  width: 110px;
  height: 110px;
  top: -65%;
  left: 15%;
  border-radius: 200px;
  background: $white;
  position: absolute;
}

.cloud-bottom {
  width: 120px;
  height: 120px;
  bottom: -25%;
  right: 21%;
  border-radius: 100px;
  background: $white;
  position: absolute;
}

.eye-left {
  position: absolute;
  background: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 40%;
  left: 30%;
  z-index: 4;
}

.eye-right {
  position: absolute;
  background: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 40%;
  right: 30%;
  z-index: 4;
}

.pupil {
  position: absolute;
  border-radius: 50%;
  height: 5px;
  width: 5px;
  right: 13%;
  background: #ffffff;
}

.mouth {
  position: absolute;
  top: 59%;
  right: 46%;
  width: 10px;
  height: 10px;
  border: 3px solid;
  border-radius: 50%;
  border-color: #000 transparent transparent #000;
  transform: rotate(45deg);
}

.raindrop-left {
  position: absolute;
  top: 70%;
  left: 25%;
  width: 5px;
  height: 5px;
  border-radius: 0 50% 50% 50%;
  background: $powder-blue;
  border: 3px solid $powder-blue;
  transform: rotate(45deg);
}

.tear-left {
  position: absolute;
  top: 65px;
  left: 25%;
  width: 3px;
  height: 3px;
  border-radius: 0 50% 50% 50%;
  background: $powder-blue;
  border: 3px solid $powder-blue;
  transform: rotate(45deg);
  animation: falling 3s infinite;
}

.tear-right {
  position: absolute;
  top: 65px;
  right: 25%;
  width: 3px;
  height: 3px;
  border-radius: 0 50% 50% 50%;
  background: $powder-blue;
  border: 3px solid $powder-blue;
  transform: rotate(45deg);
  animation: falling 5s infinite;
}

.rain {
  width: 8px;
  height: 8px;
  background: $powder-blue;
  border-radius: 0 50% 50% 50%;
  transform: rotate(45deg);
}
/* animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 0.5;
  }

  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    animation-timing-function: ease-in;
  }

  50% {
    transform: scale(0.8);
    animation-timing-function: ease-out;
  }

  100% {
    transform: scale(.5);
  }
}
</style>
