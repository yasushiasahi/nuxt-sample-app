<template>
  <div class="entry">
    <div class="titleArea">
      <StPageTitle>取引会員登録フォーム</StPageTitle>
      <StAnnotation color="red">
        の項目は必須です
      </StAnnotation>
    </div>
    <StMainBlock>
      <template #left>
        <div class="SubBlock">
          <StH2 :required="true">会社情報</StH2>
          <StInput
            :value="values.organization_shipperAddress_organizationName"
            name="organization_shipperAddress_organizationName"
            label="会社名"
            round="top"
            @input="handleTextInput"
          />
          <StInput
            :value="values.organization_shipperAddress_organizationPhonetic"
            name="organization_shipperAddress_organizationPhonetic"
            label="よみがな"
            round="bottom"
            size="thin"
            @input="handleTextInput"
          />
          <StAnnotation>
            部署で請求を分ける場合は、部署名もご記入ください
          </StAnnotation>
          <br />
          <StInput
            :value="values.organization_shipperAddress_userName"
            name="organization_shipperAddress_userName"
            label="担当者名"
            round="top"
            @input="handleTextInput"
          />
          <StInput
            :value="values.organization_shipperAddress_userPhonetic"
            name="organization_shipperAddress_userPhonetic"
            label="よみがな"
            round="bottom"
            size="thin"
            @input="handleTextInput"
          />
        </div>
        <div class="SubBlock">
          <StH2 :required="true">住所</StH2>
          <div class="half-half">
            <StInput
              :value="values.organization_shipperAddress_zipCode"
              name="organization_shipperAddress_zipCode"
              label="〒"
              size="middle"
              @input="handleTextInput"
            />
            <StButton
              type="action"
              @click="
                handleZipSearchClick(
                  values.organization_shipperAddress_zipCode,
                  'organization_shipperAddress_address1'
                )
              "
              >住所を郵便番号から入力</StButton
            >
          </div>
          <br />
          <StInput
            :value="values.organization_shipperAddress_address1"
            name="organization_shipperAddress_address1"
            label="都道府県/市区町村"
            readonly
            @input="handleTextInput"
          /><br />
          <StInput
            :value="values.organization_shipperAddress_address2"
            name="organization_shipperAddress_address2"
            label="住所"
            round="top"
            @input="handleTextInput"
          />
          <StInput
            :value="values.organization_shipperAddress_address3"
            name="organization_shipperAddress_address3"
            label="よみがな"
            round="bottom"
            size="thin"
            @input="handleTextInput"
          />
          <StAnnotation>
            ビル・マンション名、部屋番号までご入力ください
          </StAnnotation>
        </div>
        <div class="SubBlock">
          <StH2>連絡先</StH2>
          <StInput
            :value="values.organization_shipperAddress_phoneNumber"
            name="organization_shipperAddress_phoneNumber"
            label="電話番号"
            size="middle"
            @input="handleTextInput"
          /><br />
          <StInput
            :value="values.organization_shipperAddress_fax"
            name="organization_shipperAddress_fax"
            label="FAX"
            size="middle"
            @input="handleTextInput"
          /><br />
          <StInput
            :value="values.email"
            name="email"
            label="メールアドレス"
            @input="handleTextInput"
          />
        </div>
      </template>
      <template #right>
        <div class="SubBlock">
          <StH2 :required="true">請求書送付先</StH2>
          <div class="half-half">
            <StRadio
              label="登録住所と同じ"
              name="isSameAsAdress"
              value="0"
              :model="isSameAsAdress"
              @change="handleRadioChange"
            />
            <StRadio
              label="請求先住所を入力"
              name="isSameAsAdress"
              value="1"
              :model="isSameAsAdress"
              @change="handleRadioChange"
            />
          </div>
          <template v-if="isSameAsAdress === '1'">
            <br />
            <StInput
              :value="values.organization_invoiceAddress_organizationName"
              name="organization_invoiceAddress_organizationName"
              label="会社名"
              round="top"
              @input="handleTextInput"
            />
            <StInput
              :value="values.organization_invoiceAddress_organizationPhonetic"
              name="organization_invoiceAddress_organizationPhonetic"
              label="よみがな"
              round="bottom"
              size="thin"
              @input="handleTextInput"
            />
            <br />
            <StInput
              :value="values.organization_invoiceAddress_userName"
              name="organization_invoiceAddress_userName"
              label="担当者名"
              round="top"
              @input="handleTextInput"
            />
            <StInput
              :value="values.organization_invoiceAddress_userPhonetic"
              name="organization_invoiceAddress_userPhonetic"
              label="よみがな"
              round="bottom"
              size="thin"
              @input="handleTextInput"
            />
            <br />
            <h3 class="kohead">住所</h3>
            <div class="half-half">
              <StInput
                :value="values.organization_invoiceAddress_zipCode"
                name="organization_invoiceAddress_zipCode"
                label="〒"
                size="middle"
                @input="handleTextInput"
              />
              <StButton
                type="action"
                @click="
                  handleZipSearchClick(
                    values.organization_invoiceAddress_zipCode,
                    'organization_invoiceAddress_address1'
                  )
                "
                >住所を郵便番号から入力</StButton
              >
            </div>
            <br />
            <StInput
              :value="values.organization_invoiceAddress_address1"
              name="organization_invoiceAddress_address1"
              label="都道府県/市区町村"
              readonly
              @input="handleTextInput"
            /><br />
            <StInput
              :value="values.organization_invoiceAddress_address2"
              name="organization_invoiceAddress_address2"
              label="住所"
              round="top"
              @input="handleTextInput"
            />
            <StInput
              :value="values.organization_invoiceAddress_address3"
              name="organization_invoiceAddress_address3"
              label="よみがな"
              round="bottom"
              size="thin"
              @input="handleTextInput"
            />
            <StAnnotation>
              ビル・マンション名、部屋番号までご入力ください
            </StAnnotation>
            <br />
            <h3 class="kohead">連絡先</h3>
            <StInput
              :value="values.organization_invoiceAddress_phoneNumber"
              name="organization_invoiceAddress_phoneNumber"
              label="電話番号"
              size="middle"
              @input="handleTextInput"
            /><br />
            <StInput
              :value="values.organization_invoiceAddress_fax"
              name="organization_invoiceAddress_fax"
              label="FAX"
              size="middle"
              @input="handleTextInput"
            />
          </template>
        </div>
        <div class="SubBlock">
          <StH2 :required="true">ログイン情報</StH2>
          <StInput :value="values.email" label="ログインID" readonly /><br />
          <StInput
            :value="values.password"
            name="password"
            label="パスワード(半角英数8文字以上)"
            @input="handleTextInput"
          />
        </div>
      </template>
    </StMainBlock>
    <div class="submitArea">
      <StButton type="submit" @click="handleGoToConfirmation">
        登録情報を確認する
      </StButton>
    </div>
  </div>
