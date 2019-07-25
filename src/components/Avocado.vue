<template>
<div class="container">
  <div class="css-drawing">
    <div class="avocado-body-right">
      <div class="avocado-face">
        <div class="smiley-eyes"></div>
        <div class="smiley-eyes right"></div>
        <div class="blush-l"></div>
        <div class="blush-r"></div>
        <div class="mouth happy"></div>
      </div>
      <div class="avocado-seedless">
        <div class="highlight-cover"></div>
      </div>
      <div class="shell"></div>
      <div class="shadow"></div>
    </div>
    <div class="avocado-body">
      <div class="avocado-face">
        <div class="circle-eyes">
          <div class="blush-l"></div>
          <div class="blush-r"></div>
        </div>
        <div class="mouth happy"></div>
      </div>
      <div class="avocado-seed">
        <div class="highlight"></div>
        <div class="highlight-cover"></div>
        <div class="highlight-circle"></div>
      </div>
      <div class="shell"></div>
      <div class="shadow"></div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
$avocado= #CDE06D;
$green= #9FCD65;
$shell= #3C632B;
$seed= #98602D;
$brown= #704F31;
$gray= #C8CEC2;
$dark= #2B1E13;
$pink= #EDB6B6;
$white= #FFFFFF;

.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.css-drawing {
  display: flex;
  flex-direction: row-reverse;
  width: 300px;
  height: 262px;
  align-self flex-end;
}
.avocado-body-right {
  position: relative;
  left: -10%;
  top: 5%;
  height: 50%;
  width: 30%;
  background: $avocado;
  border-radius: 50%  50%  50%  50%  / 75%  75% 40%  40%;
  border: 20px solid $green;
  box-shadow: 0 0 0 1px $shell;
  .shell {
    margin-left: 0%;
  }
  .shadow {
    left: 15px;
  }
  .mouth {
    left: 47%;
  }
  .blush-l, .blush-r {
    top: 75.5%;
  }
  .blush-l {
    left: 22%;
  }
}

.avocado-seedless {
  position: absolute;
  overflow: hidden;
  bottom: 8%;
  left: 17.5%;
  background: $green;
  border: 3px solid darken($green, 2%);
  width: 65%;
  height: 47%;
  border-radius: 50%  50%  50%  50%  / 60%  60%  40%  40%;
  .highlight {
    background: $green;
    opacity: 1;
  }
  .highlight-cover {
    background: $avocado;
    transform: rotate(0deg);
    width: 95%;
    height: 95%;
    top: 22%;
    left: -15%;
  }
}

.avocado-body {
  position: relative;
  top: 5%;
  left: -6%;
  height: 50%;
  width: 30%;
  background: $avocado;
  border-radius: 50%  50%  50%  50%  / 75%  75% 40%  40%;
  border: 20px solid $green;
  box-shadow: 0 0 0 1px $shell;
}

.shell {
  position: absolute;
  z-index: -1;
  background: $shell;
  margin-left: -40%;
  margin-top: -11%;
  width: 143%;
  height: 122%;
  border-radius: 50%  50%  50%  50%  / 65%  75%  30%  30%;
  animation: bounce 1.5s ease-in infinite;
}
.avocado-face {
  position: absolute;
  width: 90%;
  height: 40%;
  top: 0;
}

.circle-eyes {
  background: $dark;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 35%;
  margin-top: 42%;
  &:before {
    content: '';
    position: absolute;
    right: 20%;
    width: 10px;
    height: 10px;
    background: $dark;
    border-radius: 50%;
  }
}
.smiley-eyes {
  border-radius: 50%;
  width: 10px;
  position: relative;
  height: 10px;
  margin-left: 30%;
  margin-top: 41%;
  border: 3px solid;
  border-color: $dark transparent transparent $dark;
  transform: rotate(45deg);
}
.right {
  position: absolute;
  right: 22%;
  top: 0;
}
.blush-l, .blush-r {
  position: absolute;
  opacity: .7;
  width: 15px;
  height: 8px;
  background: $pink;
  border-radius: 50%;
  top: 78%;
}
.blush-l {
  left: 27%;
}
.blush-r {
  right: 12%;
}

.mouth {
  position:absolute;
  top: 70%;
  left: 52%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.happy {
  border: 3px solid;
  border-color: transparent $dark $dark transparent;
  transform: rotate(45deg);
}

.avocado-seed {
  position: absolute;
  bottom: 8%;
  left: 17.5%;
  background: $seed;
  border: 4px solid $brown;
  width: 65%;
  height: 47%;
  border-radius: 50%  50%  50%  50%  / 60%  60%  40%  40%;
}
.highlight {
  height: 80%;
  width: 80%;
  opacity: .7;
  background: $white;
  position: absolute;
  left: 13%;
  top: 14%;
  transform: rotate(8deg);
  border-radius: 50%  50%  50%  50%  / 60%  60%  40%  40%;
}
.highlight-cover {
  position: absolute;
  width: 80%;
  height: 95%;
  left: 6%;
  background: $seed;
  transform: rotate(20deg);
  border-radius: 50%  50%  50%  50%  / 60%  60%  40%  40%;
}
.highlight-circle {
  position: absolute;
  background: $white;
  width: 5px;
  height: 12px;
  right: 15px;
  opacity: .7;
  top: 19px;
  border-radius: 50%;
  transform: rotate(-20deg);
}

.shadow {
  width: 90%;
  height: 15%;
  background: $gray;
  opacity: .7;
  box-shadow: 2px 2px 10px rgba($gray, .3);
  border-radius: 50%;
  position: absolute;
  z-index: -3;
  bottom: -21%;
  transform: rotate(1deg);
  animation: scale 1.5s ease-in infinite;
}

.fa-heart {
  color: $pink;
  font-size: 1.5em;
  animation: scale 1.5s ease-out infinite;
}

h1 {
  margin-top: -70px;
  z-index: 3;
  text-transform: uppercase;
  color: $pink;
  letter-spacing: 4px;
  font-size: 1.2em;
}
i {
  font-size: 1.3em;
}


@keyframes bounce {
  50% {
     transform: translateY(-5px);
  }
}

@keyframes scale {
  50% {
    transform: scale(0.9);
  }
}

</style>
