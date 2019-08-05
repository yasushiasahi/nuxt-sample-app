<template>
  <div class="confirmation">
    <div class="titleArea">
      <StPageTitle>登録する情報のご確認</StPageTitle>
    </div>
    <StMainBlock>
      <template #left>
        <StH2>会社情報</StH2>
        <div class="info">
          <p class="info_label">会社名</p>
          <p class="info_furi">
            {{ entryForm.organization_shipperAddress_organizationPhonetic }}
          </p>
          <p class="info_moji">
            {{ entryForm.organization_shipperAddress_organizationName }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">担当者名</p>
          <p class="info_furi">
            {{ entryForm.organization_shipperAddress_userName }}
          </p>
          <p class="info_moji">
            {{ entryForm.organization_shipperAddress_userPhonetic }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">住所</p>
          <p class="info_moji">
            〒{{ entryForm.organization_shipperAddress_zipCode }}
          </p>
          <p class="info_moji">
            {{
              entryForm.organization_shipperAddress_address1 +
                entryForm.organization_shipperAddress_address2
            }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">電話番号</p>
          <p class="info_moji">
            {{ entryForm.organization_shipperAddress_phoneNumber }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">メールアドレス</p>
          <p class="info_moji">
            {{ entryForm.email }}
          </p>
        </div>
      </template>
      <template #right>
        <StH2>請求書送付先</StH2>
        <div class="info">
          <p class="info_label">会社名</p>
          <p class="info_furi">
            {{ entryForm.organization_invoiceAddress_organizationPhonetic }}
          </p>
          <p class="info_moji">
            {{ entryForm.organization_invoiceAddress_organizationName }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">担当者名</p>
          <p class="info_furi">
            {{ entryForm.organization_invoiceAddress_userName }}
          </p>
          <p class="info_moji">
            {{ entryForm.organization_invoiceAddress_userPhonetic }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">住所</p>
          <p class="info_moji">
            〒{{ entryForm.organization_invoiceAddress_zipCode }}
          </p>
          <p class="info_moji">
            {{
              entryForm.organization_invoiceAddress_address1 +
                entryForm.organization_invoiceAddress_address2
            }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">電話番号</p>
          <p class="info_moji">
            {{ entryForm.organization_invoiceAddress_phoneNumber }}
          </p>
        </div>
        <StH2>ログイン情報</StH2>
        <div class="info">
          <p class="info_label">メールアドレス</p>
          <p class="info_moji">
            {{ entryForm.email }}
          </p>
        </div>
        <div class="info">
          <p class="info_label">パスワード</p>
          <p class="info_moji">
            {{ entryForm.password }}
          </p>
        </div>
      </template>
    </StMainBlock>
    <div class="submitArea">
      <StButton type="submit">上記内容で保存する</StButton>
    </div>
  </div>
</template>

<script>
import StPageTitle from '@/components/atoms/StPageTitle.vue'
import StH2 from '@/components/atoms/StH2.vue'
import StButton from '@/components/atoms/StButton.vue'
import StMainBlock from '@/components/molecules/StMainBlock.vue'

import stAxios from '@/utilitys/stAxios.js'
import { objectNestten } from '@/utilitys/objectTransform.js'

export default {
  components: {
    StPageTitle,
    StH2,
    StMainBlock,
    StButton
  },
  data() {
    return {
      // entryForm: this.$store.getters['entryForm/get']
      entryForm: {
        email: 'zero.asahi+hifumi@karabiner.tech',
        password: 'password',
        organization_shipperAddress_subject: '0',
        organization_shipperAddress_zipCode: '8100031',
        organization_shipperAddress_address1: '福岡市中央区谷',
        organization_shipperAddress_address2: '1-5-49 ウイング１ 102号',
        organization_shipperAddress_phoneNumber: '09037217325',
        organization_shipperAddress_organizationName:
          '株式会社イーグルジャンプ',
        organization_shipperAddress_organizationPhonetic:
          'かぶしきがいしゃいーぐるじゃんぷ',
        organization_shipperAddress_userName: '瀧本ひふみ',
        organization_shipperAddress_userPhonetic: 'たきもとひふみ',
        organization_shipperAddress_address3: 'ウイング いち',
        organization_invoiceAddress_subject: '1',
        organization_invoiceAddress_zipCode: '',
        organization_invoiceAddress_address1: '',
        organization_invoiceAddress_address2: '',
        organization_invoiceAddress_phoneNumber: '',
        organization_invoiceAddress_organizationName: '',
        organization_invoiceAddress_organizationPhonetic: '',
        organization_invoiceAddress_userName: '',
        organization_invoiceAddress_userPhonetic: '',
        organization_invoiceAddress_address3: ''
      }
    }
  },
  methods: {
    async handleSave() {
      console.log(this.entryForm)
      const [ok, data] = await stAxios.post(
        'USER_CREATE',
        objectNestten(this.entryForm)
      )
      if (!ok) {
        console.log(data)
        return
      }
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-top: 30px;
    margin-left: 30px;
  }
}
.info {
  margin: 0 30px 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(206, 214, 220, 0.5);
  &_label {
    margin-bottom: 10px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #999999;
  }
  &_furi {
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
  }
  &_moji {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #000000;
  }
}
.titleArea {
  margin: 70px 0 50px;
  text-align: center;
}
.submitArea {
  margin: 70px 0 150px;
}
</style>
