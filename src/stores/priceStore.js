import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
const toast = useToast();

// import router from '../router';
import { savePrice } from '../api/commUseApi';
export const usePriceStore = defineStore('price', () => {
  // 견적의뢰 객체
  const priceObj = reactive({
    name: '',
    mobile: '',
    email: '',
    title: '',
    contents: '',
  });

  // 견적의뢰 저장
  async function doSavePriceObj() {
    if (priceObj.name.trim() == '') {
      toast.error('이름을 입력하세요.');
      document.getElementById('name').focus();
      return false;
    }
    if (priceObj.mobile.trim() == '') {
      toast.error('휴대폰번호를 입력하세요.');
      document.getElementById('mobile').focus();
      return false;
    }
    if (priceObj.email.trim() == '') {
      toast.error('이메일을 입력하세요.');
      document.getElementById('email').focus();
      return false;
    }
    if (priceObj.title.trim() == '') {
      toast.error('제목을 입력하세요.');
      document.getElementById('title').focus();
      return false;
    }
    if (priceObj.contents.trim() == '') {
      toast.error('의뢰내용을 입력하세요.');
      document.getElementById('contents').focus();
      return false;
    }

    try {
      let res = await savePrice(priceObj);

      if (res.status == 200) {
        toast.success(
          '관리자에게 견적의뢰 요청이 전달되었습니다.\n관리자가 확인 후 답변드리겠습니다.\n감사합니다.',
        );
      } else {
        toast.error('관리자에게 견적의뢰 요청이 실패하였습니다.');
      }

      // router.push({ name: 'home' });
    } catch (error) {
      toast.error('관리자에게 견적으뢰 요청이 실패하였습니다.');
      console.log(error);
    } finally {
      priceObj.name = '';
      priceObj.mobile = '';
      priceObj.email = '';
      priceObj.title = '';
      priceObj.contents = '';
    }
  }

  return { priceObj, doSavePriceObj };
});
