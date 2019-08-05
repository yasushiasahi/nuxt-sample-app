<template>
  <footer class="footer">
    <section class="footer-contact">
      <div class="footer-contact__flex-main">
        <div class="footer-contact__flex-main__phone">
          <span class="tel-info">お電話から無料お見積もり</span>
          <span class="tel-number">
            <nuxt-link to="tel:092-710-8544" style="pointer-events:none;"
              >092-710-8544</nuxt-link
            >
          </span>
          <span class="tel-times">受付時間：9:00〜17:30</span>
        </div>
        <div class="footer-contact__flex-main__materials">
          <span class="tel-info">詳しい資料をお送りします</span>
          <nuxt-link to="/contact/form?question_type=2">
            <span class="btn btn-footer-materials">無料資料請求はこちら</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="footer-content">
      <div class="footer-content__logo">
        <img
          src="@/assets/img/logo_main.svg"
          alt="シェアするトラックの空きスペース シェアトラ"
        />
      </div>
      <nav class="footer-content__navigation">
        <ul>
          <li><nuxt-link to="/about">シェアトラとは</nuxt-link></li>
          <li>
            <nuxt-link to="/#userguide" class="sc">ユーザーガイド</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#app" class="sc">料金シミュレーター</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#news" class="sc">お知らせ</nuxt-link>
          </li>
          <li><nuxt-link to="/company">会社情報</nuxt-link></li>
          <li>
            <nuxt-link to="/contact/form?question_type=1"
              >お問い合わせ</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <div class="footnote">
        <span><nuxt-link to="/privacy">プライバシーポリシー</nuxt-link></span>
        <span>© Share Truck. All rights reserved.</span>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
/* footer */
.footer {
  background: #25304b;
  .footer-contact:last-child {
    max-width: 1000px;
  }
}
.footer-contact {
  background-color: #f8f8f8;
}
@media screen and (min-width: 769px) {
  .footer-contact {
    padding: 39px 0 34px;
  }
}
.footer-contact__flex-main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  span {
    color: #2f3136;
    text-align: center;
    display: block;
  }
  .tel-info {
    font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  .tel-number {
    padding-top: 4px;
    color: #2f3136;
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    font-weight: bold;
    a {
      color: #2f3136;
    }
  }
  .tel-times {
    padding-top: 3px;
    font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
    font-size: 12px;
  }
  > div {
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    padding-top: 36px;
    padding-bottom: 32px;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main .tel-info {
    font-size: 17px;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main .tel-number {
    padding-top: 0;
    font-size: 40px;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main .tel-times {
    font-size: 12px;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main > div {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    padding-top: 14px;
    padding-bottom: 14px;
  }
}
.footer-contact__flex-main__phone {
  -ms-flex-preferred-size: 90%;
  flex-basis: 90%;
  border-bottom: 1px solid #dedede;
  width: 335px;
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main__phone {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    width: auto;
    border: 0;
    border-right: 1px solid #707070;
    padding-right: 70px;
    padding-left: 22px;
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main__materials {
    padding-left: 70px;
  }
}
.footer-contact__flex-main__materials {
  span {
    font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
    text-align: center;
    font-weight: bold;
  }
  .btn-footer-materials {
    margin: 10px auto 0;
    padding: 14px 0;
    width: 275px;
    background-color: #8aa5ef;
    color: white;
    font-size: 14px;
    a {
      color: white;
    }
  }
}
@media screen and (min-width: 769px) {
  .footer-contact__flex-main__materials .btn-footer-materials {
    margin: 22px auto 0;
    padding: 22px 0;
    width: 322px;
    font-size: 16px;
  }
}
.footer-breadcrumb {
  padding-top: 6px;
  padding-left: 13px;
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  p {
    font-size: 11px;
  }
}
@media screen and (min-width: 769px) {
  .footer-breadcrumb {
    padding-top: 10px;
    padding-left: 10px;
  }
}
.footer-content {
  padding: 64px 46px;
  min-height: 212px;
  color: #fff;
  background-color: #25304b;
  text-align: center;
}
.footer-content__logo img {
  display: block;
  margin: 0 auto;
  width: 150px;
}
@media screen and (min-width: 860px) {
  .footer-content__logo img {
    float: left;
    margin: auto;
    width: 180px;
    text-align: left;
  }
}
.footer-content span {
  font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ',
    Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
  text-align: right;
}
.footer-content__navigation {
  padding-top: 48px;
  li {
    display: inline-block;
    padding-top: 16px;
    font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
    font-size: 12px;
    &:last-child {
      margin-right: 0;
    }
    a {
      padding: 10px;
      &:link,
      &:visited {
        color: #ffffff;
      }
    }
  }
}
@media screen and (min-width: 860px) {
  .footer-content__navigation {
    float: right;
    text-align: right;
    padding-top: 0;
  }
}
@media screen and (min-width: 860px) {
  .footer-content__navigation li {
    padding-top: 0;
  }
}
.footer-content .footnote {
  display: block;
  clear: both;
  margin-top: 70px;
  span {
    display: inline-block;
    color: #9b9b9b;
    font-size: 10px;
    a {
      color: #9b9b9b;
    }
  }
}
@media screen and (min-width: 860px) {
  .footer-content .footnote {
    text-align: right;
  }
}
/* helpers */
.sp-visible {
  display: block !important;
}
@media screen and (min-width: 769px) {
  .sp-visible {
    display: none !important;
  }
}
.pc-visible {
  display: none !important;
}
@media screen and (min-width: 769px) {
  .pc-visible {
    display: block !important;
  }
}
.fw-normal {
  font-weight: normal;
}
.fw-bold {
  font-weight: bold;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.clear-both {
  clear: both;
}
</style>
