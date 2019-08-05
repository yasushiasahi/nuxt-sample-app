<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link to="/">
        <img
          src="@/assets/img/logo_main.svg"
          alt="シェアするトラックの空きスペース シェアトラ"
        />
      </nuxt-link>
    </div>
    <ul id="menu" class="menu">
      <li class="menu__about">
        <nuxt-link to="/about">シェアトラとは</nuxt-link>
      </li>
      <li class="menu__guide">
        <nuxt-link to="/#guideShare" class="sc">ユーザーガイド</nuxt-link>
      </li>
      <li class="menu__news">
        <nuxt-link to="/#news" class="sc">お知らせ</nuxt-link>
      </li>
      <li class="menu__company">
        <nuxt-link to="/company">会社情報</nuxt-link>
      </li>
      <li class="menu__contact">
        <nuxt-link to="/contact/form?question_type=1">お問い合わせ</nuxt-link>
      </li>
      <li class="menu__sim">
        <nuxt-link to="/#appShare" class="sc">
          <span class="btn btn-reservation">料金シミュレーター</span>
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
/* header */
.header {
  background-color: #ef8a9d;
  -webkit-box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 3;
  padding: 20px;
  color: #fff;
  clear: both;
  overflow: hidden;
}
.header__logo {
  float: left;
  margin: 0 0 0;
}
.header {
  a {
    display: block;
  }
  img {
    width: 170px;
    vertical-align: bottom;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #ef8a9d;
  }
  li {
    &:first-child a {
      padding-top: 5vw;
    }
    a {
      display: block;
      padding: 15px 20px;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .btn-reservation {
    display: inline-block;
    width: 100%;
    margin: 0 auto;
    padding: 15px 0;
    background-color: #fff;
    border-radius: 64px;
    color: #ef8a9d;
  }
  .menu {
    position: relative;
    clear: both;
    max-height: 0;
    width: 100%;
    -webkit-transition: max-height 0.5s ease-out;
    -o-transition: max-height 0.5s ease-out;
    transition: max-height 0.5s ease-out;
    .sp-visible {
      margin-top: 50px;
    }
  }
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 15px 10px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .navicon {
      position: relative;
      display: block;
      height: 4px;
      width: 24px;
      border-radius: 4px;
      background: #fff;
      -webkit-transition: background 0.2s ease-out;
      -o-transition: background 0.2s ease-out;
      transition: background 0.2s ease-out;
      &:before,
      &:after {
        background: #fff;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        -webkit-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        width: 100%;
        border-radius: 4px;
      }
      &:before {
        top: 10px;
      }
      &:after {
        top: -10px;
      }
    }
  }
  .menu-btn {
    display: none;
    &:checked ~ {
      .menu {
        max-height: 150vw;
      }
      .menu-icon {
        .navicon {
          background: transparent;
          &:before {
            -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
          &:after {
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        }
        &:not(.steps) .navicon {
          &:before,
          &:after {
            top: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 869px) {
  .header img {
    width: auto;
  }
}
@media screen and (min-width: 869px) {
  .header__logo {
    margin: 5px 0 0;
  }
  .header img {
    width: auto;
  }
}
/* menu */
/* menu icon */
/* menu btn */
@media (min-width: 868px) {
  .header {
    padding: 20px 10px 20px 20px;
    li {
      float: left;
      a,
      &:first-child a {
        padding: 20px 0.9vw;
        color: #ffffff;
        font-size: 13px;
        font-weight: bold;
      }
      &:last-child a {
        padding: 20px 0.9vw;
        color: #ffffff;
        font-size: 13px;
        font-weight: bold;
        padding: 0;
        margin: 5px 5px 0 10px;
      }
    }
    .menu {
      position: relative;
      clear: none;
      float: right;
      max-height: none;
      width: auto;
    }
    .menu-icon {
      display: none;
    }
    .btn-reservation {
      padding: 12px 20px;
      background-color: #fff;
      border-radius: 64px;
      color: #ef8a9d;
    }
  }
}
@media (min-width: 1000px) {
  .header {
    padding: 20px;
    li {
      float: left;
      a,
      &:first-child a {
        padding: 20px 1.2vw;
        font-size: 14px;
      }
      &:last-child a {
        margin: 5px 5px 0 10px;
      }
    }
    .btn-reservation {
      padding: 12px 28px;
    }
  }
}
</style>