</template>

<script>
import StH2 from '@/components/atoms/StH2.vue'
import StAnnotation from '@/components/atoms/StAnnotation.vue'
import StButton from '@/components/atoms/StButton.vue'
import StPageTitle from '@/components/atoms/StPageTitle.vue'
import StInput from '@/components/molecules/StInput.vue'
import StMainBlock from '@/components/molecules/StMainBlock.vue'
import StRadio from '@/components/molecules/StRadio.vue'

import { getAdress } from '@/utilitys/yubinbango.js'
import { objectNestten } from '@/utilitys/objectTransform.js'

export default {
  head() {
    return {
      script: [
        {
          src:
            'https://yubinbango.github.io/yubinbango-core/yubinbango-core.js',
          charset: 'UTF-8'
        }
      ]
    }
  },
  components: {
    StMainBlock,
    StInput,
    StH2,
    StAnnotation,
    StButton,
    StRadio,
    StPageTitle
  },
  data() {
    return {
      values: {
        email: '',
        password: '',
        organization_shipperAddress_subject: '0',
        organization_shipperAddress_zipCode: '',
        organization_shipperAddress_address1: '',
        organization_shipperAddress_address2: '',
        organization_shipperAddress_phoneNumber: '',
        organization_shipperAddress_organizationName: '',
        organization_shipperAddress_organizationPhonetic: '',
        organization_shipperAddress_userName: '',
        organization_shipperAddress_userPhonetic: '',
        organization_shipperAddress_address3: '',
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
      },
      isSameAsAdress: '0'
    }
  },
  methods: {
    handleTextInput(ev) {
      const { name, value } = ev.target
      this.$set(this.values, name, value)
    },
    handleRadioChange(ev) {
      this.isSameAsAdress = ev.target.value
    },
    async handleZipSearchClick(zipcode, key) {
      const [ok, { location, address1, address2, errMsg }] = await getAdress(
        zipcode
      )
      if (!ok) {
        console.log(errMsg)
        return
      }
      this.$set(this.values, key, `${location}${address1}${address2}`)
    },
    handleGoToConfirmation() {
      const entryForm = objectNestten(this.values)
      this.$store.dispatch({ type: 'entryForm/set', entryForm })
      this.$router.push({ path: '/entry/confirmation' })
    }
  }
}
</script>

<style lang="scss" scoped>
.entry {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.half-half {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    max-width: 48%;
  }
}
.kohead {
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #333333;
  margin-bottom: 5px;
}
.titleArea {
  margin: 70px 0 30px;
  text-align: center;
}
.submitArea {
  margin: 70px 0 150px;
}
</style>
